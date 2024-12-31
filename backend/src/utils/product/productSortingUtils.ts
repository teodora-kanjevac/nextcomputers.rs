import prisma from '~/src/utils/prisma'
import { fetchSortedByDiscount, fetchSortedByRating } from '~/src/utils/sort/sortingUtils'

export const fetchSortedProducts = async (
    sortBy: string,
    order: string,
    pageSize: number,
    offset: number,
    subcategoryId?: number
): Promise<any[]> => {
    if (['discountPercentage', 'rating'].includes(sortBy)) {
        const sortFunction = sortBy === 'discountPercentage' ? fetchSortedByDiscount : fetchSortedByRating
        return await sortFunction(pageSize, offset, subcategoryId)
    }

    return prisma.product.findMany({
        skip: offset,
        take: pageSize,
        where: {
            available: true,
            ...(subcategoryId ? { subcategory_id: subcategoryId } : undefined)
        },
        select: {
            product_id: true,
            name: true,
            sale_price: true,
            available: true,
            discount_price: true,
            image_url: true,
        },
        orderBy: { [sortBy]: order },
    })
}
