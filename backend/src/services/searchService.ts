import { ProductCardDTO } from '~/src/DTOs/ProductCard.dto'
import prisma from '~/src/utils/prisma'
import { mapRatingsToProductCards } from '~/src/utils/mapper/ratingMapper'
import { calculateOffset } from '~/src/utils/utils'
import { fetchSearchResultsSortedByDiscount, fetchSearchResultsSortedByRating } from '~/src/utils/sort/sortingUtils'
import { Prisma } from '@prisma/client'
import { mapBigInt } from '~/src/utils/mapper/bigIntMapper'
import { handleFilterValidation } from '~/src/utils/filter/validateFilters'
import { buildSearchResultsQueryConditions } from '~/src/utils/filter/queryConditions'

export const fetchProductSearchResults = async (
    searchTerm: string,
    sortBy: string,
    order: string,
    page: number = 1,
    pageSize: number = 15
): Promise<ProductCardDTO[]> => {
    if (!searchTerm) {
        return []
    }

    const offset = calculateOffset(page, pageSize)

    if (['discountPercentage', 'rating'].includes(sortBy)) {
        const sortFunction =
            sortBy === 'discountPercentage' ? fetchSearchResultsSortedByDiscount : fetchSearchResultsSortedByRating
        const products = await sortFunction(pageSize, offset, searchTerm)
        return mapRatingsToProductCards(products)
    }

    const products = await prisma.product.findMany({
        skip: offset,
        take: pageSize,
        where: {
            OR: [
                { name: { contains: searchTerm } },
                { product_id: parseInt(searchTerm, 10) || undefined },
                { ean: searchTerm },
            ],
        },
        orderBy: { [sortBy]: order },
    })

    if (!sortBy) {
        const sortedProducts = products.sort((a, b) => {
            const aStartsWithQuery = a.name.toLowerCase().startsWith(searchTerm.toLowerCase())
            const bStartsWithQuery = b.name.toLowerCase().startsWith(searchTerm.toLowerCase())

            if (aStartsWithQuery && !bStartsWithQuery) return -1
            if (!aStartsWithQuery && bStartsWithQuery) return 1

            return a.name.localeCompare(b.name)
        })

        return mapRatingsToProductCards(sortedProducts)
    }

    return mapRatingsToProductCards(products)
}

export const fetchFilteredSearchResults = async (
    searchTerm: string,
    initSortBy: string,
    initOrder: string,
    initFilters: Record<string, string[]>,
    page: number = 1,
    pageSize: number = 15
): Promise<any[]> => {
    const offset = calculateOffset(page, pageSize)

    const { filters, sortBy, order } = handleFilterValidation(initFilters, initSortBy, initOrder)

    const { searchCondition, categoryCondition, brandCondition } = await buildSearchResultsQueryConditions(
        searchTerm,
        filters
    )

    if (['discountPercentage', 'rating'].includes(sortBy)) {
        const sortFunction =
            sortBy === 'discountPercentage' ? fetchSearchResultsSortedByDiscount : fetchSearchResultsSortedByRating
        const products = await sortFunction(pageSize, offset, searchTerm, brandCondition, categoryCondition)
        return mapRatingsToProductCards(products)
    }

    const orderByCondition = Prisma.sql`ORDER BY ${Prisma.raw(sortBy)} ${Prisma.raw(order)}`

    const query = Prisma.sql`
        SELECT * FROM product
        WHERE ${searchCondition}
        ${categoryCondition}
        ${brandCondition}
        ${orderByCondition}
        LIMIT ${pageSize}
        OFFSET ${offset}
    `

    const products = await prisma.$queryRaw<ProductCardDTO[]>(query)

    const mappedProducts = await mapBigInt(products)

    if (!initSortBy) {
        const sortedProducts = mappedProducts.sort((a, b) => {
            const aStartsWithQuery = a.name.toLowerCase().startsWith(searchTerm.toLowerCase())
            const bStartsWithQuery = b.name.toLowerCase().startsWith(searchTerm.toLowerCase())

            if (aStartsWithQuery && !bStartsWithQuery) return -1
            if (!aStartsWithQuery && bStartsWithQuery) return 1

            return a.name.localeCompare(b.name)
        })

        return mapRatingsToProductCards(sortedProducts)
    }

    return mapRatingsToProductCards(mappedProducts)
}
