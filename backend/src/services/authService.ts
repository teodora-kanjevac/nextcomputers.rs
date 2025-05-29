import prisma from '~/src/utils/prisma'
import { User } from '~/src/models/User'
import bcryptjs from 'bcryptjs'
import { RegisterUserDTO } from '~/src/DTOs/RegisterUser.dto'
import { LoginUserDTO } from '~/src/DTOs/LoginUser.dto'
import jwt from 'jsonwebtoken'
import { regenerateExpiredEmailToken } from '~/src/utils/jwt/regenerateExpiredToken'

export const registerUser = async (userData: RegisterUserDTO, cartId: string) => {
    const hashedPassword = await bcryptjs.hash(userData.password, 10)

    try {
        const existingUser = await prisma.user.findUnique({
            where: { email: userData.email },
        })

        if (existingUser) {
            throw new Error('Email already in use, please use another email')
        }

        const user = await prisma.user.create({
            data: {
                email: userData.email,
                first_name: userData.firstName,
                last_name: userData.lastName,
                address: userData.address,
                city: userData.city,
                phone_number: userData.phone,
                password_hash: hashedPassword,
                expires_at: new Date(Date.now() + 24 * 60 * 60 * 1000),
                wishlist: {
                    create: {
                        name: 'Default Wishlist',
                        is_default: true,
                    },
                }
            },
        })

        await prisma.cart.update({
            where: { cart_id: cartId },
            data: { user_id: user.user_id },
        })

        return new User({
            ...user,
            cartId,
        })
    } catch (error) {
        throw new Error(`Error creating user: ${error}`)
    }
}

export const loginUser = async (userData: LoginUserDTO) => {
    try {
        const user = await prisma.user.findUnique({
            where: { email: userData.email },
            include: {
                cart: {
                    select: { cart_id: true },
                },
            },
        })

        if (!user) {
            throw new Error('Invalid email or password')
        }

        const isPasswordValid = await bcryptjs.compare(userData.password, user.password_hash)

        if (!isPasswordValid) {
            throw new Error('Invalid email or password')
        }

        return {
            user: new User(user),
            cartId: user.cart[0]?.cart_id,
        }
    } catch (error) {
        throw new Error(`Error logging in: ${error}`)
    }
}

export const verifyEmail = async (token: string) => {
    try {
        const payload = jwt.verify(token, process.env.EMAIL_VERIFY_SECRET as string) as any as { id: string }
        const user = await prisma.user.findUnique({ where: { user_id: payload.id } })

        if (user && !user.is_verified) {
            await prisma.user.update({
                where: { user_id: payload.id },
                data: { is_verified: true, expires_at: null },
            })
            return { success: true, message: 'Email verified successfully' }
        } else {
            return { success: false, message: 'Email already verified or user not found' }
        }
    } catch (error: any) {
        console.error('Token verification failed:', error.message)

        try {
            if (error.name === 'TokenExpiredError') {
                return { success: false, message: 'Token expired' }
            } else {
                return { success: false, message: error.message }
            }
        } catch (error) {
            console.error('Failed to verify email:', error)
        }
    }
}

export const verifyEmailChange = async (token: string) => {
    try {
        const payload = jwt.verify(token, process.env.EMAIL_VERIFY_SECRET as string) as { id: string }
        return typeof payload.id === 'string'
    } catch (error: any) {
        console.error('Token verification failed:', error.message)

        try {
            if (error.name === 'TokenExpiredError') {
                await regenerateExpiredEmailToken(token)
            } else {
                console.error('Unhandled JWT error type')
            }
        } catch (error) {
            console.error('Failed to send email:', error)
        }
    }
}

export const verifyPasswordChange = async (token: string) => {
    try {
        const payload = jwt.verify(token, process.env.PASSWORD_VERIFY_SECRET as string) as { id: string }
        return typeof payload.id === 'string'
    } catch (error: any) {
        console.error('Token verification failed:', error.message)

        try {
            if (error.name === 'TokenExpiredError') {
                return { success: false, message: 'Token expired' }
            } else {
                return { success: false, message: error.message }
            }
        } catch (error) {
            console.error('Failed to verify email:', error)
        }
    }
}

export const generateToken = async (userToken: string, envSecret: string) => {
    const payload = jwt.verify(userToken, process.env.JWT_SECRET as string) as any as { id: string }
    const user = await prisma.user.findUnique({ where: { user_id: payload.id } })
    try {
        const token = jwt.sign({ id: user?.user_id }, envSecret as string, {
            expiresIn: '24h',
        })
        return token
    } catch (error) {
        throw new Error(`Error generating token: ${error}`)
    }
}
