import { Prisma } from '@prisma/client'
import prisma from '~/src/utils/prisma'

export const buildSubcategoryQueryConditions = (
    subcategoryId: number,
    filters: Record<string, string[]>
): { subcategoryCondition: Prisma.Sql; brandCondition: Prisma.Sql; specificationCondition: Prisma.Sql } => {
    const subcategoryCondition = Prisma.sql`subcategory_id = ${subcategoryId}`

    const brandCondition = filters.brand?.length
        ? Prisma.sql`AND brand IN (${Prisma.join(filters.brand)})`
        : Prisma.sql``

    const specificationConditions = Object.entries(filters).reduce((conditions, [key, values]) => {
        if (key !== 'brand' && values.length > 0) {
            conditions.push(
                Prisma.sql`JSON_EXTRACT(specification, '$."${Prisma.raw(key)}"') IN (${Prisma.join(values)})`
            )
        }
        return conditions
    }, [] as Prisma.Sql[])

    const specificationCondition =
        specificationConditions.length > 0
            ? Prisma.sql`AND (${Prisma.join(specificationConditions, ' AND ')})`
            : Prisma.sql``

    return { subcategoryCondition, brandCondition, specificationCondition }
}

export const buildSearchResultsQueryConditions = async (
    filters: Record<string, string[]>
): Promise<{ categoryCondition: Prisma.Sql; brandCondition: Prisma.Sql }> => {
    const subcategories = await prisma.subcategory.findMany({
        select: {
            name: true,
            subcategory_id: true,
        },
    })

    const subcategoryMap = subcategories.reduce((acc, subcategory) => {
        acc[subcategory.name] = subcategory.subcategory_id
        return acc
    }, {} as Record<string, number>)
    const brandCondition = filters.brand?.length
        ? Prisma.sql`AND brand IN (${Prisma.join(filters.brand)})`
        : Prisma.sql``

    const categoryCondition = filters.subcategory?.length
        ? Prisma.sql`AND subcategory_id IN (${Prisma.join(filters.subcategory.map(name => subcategoryMap[name]))})`
        : Prisma.sql``

    return { categoryCondition, brandCondition }
}
