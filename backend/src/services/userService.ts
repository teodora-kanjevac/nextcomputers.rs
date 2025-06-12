import prisma from '~/src/utils/prisma'
import { User } from '~/src/models/User'
import { isNullObject } from '~/src/utils/ErrorHandling'
import bcryptjs from 'bcryptjs'
import { UserFullnameDTO } from '~/src/DTOs/UserFullname.dto'
import { UserMeDTO } from '~/src/DTOs/UserMe.dto'
import { UserDataDTO } from '~/src/DTOs/UserData.dto'
import { UserStatisticsDTO } from '~/src/DTOs/UserStatistics.dto'
import { fetchUserId } from '../utils/jwt/fetchUser'

export const fetchUsers = async (): Promise<User[]> => {
    const user = await prisma.user.findMany()
    return user.map(user => new User(user))
}

export const checkUser = async (email: string): Promise<any> => {
    const user = await prisma.user.findUnique({
        where: {
            email,
        },
        select: {
            email: true,
        },
    })

    if (!user) {
        return { success: false }
    }

    return { success: true }
}

export const findUserByEmail = async (email: string): Promise<any> => {
    const user = await prisma.user.findUnique({
        where: {
            email,
        },
        select: {
            user_id: true,
            password_hash: true,
        },
    })

    return {
        id: user?.user_id,
        passwordHash: user?.password_hash,
    }
}

export const fetchMe = async (token: string): Promise<UserMeDTO> => {
    const userId = fetchUserId(token)

    const user = await prisma.user.findUnique({
        where: {
            user_id: userId,
        },
        select: {
            user_id: true,
            email: true,
            is_verified: true,
            cart: {
                select: {
                    cart_id: true,
                },
            },
        },
    })

    isNullObject('user', userId, user)

    return new UserMeDTO(user)
}

export const fetchUserFullName = async (token: string): Promise<UserFullnameDTO> => {
    const userId = fetchUserId(token)

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

    return new UserFullnameDTO(user)
}

export const fetchUserInfo = async (token: string): Promise<User> => {
    const userId = fetchUserId(token)

    const user = await prisma.user.findUnique({
        where: {
            user_id: userId,
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

    isNullObject('user', userId, user)

    return new User(user)
}

export const fetchUserStatistics = async (token: string): Promise<UserStatisticsDTO> => {
    const userId = fetchUserId(token)

    const statistics = await prisma.user.findUnique({
        where: {
            user_id: userId,
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

    const totalWishlistProducts = await prisma.wishlistitem.count({
        where: {
            wishlist: {
                user_id: userId,
            },
        },
    })

    const canceledOrders = await prisma.order.count({
        where: {
            user_id: userId,
            order_status: 'CANCELED',
        },
    })

    isNullObject('statistics', userId, statistics)

    if (!statistics) {
        throw new Error(`User statistics for ID ${userId} not found`)
    }

    return new UserStatisticsDTO({
        userId: userId,
        wishlistItems: totalWishlistProducts,
        orders: statistics._count.order,
        reviews: statistics._count.review,
        canceledOrders: canceledOrders,
    })
}

export const changeUserInfo = async (token: string, userData: UserDataDTO): Promise<UserDataDTO> => {
    const userId = fetchUserId(token)

    const existingUser = await prisma.user.findUnique({
        where: {
            user_id: userId,
        },
    })

    if (!existingUser) {
        throw new Error(`User with ID ${userId} not found`)
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
        where: { user_id: userId },
        data: updateData,
    })

    isNullObject('user', userId, user)

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
