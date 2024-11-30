import prisma from '~/src/utils/prisma'
import { Subcategory } from '~/src/models/Subcategory'
import { SubcategoryDTO } from '~/src/DTOs/Subcategory.dto'
import { isNaNObject, isNullObject } from '~/src/utils/ErrorHandling'

export const fetchSubcategories = async () => {
    const subcategories = await prisma.subcategory.findMany()
    return subcategories.map(subcategory => new Subcategory(subcategory))
}

export const fetchSubcategoryById = async (subcategoryId: number) => {
    isNaNObject('subcategory', subcategoryId)

    const subcategory = await prisma.subcategory.findUnique({
        where: {
            subcategory_id: subcategoryId,
        },
    })

    isNullObject('subcategory', subcategoryId, subcategory)

    return new Subcategory(subcategory)
}

export const fetchSubcategoriesByCategory = async (categoryId: number) => {
    isNaNObject('category', categoryId)

    const subcategories = await prisma.subcategory.findMany({
        where: {
            category_id: categoryId,
        },
        include: {
            category: {
                select: {
                    name: true,
                },
            },
        },
    })

    if (!subcategories) {
        throw new Error(`Subcategories associated with Category with ID = ${categoryId} not found`)
    }

    return subcategories.map(subcategory => new SubcategoryDTO(subcategory))
}
