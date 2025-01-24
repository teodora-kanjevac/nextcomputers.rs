import prisma from '~/src/utils/prisma'
import { Category } from '~/src/models/Category'
import { isNaNObject, isNullObject } from '~/src/utils/ErrorHandling'
import { sortCategories } from '~/src/utils/sort/customCategorySort'

export const fetchCategories = async () => {
    const category = await prisma.category.findMany({
        include: {
            subcategory: { orderBy: { name: 'asc' } },
        },
    })

    const categories = category.map(category => new Category(category))

    return sortCategories(categories)
}

export const fetchCategoryById = async (categoryId: number) => {
    isNaNObject('category', categoryId)

    const category = await prisma.category.findUnique({
        where: {
            category_id: categoryId,
        },
        include: {
            subcategory: true,
        },
    })

    isNullObject('category', categoryId, category)

    return new Category(category)
}
