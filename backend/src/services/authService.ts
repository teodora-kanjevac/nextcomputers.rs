import prisma from '~/src/utils/prisma'
import { User } from '~/src/models/User'
import bcryptjs from 'bcryptjs'
import { RegisterUserDTO } from '~/src/DTOs/RegisterUser.dto'
import { LoginUserDTO } from '~/src/DTOs/LoginUser.dto'

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


