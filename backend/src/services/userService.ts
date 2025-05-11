import prisma from '~/src/utils/prisma'
import { User } from '~/src/models/User'
import { isNullObject } from '~/src/utils/ErrorHandling'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const fetchUsers = async (): Promise<User[]> => {
    const user = await prisma.user.findMany()
    return user.map(user => new User(user))
}

export const fetchMe= async (token: string): Promise<User> => {
    const decoded = jwt.decode(token) as { id: string }

    const user = await prisma.user.findUnique({
        where: {
            user_id: decoded.id,
        },
        select: {
            user_id: true,
            email: true,
        },
    })
    return new User(user)
}

export const fetchUserFullName = async (userId: string): Promise<User> => {
    const user = await prisma.user.findUnique({
        where: {
            user_id: userId,
        },
        select: {
            first_name: true,
            last_name: true,
        },
    })

    isNullObject('user', userId, user)

    return new User(user)
}

export const editBasicUserInfo = async (userId: string, userData: any): Promise<User> => {
    const existingUser = await prisma.user.findUnique({
        where: {
            user_id: userId,
        },
    })

    isNullObject('user', userId, existingUser)

    const user = await prisma.user.update({
        where: {
            user_id: userId,
        },
        data: {
            first_name: userData.firstName ?? existingUser!.first_name,
            last_name: userData.lastName ?? existingUser!.last_name,
            address: userData.address ?? existingUser!.address,
            city: userData.city ?? existingUser!.city,
            phone_number: userData.phoneNumber ?? existingUser!.phone_number,
        },
    })

    isNullObject('user', userId, user)

    return new User(user)
}

export const changeUserEmail = async (email: any, userId?: string): Promise<User> => {
    try {
        const existingUser = await prisma.user.findUnique({
            where: {
                user_id: userId,
            },
        })

        isNullObject('user', userId, existingUser)

        const user = await prisma.user.update({
            where: {
                user_id: userId,
            },
            data: {
                email: email,
            },
        })

        return new User(user)
    } catch (error) {
        throw new Error(`Error updating user email: ${error}`)
    }
}

export const changeUserPassword = async (password: any, userId?: string): Promise<User> => {
    try {
        const existingUser = await prisma.user.findUnique({
            where: {
                user_id: userId,
            },
        })

        isNullObject('user', userId, existingUser)

        const hashPassword = await bcryptjs.hash(password, 10)

        const user = await prisma.user.update({
            where: {
                user_id: userId,
            },
            data: {
                password_hash: hashPassword,
            },
        })

        return new User(user)
    }
    catch (error) {
        throw new Error(`Error updating user password: ${error}`)
    }
}
