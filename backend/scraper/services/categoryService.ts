import prisma from '~/src/utils/prisma'
import { Category } from '~/scraper/types/Category'
import { filterUniqueCategories, getCategoryIdMap } from '~/scraper/utils/categoryUtils'
import { renameCategory } from '~/scraper/utils/excludeCategory'

export const getSubcategoryId = async (subcategoryName: string): Promise<number | undefined> => {
    try {
        const subcategory = await prisma.subcategory.findUnique({
            where: {
                name: subcategoryName,
            },
            select: {
                subcategory_id: true,
            },
        })
        return subcategory?.subcategory_id
    } catch (error) {
        console.error('Error inserting subcategory:', error)
        throw error
    }
}

export const storeCategoriesAndSubcategories = async (categories: Category[]): Promise<void> => {
    try {
        const uniqueCategories = filterUniqueCategories(categories)

        const categoryNames = uniqueCategories.map(category => category.category)
        const subcategoryData = uniqueCategories.map(category => ({
            name: category.subcategory,
            categoryName: category.category,
        }))

        await prisma.$transaction(async prisma => {
            await upsertCategories(prisma, categoryNames)
            const categoryIdMap = await getCategoryIdMap(prisma, categoryNames)
            await insertSubcategories(prisma, subcategoryData, categoryIdMap)
        })

        console.log('Categories and subcategories stored successfully.')
    } catch (error) {
        console.error('Error storing categories and subcategories:', error)
        throw error
    }
}

const upsertCategories = async (prisma: any, categoryNames: string[]) => {
    await prisma.category.createMany({
        data: categoryNames.map(name => ({ name })),
        skipDuplicates: true,
    })
}

const insertSubcategories = async (
    prisma: any,
    subcategoryData: Array<{ name: string; categoryName: string }>,
    categoryIdMap: Map<string, number>
) => {
    const subcategoryInserts = subcategoryData.reduce((acc, sub) => {
        const categoryId = categoryIdMap.get(sub.categoryName)
        if (categoryId !== undefined) {
            acc.push({
                name: sub.name,
                category_id: categoryId,
            })
        }
        return acc
    }, [] as { name: string; category_id: number }[])

    if (subcategoryInserts.length) {
        await prisma.subcategory.createMany({
            data: subcategoryInserts,
            skipDuplicates: true,
        })
    }
}