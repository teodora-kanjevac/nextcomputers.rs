import prisma from '~/src/utils/prisma'
import { Product } from '~/src/models/Product'
import { ProductDetailsDTO } from '~/src/DTOs/ProductDetails.dto'
import { ProductCardDTO } from '~/src/DTOs/ProductCard.dto'
import { fetchUserFullName } from '~/src/services/userService'
import { mapRatingsToProduct, mapRatingsToProductCards } from '~/src/utils/product/ratingMapper'
import { isNaNObject, isNullObject } from '~/src/utils/ErrorHandling'

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

export const fetchProductsWithRatings = async (page: number = 1, pageSize: number = 15): Promise<ProductCardDTO[]> => {
    const offset = (page - 1) * pageSize

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
    })
    
    return mapRatingsToProductCards(products)
}

export const fetchProductsWithRatingsForCategory = async (subcategoryId: number, page: number = 1, pageSize: number = 15): Promise<ProductCardDTO[]> => {
    const offset = (page - 1) * pageSize

    isNaNObject('subcategory', subcategoryId)

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
    })

    return mapRatingsToProductCards(products)
}
