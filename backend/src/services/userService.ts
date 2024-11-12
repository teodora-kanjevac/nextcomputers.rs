import prisma from '~/src/utils/prisma'
import { User } from '~/src/models/User'

export const fetchUsers = async (): Promise<User[]> => {
    const user = await prisma.user.findMany()
    return user.map(user => new User(user))
}

export const fetchUserFullName = async (userId: string): Promise<User> => {
    const user = await prisma.user.findUnique({
        where:{
            user_id: userId
        },
        select:{
            first_name: true,
            last_name: true
        }
    })
    return new User(user)
}