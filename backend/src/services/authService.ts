import prisma from '~/src/utils/prisma'
import { User } from '~/src/models/User'
import bcryptjs from 'bcryptjs'
import { RegisterUserDTO } from '~/src/DTOs/RegisterUser.dto'
import { LoginUserDTO } from '~/src/DTOs/LoginUser.dto'
import jwt from 'jsonwebtoken'

export const registerUser = async (userData: RegisterUserDTO) => {
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
                phone_number: userData.phoneNumber,
                password_hash: hashedPassword,
            },
        })

        return new User(user)
    } catch (error) {
        throw new Error(`Error creating user: ${error}`)
    }
}

export const loginUser = async (userData: LoginUserDTO) => {
    try {
        const user = await prisma.user.findUnique({
            where: { email: userData.email },
        })

        if (!user) {
            throw new Error('Invalid email or password')
        }

        const isPasswordValid = await bcryptjs.compare(userData.password, user.password_hash)

        if (!isPasswordValid) {
            throw new Error('Invalid email or password')
        }

        return new User(user)
    } catch (error) {
        throw new Error(`Error logging in: ${error}`)
    }
}

export const verifyEmail = async (token: string) => {
    try {
        const payload = jwt.verify(token, process.env.EMAIL_VERIFY_SECRET!) as any as { id: string }
        const user = await prisma.user.findUnique({ where: { user_id: payload.id } })

        if (user && !user.is_verified) {
            await prisma.user.update({
                where: { user_id: payload.id },
                data: { is_verified: true },
            })
            return { success: true, message: 'Email verified successfully' }
        } else {
            return { success: false, message: 'Email already verified or user not found' }
        }
    } catch (error: any) {
        console.error('Token verification failed:', error.message)

        try {
            if (error.name === 'TokenExpiredError') {
                const decoded = jwt.decode(token) as { id: string }
                const newToken = generateToken(decoded?.id)

                //Ovde stavi funkciju da se posalje mail :'D
            } else {
                console.log('Unhandled JWT error type')
            }
        } catch (error) {
            console.log('Failed to send email:', error)
        }
    }
}

export const verifyEmailChange = (token: string): boolean => {
    try {
        const payload = jwt.verify(token, process.env.EMAIL_VERIFY_SECRET!) as { id: string }
        console.log(payload)
        return typeof payload.id === 'string'
    } catch (error) {
        return false
    }
}

export const generateToken = async (userId: string) => {
    try {
        const token = jwt.sign({ id: userId }, process.env.EMAIL_VERIFY_SECRET as string, {
            expiresIn: '24h',
        })
        console.log(userId)
        return token
    } catch (error) {
        throw new Error(`Error generating token: ${error}`)
    }
}
