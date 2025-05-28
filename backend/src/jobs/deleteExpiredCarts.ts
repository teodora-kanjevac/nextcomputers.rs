import prisma from '~/src/utils/prisma'

export const deleteExpiredCarts = async () => {
    try {
        const now = new Date()
        const thresholdDate = new Date(now.getTime() - 10 * 24 * 60 * 60 * 1000)

        const deletedCarts = await prisma.cart.deleteMany({
            where: {
                user_id: null,
                last_accessed_at: {
                    lt: thresholdDate,
                },
            },
        })
        console.log(`Deleted ${deletedCarts.count} expired carts.`)
    } catch (error) {
        console.error('Error deleting expired carts:', error)
    }
}
