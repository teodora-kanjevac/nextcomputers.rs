import prisma from '~/src/utils/prisma'
import { Subcategory } from '~/src/models/Subcategory'
import { SubcategoryDTO } from '~/src/DTOs/Subcategory.dto'

export const fetchSubcategories = async () => {
    const subcategories = await prisma.subcategory.findMany()
    return subcategories.map(subcategory => new Subcategory(subcategory))
}

export const fetchSubcategoryById = async (subcategoryId: number) => {
    if (isNaN(subcategoryId)) {
        throw new Error('Invalid subcategory ID')
    }

    const subcategory = await prisma.subcategory.findUnique({
        where: {
            subcategory_id: subcategoryId,
        },
    })

    if (!subcategory) {
        throw new Error(`Subcategory with ID = ${subcategoryId} not found`)
    }

    return new Subcategory(subcategory)
}

export const fetchSubcategoriesByCategory = async (categoryId: number) => {
    if (isNaN(categoryId)) {
        throw new Error('Invalid category ID')
    }

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
