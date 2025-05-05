import prisma from '~/src/utils/prisma'
import { User } from '~/src/models/User'
import { isNullObject } from '~/src/utils/ErrorHandling'

export const fetchUsers = async (): Promise<User[]> => {
    const user = await prisma.user.findMany()
    return user.map(user => new User(user))
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
