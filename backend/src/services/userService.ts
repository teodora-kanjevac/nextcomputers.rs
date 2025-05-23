import prisma from '~/src/utils/prisma'
import { User } from '~/src/models/User'
import { isNullObject } from '~/src/utils/ErrorHandling'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { UserFullnameDTO } from '~/src/DTOs/UserFullname.dto'
import { UserMeDTO } from '~/src/DTOs/UserMe.dto'
import { UserDataDTO } from '../DTOs/UserData.dto'
import { UserStatisticsDTO } from '../DTOs/UserStatistics.dto'

export const fetchUsers = async (): Promise<User[]> => {
    const user = await prisma.user.findMany()
    return user.map(user => new User(user))
}

export const fetchMe = async (token: string): Promise<UserMeDTO> => {
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

    isNullObject('user', decoded.id, user)

    return new UserMeDTO(user)
}

export const fetchUserFullName = async (token: string): Promise<UserFullnameDTO> => {
    const decoded = jwt.decode(token) as { id: string }

    const user = await prisma.user.findUnique({
        where: {
            user_id: decoded.id,
        },
        select: {
            first_name: true,
            last_name: true,
        },
    })

    isNullObject('user', decoded.id, user)

    return new UserFullnameDTO(user)
}

export const fetchUserInfo = async (token: string): Promise<User> => {
    const decoded = jwt.decode(token) as { id: string }

    const user = await prisma.user.findUnique({
        where: {
            user_id: decoded.id,
        },
        select: {
            user_id: true,
            email: true,
            first_name: true,
            last_name: true,
            phone_number: true,
            address: true,
            city: true,
            zipcode: true,
        },
    })

    isNullObject('user', decoded.id, user)

    return new User(user)
}

export const fetchUserStatistics = async (token: string): Promise<UserStatisticsDTO> => {
    const decoded = jwt.decode(token) as { id: string }

    const statistics = await prisma.user.findUnique({
        where: {
            user_id: decoded.id,
        },
        select: {
            user_id: true,
            order: true,
            review: true,
            _count: {
                select: {
                    order: true,
                    review: true,
                },
            },
        },
    })

    const canceledOrders = await prisma.order.count({
        where: {
            user_id: decoded.id,
            order_status: 'CANCELED',
        },
    })

    isNullObject('statistics', decoded.id, statistics)

    if (!statistics) {
        throw new Error(`User statistics for ID ${decoded.id} not found`)
    }

    return new UserStatisticsDTO({
        userId: decoded.id,
        wishlistItems: 0,
        orders: statistics._count.order,
        reviews: statistics._count.review,
        canceledOrders: canceledOrders,
    })
}

export const changeUserInfo = async (token: string, userData: UserDataDTO): Promise<UserDataDTO> => {
    const decoded = jwt.decode(token) as { id: string }

    const existingUser = await prisma.user.findUnique({
        where: {
            user_id: decoded.id,
        },
    })

    if (!existingUser) {
        throw new Error(`User with ID ${decoded.id} not found`)
    }

    const updateData = {
        first_name: userData.firstName || '',
        last_name: userData.lastName || '',
        phone_number: userData.phone || '',
        address: userData.address || '',
        city: userData.city || '',
        zipcode: userData.zipcode || '',
    }

    const user = await prisma.user.update({
        where: { user_id: decoded.id },
        data: updateData,
    })

    isNullObject('user', decoded.id, user)

    return new UserDataDTO(user)
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
    } catch (error) {
        throw new Error(`Error updating user password: ${error}`)
    }
}
