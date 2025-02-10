import prisma from '~/src/utils/prisma'

export const removeUnavailableItemsFromCart = async () => {
    try {
        const deletedItems = await prisma.cartitem.deleteMany({
            where: {
                product: { available: false },
            },
        })
        console.log(`${deletedItems.count} unavailable items deleted.`)
    } catch (error) {
        console.error('Error removing items:', error)
    }
}
