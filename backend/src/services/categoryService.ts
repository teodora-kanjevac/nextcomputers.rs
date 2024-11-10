import prisma from '~/src/utils/prisma'
import { Category } from '~/src/models/Category'

export const fetchCategories = async () => {
    const category = await prisma.category.findMany({
        include: {
            subcategory: true,
        },
    })
    return category.map(category => new Category(category))
}

export const fetchCategoryById = async (categoryId: number) => {
    if (isNaN(categoryId)) {
        throw new Error('Invalid category ID')
    }

    const category = await prisma.category.findUnique({
        where: {
            category_id: categoryId,
        },
        include: {
            subcategory: true
        }
    })

    if (!category) {
        throw new Error(`Category with ID = ${categoryId} not found`)
    }

    return new Category(category)
}
