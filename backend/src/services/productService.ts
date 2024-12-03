import prisma from '~/src/utils/prisma'
import { Product } from '~/src/models/Product'
import { ProductDetailsDTO } from '~/src/DTOs/ProductDetails.dto'
import { ProductCardDTO } from '~/src/DTOs/ProductCard.dto'
import { fetchUserFullName } from '~/src/services/userService'
import { mapRatingsToProduct, mapRatingsToProductCards } from '~/src/utils/mapper/ratingMapper'
import { isNaNObject, isNullObject } from '~/src/utils/ErrorHandling'
import { fetchProductsSortedByDiscount, fetchProductsSortedByRating } from '~/src/utils/sort/sortingUtils'

export const fetchProducts = async (): Promise<Product[]> => {
    const product = await prisma.product.findMany()
    return product.map(product => new Product(product))
}

export const fetchProductDetails = async (productId: number): Promise<ProductDetailsDTO> => {
    isNaNObject('product', productId)

    const product = await prisma.product.findUnique({
        where: {
            product_id: productId,
        },
        include: {
            review: true,
        },
    })

    isNullObject('product', productId, product)

    if (product?.review) {
        product.review = await Promise.all(
            product.review.map(async (review: any) => {
                const user = await fetchUserFullName(review.user_id)
                review.fullName = `${user.firstName} ${user.lastName}`
                return review
            })
        )
    }

    return mapRatingsToProduct(product)
}

export const fetchProductsWithRatings = async (
    sortBy: string = 'product_id',
    order: string = 'asc',
    page: number = 1,
    pageSize: number = 15
): Promise<ProductCardDTO[]> => {
    const offset = (page - 1) * pageSize

    if (sortBy === 'discountPercentage') {
        const products: ProductCardDTO[] = await fetchProductsSortedByDiscount(pageSize, offset)
        return mapRatingsToProductCards(products)
    } else if (sortBy === 'rating') {
        const products: ProductCardDTO[] = await fetchProductsSortedByRating(pageSize, offset)
        return mapRatingsToProductCards(products)
    } else {
        const products = await prisma.product.findMany({
            skip: offset,
            take: pageSize,
            select: {
                product_id: true,
                name: true,
                sale_price: true,
                discount_price: true,
                image_url: true,
            },
            orderBy: {
                [sortBy]: order,
            },
        })
        return mapRatingsToProductCards(products)
    }
}

export const fetchProductsWithRatingsForCategory = async (
    subcategoryId: number,
    sortBy: string = 'name',
    order: string = 'asc',
    page: number = 1,
    pageSize: number = 15
): Promise<ProductCardDTO[]> => {
    const offset = (page - 1) * pageSize

    isNaNObject('subcategory', subcategoryId)

    if (sortBy === 'discountPercentage') {
        const products: ProductCardDTO[] = await fetchProductsSortedByDiscount(pageSize, offset, subcategoryId)
        return mapRatingsToProductCards(products)
    } else if (sortBy === 'rating') {
        const products: ProductCardDTO[] = await fetchProductsSortedByRating(pageSize, offset, subcategoryId)
        return mapRatingsToProductCards(products)
    } else {
        const products = await prisma.product.findMany({
            skip: offset,
            take: pageSize,
            where: {
                subcategory_id: subcategoryId,
            },
            select: {
                product_id: true,
                name: true,
                sale_price: true,
                discount_price: true,
                image_url: true,
            },
            orderBy: {
                [sortBy]: order,
            },
        })
        return mapRatingsToProductCards(products)
    }
}
