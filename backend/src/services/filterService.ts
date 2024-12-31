import prisma from '~/src/utils/prisma'
import { FilterCategory } from '~/src/models/FilterCategory'
import { GLOBAL_FILTERS_TO_EXCLUDE, SUBCATEGORY_FILTER_MAP } from '~/src/utils/filter/globalFilterSettings'
import { ProductCardDTO } from '~/src/DTOs/ProductCard.dto'
import { isNaNObject } from '~/src/utils/ErrorHandling'
import { Prisma } from '@prisma/client'
import { mapRatingsToProductCards } from '~/src/utils/mapper/ratingMapper'
import { mapBigInt } from '~/src/utils/mapper/bigIntMapper'
import { fetchSortedByRating, fetchSortedByDiscount } from '~/src/utils/sort/sortingUtils'
import { calculateOffset } from '~/src/utils/utils'
import { buildSubcategoryQueryConditions } from '~/src/utils/filter/queryConditions'
import { handleFilterValidation } from '~/src/utils/filter/validateFilters'
import {
    filterMapFilterCriteria,
    mapFiltersToCategories,
    processSpecifications,
} from '~/src/utils/filter/filterFetchingUtils'

export const fetchFilters = async (subcategoryId: number): Promise<FilterCategory[]> => {
    isNaNObject('subcategory', subcategoryId)

    const products = await prisma.product.findMany({
        where: {
            subcategory_id: subcategoryId,
        },
        select: {
            brand: true,
            specification: true,
        },
    })

    const filterMap: Record<string, Map<string, number>> = {
        brand: new Map(),
    }

    products.forEach(product => {
        if (product.brand) {
            const currentCount = filterMap.brand.get(product.brand) || 0
            filterMap.brand.set(product.brand, currentCount + 1)
        }
        processSpecifications(product.specification as Record<string, string>, filterMap)
    })

    GLOBAL_FILTERS_TO_EXCLUDE.forEach(filter => delete filterMap[filter])

    const allowedFilters = SUBCATEGORY_FILTER_MAP[subcategoryId]
    if (allowedFilters) {
        Object.keys(filterMap).forEach(filterKey => {
            if (filterKey !== 'brand' && !allowedFilters.includes(filterKey)) {
                delete filterMap[filterKey]
            }
        })
    } else {
        filterMapFilterCriteria(filterMap, products)
    }

    return mapFiltersToCategories(filterMap)
}

export const fetchSearchFilters = async (searchTerm: string): Promise<FilterCategory[]> => {
    if (!searchTerm) return []

    const products = await prisma.product.findMany({
        where: {
            available: true,
            OR: [
                { name: { contains: searchTerm } },
                { product_id: parseInt(searchTerm, 10) || undefined },
                { ean: searchTerm },
            ],
        },
        select: {
            brand: true,
            subcategory: {
                select: {
                    subcategory_id: true,
                    name: true,
                },
            },
        },
    })

    const filterMap: Record<string, Map<string, number>> = {
        brand: new Map(),
        subcategory: new Map(),
    }

    products.forEach(product => {
        if (product.subcategory) {
            const subcategoryName = product.subcategory.name
            const currentCount = filterMap.subcategory.get(subcategoryName) || 0
            filterMap.subcategory.set(subcategoryName, currentCount + 1)
        }
        if (product.brand) {
            const currentCount = filterMap.brand.get(product.brand) || 0
            filterMap.brand.set(product.brand, currentCount + 1)
        }
    })

    return mapFiltersToCategories(filterMap)
}

export const fetchFilteredProducts = async (
    subcategoryId: number,
    initSortBy: string,
    initOrder: string,
    initFilters: Record<string, string[]>,
    page: number = 1,
    pageSize: number = 15
): Promise<any[]> => {
    isNaNObject('subcategory', subcategoryId)

    const offset = calculateOffset(page, pageSize)

    const { filters, sortBy, order } = handleFilterValidation(initFilters, initSortBy, initOrder)

    const { subcategoryCondition, brandCondition, specificationCondition } = buildSubcategoryQueryConditions(
        subcategoryId,
        filters
    )

    if (['discountPercentage', 'rating'].includes(sortBy)) {
        const sortFunction = sortBy === 'discountPercentage' ? fetchSortedByDiscount : fetchSortedByRating
        const products = await sortFunction(pageSize, offset, subcategoryId, brandCondition, specificationCondition)
        return mapRatingsToProductCards(products)
    }

    const orderByCondition = Prisma.sql`ORDER BY ${Prisma.raw(sortBy)} ${Prisma.raw(order)}`

    const query = Prisma.sql`
        SELECT * FROM product
        WHERE available = TRUE
        AND ${subcategoryCondition}
        ${brandCondition}
        ${specificationCondition}
        ${orderByCondition}
        LIMIT ${pageSize}
        OFFSET ${offset}
    `

    const products = await prisma.$queryRaw<ProductCardDTO[]>(query)

    const mappedProducts = await mapBigInt(products)

    return mapRatingsToProductCards(mappedProducts)
}
