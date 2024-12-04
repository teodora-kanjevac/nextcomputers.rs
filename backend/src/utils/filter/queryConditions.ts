import { Prisma } from '@prisma/client'

export const buildQueryConditions = (
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
