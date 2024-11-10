import { Category } from '~/scraper/types/Category'
import { renameCategory } from '~/scraper/utils/excludeCategory';

export const filterUniqueCategories = (categories: Category[]): Category[] => {
    const uniquePairs = new Set<string>()
    return categories.filter(category => {
        const renamedSubcategory = renameCategory(category.subcategory);
        const pair = `${category.category}-${renamedSubcategory}`
        if (category.isExcluded() || uniquePairs.has(pair)) {
            return false
        }
        uniquePairs.add(pair)
        return true
    })
}

export const getCategoryIdMap = async (prisma: any, categoryNames: string[]): Promise<Map<string, number>> => {
    const categoryIds = await prisma.category.findMany({
        where: { name: { in: categoryNames } },
        select: { category_id: true, name: true },
    })

    return new Map<string, number>(
        categoryIds.map((cat: { name: string; category_id: number }) => [cat.name, cat.category_id as number])
    )
}
