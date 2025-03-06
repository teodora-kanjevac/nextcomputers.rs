import { FilterCategory } from '~/src/models/FilterCategory'
import {
    SINGLE_PRODUCT_VALUE_THRESHOLD,
    USAGE_THRESHOLD_PERCENT,
    VALUE_DIVERSITY_THRESHOLD,
} from '~/src/utils/filter/globalFilterSettings'
import prisma from '~/src/utils/prisma'

export const fetchAllFiltersFromCategory = async (subcategoryId: number): Promise<any> => {
    const products = await prisma.product.findMany({
        where: {
            available: true,
            subcategory_id: subcategoryId,
        },
        select: {
            brand: true,
            specification: true,
        },
    })
    return products
}

export const updateFilterMap = (
    filterMap: Record<string, Map<string, number>>,
    dynamicFilterMap: Record<string, Map<string, number>>
) => {
    Object.keys(filterMap).forEach(key => delete filterMap[key])
    Object.keys(dynamicFilterMap).forEach(key => {
        filterMap[key] = new Map(dynamicFilterMap[key])
    })
}

export const createDynamicFilterMap = (
    filterMap: Record<string, Map<string, number>>,
    lastSelectedCategoryKey?: string
): Record<string, Map<string, number>> => {
    const dynamicFilterMap: Record<string, Map<string, number>> = { brand: new Map() }

    if (lastSelectedCategoryKey && filterMap[lastSelectedCategoryKey]) {
        dynamicFilterMap[lastSelectedCategoryKey] = new Map(filterMap[lastSelectedCategoryKey])
    }

    return dynamicFilterMap
}

export const processSpecifications = (
    specifications: Record<string, string>,
    filterMap: Record<string, Map<string, number>>,
    seenVariations: Record<string, string>,
    lastSelectedCategoryKey?: string
): void => {
    Object.entries(specifications).forEach(([key, value]) => {
        if (lastSelectedCategoryKey && key === lastSelectedCategoryKey) {
            return
        }

        if (!filterMap[key]) {
            filterMap[key] = new Map()
        }

        const normalizedValue = normalizeFilterName(value)

        if (seenVariations[normalizedValue]) {
            value = seenVariations[normalizedValue]
        } else {
            seenVariations[normalizedValue] = value
        }

        const currentCount = filterMap[key].get(value) || 0
        filterMap[key].set(value, currentCount + 1)
    })
}

export const processBrand = (
    brand: string,
    filterMap: Map<string, number>,
    seenVariations: Record<string, string>,
    lastSelectedCategoryKey?: string
): void => {
    if (lastSelectedCategoryKey && lastSelectedCategoryKey === 'brand') {
        return
    }

    if (!brand) return

    const normalizedBrand = normalizeFilterName(brand)

    if (seenVariations[normalizedBrand]) {
        brand = seenVariations[normalizedBrand]
    } else {
        seenVariations[normalizedBrand] = brand
    }

    const currentCount = filterMap.get(brand) || 0
    filterMap.set(brand, currentCount + 1)
}

export const filterMapFilterCriteria = (filterMap: Record<string, Map<string, number>>, products: any[]): void => {
    Object.entries(filterMap).forEach(([key, values]) => {
        if (key === 'brand') return

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
        }
    })
}

export const mapFiltersToCategories = (filterMap: Record<string, Map<string, number>>): FilterCategory[] => {
    return Object.entries(filterMap).map(([key, values]) => ({
        name: key === 'brand' ? 'Brend' : key === 'subcategory' ? 'Kategorija' : key,
        filters: Array.from(values.entries())
            .map(([name, amount]) => ({ name, amount }))
            .sort((a, b) => sortFilterValues(a, b)),
    }))
}

export const sortFilterValues = (a: { name: string; amount: number }, b: { name: string; amount: number }): number => {
    const numA = parseInt(a.name.match(/\d+/)?.[0] || '0', 10)
    const numB = parseInt(b.name.match(/\d+/)?.[0] || '0', 10)

    return numA - numB || a.name.localeCompare(b.name)
}

export const normalizeFilterName = (filterName: string): string => {
    return filterName.toLowerCase().replace(/\s+/g, '').trim()
}
