import prisma from '~/src/utils/prisma'

export const deleteUnverifiedUsers = async () => {
    try {
        const users = await prisma.user.findMany({
            where: {
                is_verified: false,
                expires_at: { lt: new Date() },
            },
            select: { user_id: true },
        })

        const userIds = users.map(u => u.user_id)

        await prisma.cart.deleteMany({
            where: { user_id: { in: userIds } },
        })
        await prisma.pendingverification.deleteMany({
            where: { expires_at: { lt: new Date() } },
        })
        await prisma.user.deleteMany({
            where: { user_id: { in: userIds } },
        })

        console.log(`Deleted ${users.length} unverified users.`)
    } catch (error) {
        console.error('Failed to delete unverified users:', error)
    }
}
