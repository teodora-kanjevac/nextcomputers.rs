import prisma from '~/src/utils/prisma'
import { mapRatingsToProductCards } from '~/src/utils/mapper/ratingMapper'
import { calculateOffset } from '~/src/utils/utils'
import { fetchSearchResultsSortedByDiscount, fetchSearchResultsSortedByRating } from '~/src/utils/sort/sortingUtils'
import { handleFilterValidation } from '~/src/utils/filter/validateFilters'
import { buildSearchResultsQueryConditions } from '~/src/utils/filter/queryConditions'
import { fetchMatchedProductIds } from '~/src/utils/search/fetchMatchedProducts'
import { ProductCardDTO } from '~/src/DTOs/ProductCard.dto'
import { Prisma } from '@prisma/client'
import { mapBigInt } from '~/src/utils/mapper/bigIntMapper'

export const fetchFilteredSearchResults = async (
    searchTerm: string,
    sortBy: string,
    order: string,
    initFilters: Record<string, string[]>,
    page: number = 1,
    pageSize: number = 15
): Promise<ProductCardDTO[]> => {
    const offset = calculateOffset(page, pageSize)

    const filters = handleFilterValidation(initFilters)

    const { categoryCondition, brandCondition } = await buildSearchResultsQueryConditions(filters)

    const matchedIds = await fetchMatchedProductIds(searchTerm)

    let orderByCondition: Prisma.Sql = Prisma.empty

    if (sortBy && ['discountPercentage', 'rating'].includes(sortBy)) {
        const sortFunction =
            sortBy === 'discountPercentage' ? fetchSearchResultsSortedByDiscount : fetchSearchResultsSortedByRating

        const products = await sortFunction(pageSize, offset, matchedIds, brandCondition, categoryCondition)
        return mapRatingsToProductCards(products)
    }

    if (sortBy && order) {
        orderByCondition = Prisma.sql`ORDER BY ${Prisma.raw(sortBy)} ${Prisma.raw(order)}`
    }

    const query = Prisma.sql`
        SELECT * FROM product
        WHERE available = TRUE
        AND product_id IN (${Prisma.join(matchedIds)})
        ${categoryCondition}
        ${brandCondition}
        ${orderByCondition}
        LIMIT ${pageSize}
        OFFSET ${offset}
    `

    const products = await prisma.$queryRaw<ProductCardDTO[]>(query)

    const mappedProducts = await mapBigInt(products)

    return mapRatingsToProductCards(mappedProducts)
}
