import { Prisma } from '@prisma/client'
import prisma from '~/src/utils/prisma'
import { mapBigInt } from '~/src/utils/mapper/bigIntMapper'
import { ProductCardDTO } from '~/src/DTOs/ProductCard.dto'

export const fetchSortedByDiscount = async (
    pageSize: number,
    offset: number,
    subcategoryId?: number,
    brandFilter?: Prisma.Sql,
    specificationFilter?: Prisma.Sql
): Promise<ProductCardDTO[]> => {
    const subcategoryCondition = subcategoryId ? Prisma.sql`subcategory_id = ${subcategoryId}` : Prisma.sql`TRUE`
    const brandCondition = brandFilter ? Prisma.sql`${brandFilter}` : Prisma.sql``
    const specificationCondition = specificationFilter ? Prisma.sql`${specificationFilter}` : Prisma.sql``

    const query = Prisma.sql`
        SELECT 
            product_id, 
            name, 
            sale_price, 
            discount_price, 
            image_url, 
            ((sale_price - discount_price) / sale_price) * 100 AS discountPercentage
        FROM product
        WHERE available = TRUE
        AND ${subcategoryCondition}
        ${brandCondition}
        ${specificationCondition}
        ORDER BY discountPercentage DESC
        LIMIT ${pageSize}
        OFFSET ${offset};
    `

    const products = await prisma.$queryRaw<ProductCardDTO[]>(query)

    return mapBigInt(products)
}

export const fetchSortedByRating = async (
    pageSize: number,
    offset: number,
    subcategoryId?: number,
    brandFilter?: Prisma.Sql,
    specificationFilter?: Prisma.Sql
): Promise<any[]> => {
    const subcategoryCondition = subcategoryId ? Prisma.sql`subcategory_id = ${subcategoryId}` : Prisma.sql`TRUE`
    const brandCondition = brandFilter ? Prisma.sql`${brandFilter}` : Prisma.sql``
    const specificationCondition = specificationFilter ? Prisma.sql`${specificationFilter}` : Prisma.sql``

    const query = Prisma.sql`
        SELECT 
            p.product_id, 
            p.name, 
            p.sale_price, 
            p.discount_price, 
            p.image_url,
            COALESCE(AVG(r.rating), 0) AS avgRating
        FROM product p
        LEFT JOIN review r ON p.product_id = r.product_id
        WHERE available = TRUE
        AND ${subcategoryCondition}
        ${brandCondition}
        ${specificationCondition}
        GROUP BY p.product_id
        ORDER BY avgRating DESC
        LIMIT ${pageSize}
        OFFSET ${offset};
    `

    const products = await prisma.$queryRaw<ProductCardDTO[]>(query)

    return mapBigInt(products)
}

export const fetchSearchResultsSortedByDiscount = async (
    pageSize: number,
    offset: number,
    matchedIds: number[],
    brandFilter?: Prisma.Sql,
    categoryFilter?: Prisma.Sql
): Promise<any[]> => {
    const searchCondition = Prisma.sql`product_id IN (${Prisma.join(matchedIds.map(id => Prisma.sql`${id}`))})`
    const categoryCondition = categoryFilter ? Prisma.sql`${categoryFilter}` : Prisma.sql``
    const brandCondition = brandFilter ? Prisma.sql`${brandFilter}` : Prisma.sql``

    const query = Prisma.sql`
        SELECT 
            product_id, 
            name, 
            sale_price, 
            discount_price, 
            image_url, 
            ((sale_price - discount_price) / sale_price) * 100 AS discountPercentage
        FROM product
        WHERE available = TRUE
        AND ${searchCondition}
        ${categoryCondition}
        ${brandCondition}
        ORDER BY discountPercentage DESC
        LIMIT ${pageSize}
        OFFSET ${offset};
    `

    const products = await prisma.$queryRaw<ProductCardDTO[]>(query)

    return mapBigInt(products)
}

export const fetchSearchResultsSortedByRating = async (
    pageSize: number,
    offset: number,
    matchedIds: number[],
    brandFilter?: Prisma.Sql,
    categoryFilter?: Prisma.Sql
): Promise<any[]> => {
    const searchCondition = Prisma.sql`p.product_id IN (${Prisma.join(matchedIds.map(id => Prisma.sql`${id}`))})`
    const categoryCondition = categoryFilter ? Prisma.sql`${categoryFilter}` : Prisma.sql``
    const brandCondition = brandFilter ? Prisma.sql`${brandFilter}` : Prisma.sql``

    const query = Prisma.sql`
        SELECT 
            p.product_id, 
            p.name, 
            p.sale_price, 
            p.discount_price, 
            p.image_url,
            COALESCE(AVG(r.rating), 0) AS avgRating
        FROM product p
        LEFT JOIN review r ON p.product_id = r.product_id
        WHERE available = TRUE
        AND ${searchCondition}
        ${categoryCondition}
        ${brandCondition}
        GROUP BY p.product_id
        ORDER BY avgRating DESC
        LIMIT ${pageSize}
        OFFSET ${offset};
    `

    const products = await prisma.$queryRaw<ProductCardDTO[]>(query)

    return mapBigInt(products)
}
