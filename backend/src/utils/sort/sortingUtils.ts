import { Prisma } from '@prisma/client'
import prisma from '~/src/utils/prisma'
import { mapBigInt } from '~/src/utils/mapper/bigIntMapper'
import { ProductCardDTO } from '~/src/DTOs/ProductCard.dto'

export const fetchProductsSortedByDiscount = async (
    pageSize: number,
    offset: number,
    subcategoryId?: number
): Promise<ProductCardDTO[]> => {
    const subcategoryCondition = subcategoryId ? Prisma.sql`WHERE subcategory_id = ${subcategoryId}` : Prisma.sql``

    const query = Prisma.sql`
        SELECT 
            product_id, 
            name, 
            sale_price, 
            discount_price, 
            image_url, 
            ((sale_price - discount_price) / sale_price) * 100 AS discountPercentage
        FROM product
        ${subcategoryCondition}
        ORDER BY discountPercentage DESC
        LIMIT ${pageSize}
        OFFSET ${offset};
    `

    const products = await prisma.$queryRaw<ProductCardDTO[]>(query)

    return mapBigInt(products)
}

export const fetchFilteredProductsSortedByDiscount = async (
    pageSize: number,
    offset: number,
    subcategoryCondition: Prisma.Sql,
    brandCondition: Prisma.Sql,
    specificationCondition: Prisma.Sql
): Promise<any[]> => {
    const query = Prisma.sql`
        SELECT 
            product_id, 
            name, 
            sale_price, 
            discount_price, 
            image_url, 
            ((sale_price - discount_price) / sale_price) * 100 AS discountPercentage
        FROM product
        WHERE ${subcategoryCondition}
        ${brandCondition}
        ${specificationCondition}
        ORDER BY discountPercentage DESC
        LIMIT ${pageSize}
        OFFSET ${offset};
    `

    const products = await prisma.$queryRaw<ProductCardDTO[]>(query)

    return mapBigInt(products)
}

export const fetchProductsSortedByRating = async (
    pageSize: number,
    offset: number,
    subcategoryId?: number
): Promise<ProductCardDTO[]> => {
    const subcategoryCondition = subcategoryId ? Prisma.sql`WHERE subcategory_id = ${subcategoryId}` : Prisma.sql``

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
        ${subcategoryCondition}
        GROUP BY p.product_id
        ORDER BY avgRating DESC
        LIMIT ${pageSize}
        OFFSET ${offset};
    `

    const products = await prisma.$queryRaw<ProductCardDTO[]>(query)

    return mapBigInt(products)
}

export const fetchFilteredProductsSortedByRating = async (
    pageSize: number,
    offset: number,
    subcategoryCondition: Prisma.Sql,
    brandCondition: Prisma.Sql,
    specificationCondition: Prisma.Sql
): Promise<any[]> => {
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
        WHERE ${subcategoryCondition}
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
