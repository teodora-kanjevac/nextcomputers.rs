import prisma from '~/src/utils/prisma'
import { FilterCategory } from '~/src/models/FilterCategory'
import {
    GLOBAL_FILTERS_TO_EXCLUDE,
    SUBCATEGORY_FILTER_MAP,
    SINGLE_PRODUCT_VALUE_THRESHOLD,
    USAGE_THRESHOLD_PERCENT,
    VALUE_DIVERSITY_THRESHOLD,
} from '~/src/utils/filter/globalFilterSettings'
import { ProductCardDTO } from '~/src/DTOs/ProductCard.dto'
import { isNaNObject } from '~/src/utils/ErrorHandling'
import { Prisma } from '@prisma/client'
import { mapRatingsToProductCards } from '~/src/utils/mapper/ratingMapper'
import { mapBigInt } from '~/src/utils/mapper/bigIntMapper'
import { fetchFilteredProductsSortedByDiscount, fetchFilteredProductsSortedByRating, fetchProductsSortedByDiscount } from '~/src/utils/sort/sortingUtils'

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
        const brand = product.brand
        if (brand) {
            const currentCount = filterMap.brand.get(brand) || 0
            filterMap.brand.set(brand, currentCount + 1)
        }

        const specifications = product.specification as Record<string, string>
        Object.entries(specifications).forEach(([key, value]) => {
            if (!filterMap[key]) {
                filterMap[key] = new Map()
            }
            const currentCount = filterMap[key].get(value) || 0
            filterMap[key].set(value, currentCount + 1)
        })
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
        Object.entries(filterMap).forEach(([key, values]) => {
            const totalOccurrences = Array.from(values.values()).reduce((sum, count) => sum + count, 0)
            const distinctValueCount = values.size

            if (totalOccurrences < products.length * USAGE_THRESHOLD_PERCENT) {
                delete filterMap[key]
                return
            }

            if (distinctValueCount > VALUE_DIVERSITY_THRESHOLD) {
                delete filterMap[key]
                return
            }

            const singleProductValues = Array.from(values.values()).filter(count => count === 1).length
            const singleProductPercentage = singleProductValues / distinctValueCount

            if (singleProductPercentage > SINGLE_PRODUCT_VALUE_THRESHOLD) {
                delete filterMap[key]
                return
            }
        })
    }

    const filterCategories = Object.entries(filterMap).map(([key, values]) => ({
        name: key === 'brand' ? 'Brend' : key,
        filters: Array.from(values.entries())
            .map(([name, amount]) => ({
                name,
                amount,
            }))
            .sort((a, b) => {
                const numA = parseInt(a.name.match(/\d+/)?.[0] || '0', 10)
                const numB = parseInt(b.name.match(/\d+/)?.[0] || '0', 10)

                return numA - numB || a.name.localeCompare(b.name)
            }),
    }))

    return filterCategories
}

export const fetchFilteredProducts = async (
    subcategoryId: number,
    sortBy: string = 'name',
    order: string = 'asc',
    filters: Record<string, string[]>,
    page: number = 1,
    pageSize: number = 15
): Promise<any[]> => {
    isNaNObject('subcategory', subcategoryId)

    const offset = (page - 1) * pageSize

    if (!filters || typeof filters !== 'object') {
        throw new Error('Invalid filters')
    }

    const allowedSortBy = ['name', 'discountPercentage', 'sale_price', 'rating']
    const allowedOrder = ['asc', 'desc']

    if (!allowedSortBy.includes(sortBy) || !sortBy.trim()) {
        sortBy = 'name'
    }

    if (!allowedOrder.includes(order) || !order.trim()) {
        order = 'asc'
    }

    const subcategoryCondition = Prisma.sql`subcategory_id = ${subcategoryId}`

    let brandCondition = Prisma.sql``
    if (filters.brand && filters.brand.length > 0) {
        brandCondition = Prisma.sql`AND brand IN (${Prisma.join(filters.brand)})`
    }

    const specificationConditions: Prisma.Sql[] = []
    Object.entries(filters).forEach(([key, values]) => {
        if (key === 'brand') return
        if (values.length > 0) {
            specificationConditions.push(
                Prisma.sql`JSON_EXTRACT(specification, '$."${Prisma.raw(key)}"') IN (${Prisma.join(values)})`
            )
        }
    })

    const specificationCondition =
        specificationConditions.length > 0
            ? Prisma.sql`AND (${Prisma.join(specificationConditions, ' AND ')})`
            : Prisma.sql``

    if (sortBy === 'discountPercentage') {
        const products: any = await fetchFilteredProductsSortedByDiscount(
            pageSize,
            offset,
            subcategoryCondition,
            brandCondition,
            specificationCondition
        )
        return mapRatingsToProductCards(products)
    }

    if (sortBy === 'rating') {
        const products: any = await fetchFilteredProductsSortedByRating(
            pageSize,
            offset,
            subcategoryCondition,
            brandCondition,
            specificationCondition
        )
        return mapRatingsToProductCards(products)
    }

    const orderByCondition = Prisma.sql`ORDER BY ${Prisma.raw(sortBy)} ${Prisma.raw(order)}`

    const query = Prisma.sql`
        SELECT * FROM product
        WHERE ${subcategoryCondition}
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
