import prisma from '~/src/utils/prisma'
import { mapRatingsToProductCards } from '~/src/utils/mapper/ratingMapper'
import { calculateOffset } from '~/src/utils/utils'
import { fetchSearchResultsSortedByDiscount, fetchSearchResultsSortedByRating } from '~/src/utils/sort/sortingUtils'
import { handleFilterValidation } from '~/src/utils/filter/validateFilters'
import { buildSearchResultsQueryConditions } from '~/src/utils/filter/queryConditions'
import { fetchMatchedProductIds } from '~/src/utils/search/fetchMatchedProducts'
import { ProductCardDTO } from '~/src/DTOs/ProductCard.dto'

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

    if (sortBy && ['discountPercentage', 'rating'].includes(sortBy)) {
        const sortFunction =
            sortBy === 'discountPercentage' ? fetchSearchResultsSortedByDiscount : fetchSearchResultsSortedByRating

        const products = await sortFunction(pageSize, offset, matchedIds, brandCondition, categoryCondition)
        return mapRatingsToProductCards(products)
    }

    const filterConditions: any = {
        available: true,
        product_id: { in: matchedIds },
    }

    const queryConditions: any = {
        where: filterConditions,
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

    if (sortBy && order) {
        queryConditions.orderBy = { [sortBy]: order }
    }

    const products = await prisma.product.findMany(queryConditions)

    const finalProducts =
        sortBy && order ? products : products.filter(product => matchedIds.includes(product.product_id))

    const paginatedProducts = finalProducts.slice(offset, offset + pageSize)

    return mapRatingsToProductCards(paginatedProducts)
}
