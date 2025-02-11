import { ProductCardDTO } from '~/src/DTOs/ProductCard.dto'
import prisma from '~/src/utils/prisma'
import { mapRatingsToProductCards } from '~/src/utils/mapper/ratingMapper'
import { calculateOffset } from '~/src/utils/utils'
import { fetchSearchResultsSortedByDiscount, fetchSearchResultsSortedByRating } from '~/src/utils/sort/sortingUtils'
import { handleFilterValidation } from '~/src/utils/filter/validateFilters'
import { buildSearchResultsQueryConditions } from '~/src/utils/filter/queryConditions'
import { searchProducts, setupFlexProductSearch } from '~/src/utils/search/productFlexSearch'

export const fetchProductSearchResults = async (
    searchTerm: string,
    sortBy: string,
    order: string,
    page: number = 1,
    pageSize: number = 15
): Promise<ProductCardDTO[]> => {
    if (!searchTerm) return []

    const offset = calculateOffset(page, pageSize)

    const products = await prisma.product.findMany({
        where: {
            available: true,
        },
    })

    const index = setupFlexProductSearch(products)

    const matchedIds = searchProducts(index, products, searchTerm).map(p => p.product_id)

    if (matchedIds.length === 0) {
        return []
    }

    if (['discountPercentage', 'rating'].includes(sortBy)) {
        const sortFunction =
            sortBy === 'discountPercentage' ? fetchSearchResultsSortedByDiscount : fetchSearchResultsSortedByRating

        const products = await sortFunction(pageSize, offset, matchedIds)
        return mapRatingsToProductCards(products)
    }

    const sortedProducts = await prisma.product.findMany({
        skip: offset,
        take: pageSize,
        where: {
            available: true,
            product_id: { in: matchedIds },
        },
        orderBy: { [sortBy]: order },
    })

    return mapRatingsToProductCards(sortedProducts)
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

    const { categoryCondition, brandCondition } = await buildSearchResultsQueryConditions(filters)

    const products = await prisma.product.findMany({
        where: {
            available: true,
        },
        select: { product_id: true, name: true, ean: true },
    })

    const index = setupFlexProductSearch(products)

    const matchedIds = searchProducts(index, products, searchTerm).map(p => p.product_id)

    if (matchedIds.length === 0) {
        return []
    }

    if (['discountPercentage', 'rating'].includes(sortBy)) {
        const sortFunction =
            sortBy === 'discountPercentage' ? fetchSearchResultsSortedByDiscount : fetchSearchResultsSortedByRating

        const products = await sortFunction(pageSize, offset, matchedIds, brandCondition, categoryCondition)
        return mapRatingsToProductCards(products)
    }

    const filterConditions: any = {
        available: true,
        product_id: { in: matchedIds },
    }

    if (filters.brand?.length) {
        filterConditions.brand = { in: filters.brand }
    }

    if (filters.subcategory?.length) {
        const subcategories = await prisma.subcategory.findMany({
            where: { name: { in: filters.subcategory } },
            select: { subcategory_id: true },
        })

        const validSubcategoryIds = subcategories.map(sub => sub.subcategory_id)
        if (validSubcategoryIds.length > 0) {
            filterConditions.subcategory_id = { in: validSubcategoryIds }
        }
    }

    const sortedProducts = await prisma.product.findMany({
        skip: offset,
        take: pageSize,
        where: filterConditions,
        orderBy: { [sortBy]: order },
    })

    return mapRatingsToProductCards(sortedProducts)
}
