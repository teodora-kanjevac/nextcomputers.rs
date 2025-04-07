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

        const isPasswordValid = await bcryptjs.compare(
            userData.password,
            user.password_hash
        )

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
        const payload = jwt.verify(token, process.env.EMAIL_VERIFY_SECRET!) as any as { userId: string }; 
      
        const user = await prisma.user.findUnique({ where: { user_id: payload.userId } });
      
        if (user && !user.is_verified) {
            await prisma.user.update({
                where: { user_id: payload.userId },
                data: { is_verified: true }
            });
            return { success: true, message: 'Email verified successfully' };
        } 
        else {
            return { success: false, message: 'Email already verified or user not found' };
        }
    } catch (error) {
        throw new Error(`Error verifying email: ${error}`)
    }
}

export const generateToken = async (userId: string) => {
    try {
        const token = jwt.sign({ id: userId }, process.env.JWT_SECRET as string, {
            expiresIn: '15m',
        })
        return token
    } catch (error) {
        throw new Error(`Error generating token: ${error}`)
    }
}
