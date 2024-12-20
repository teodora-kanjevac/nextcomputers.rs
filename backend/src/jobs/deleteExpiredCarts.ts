import prisma from '~/src/utils/prisma'

export const deleteExpiredCarts = async () => {
    try {
        const now = new Date()

        const deletedCarts = await prisma.cart.deleteMany({
            where: {
                user_id: null,
                created_at: {
                    lt: new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000),
                },
            },
        })
        console.log(`${deletedCarts.count} expired carts deleted.`)
    } catch (error) {
        console.error('Error deleting expired carts:', error)
    }
}
