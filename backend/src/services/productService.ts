import prisma from '~/src/utils/prisma'
import { Product } from '~/src/models/Product'
import { ProductRatingDTO } from '~/src/DTOs/ProductRating.dto'
import { ProductDetailsDTO } from '~/src/DTOs/ProductDetails.dto'
import { buildRatingsByProduct, fetchRatingsData, getDefaultProductRatings } from '~/src/utils/productRatingUtils'
import { ProductCardDTO } from '~/src/DTOs/ProductCard.dto'
import { fetchUserFullName } from '~/src/services/userService'

export const fetchProducts = async (): Promise<Product[]> => {
    const product = await prisma.product.findMany()
    return product.map(product => new Product(product))
}

export const fetchProductDetails = async (productId: number): Promise<ProductDetailsDTO> => {
    if (isNaN(productId)) {
        throw new Error('Invalid product ID')
    }

    const product = await prisma.product.findUnique({
        where: {
            product_id: productId,
        },
        include: {
            review: true,
        },
    })

    if (!product) {
        throw new Error(`Product with ID = ${productId} not found`)
    }

    const ratingsData = await fetchRatingsData()
    const ratingsByProduct = buildRatingsByProduct(ratingsData)
    const productRatings = ratingsByProduct[product.product_id] ?? getDefaultProductRatings()

    if (product?.review) {
        product.review = await Promise.all(
            product.review.map(async (review: any) => {
                const user = await fetchUserFullName(review.user_id)
                review.fullName = `${user.firstName} ${user.lastName}`
                return review
            })
        )
    }

    return {
        ...new ProductDetailsDTO(product),
        ratings: new ProductRatingDTO(productRatings),
    }
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
    const ratingsData = await fetchRatingsData()
    const ratingsByProduct = buildRatingsByProduct(ratingsData)

    return products.map(product => {
        const productRatings = ratingsByProduct[product.product_id] || getDefaultProductRatings()
        return {
            ...new ProductCardDTO(product),
            ratings: new ProductRatingDTO(productRatings),
        }
    })
}

export const fetchProductsWithRatingsForCategory = async (subcategoryId: number, page: number = 1, pageSize: number = 15): Promise<ProductCardDTO[]> => {
    const offset = (page - 1) * pageSize

    if (isNaN(subcategoryId)) {
        throw new Error('Invalid subcategory ID')
    }

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

    const ratingsData = await fetchRatingsData()
    const ratingsByProduct = buildRatingsByProduct(ratingsData)

    return products.map(product => {
        const productRatings = ratingsByProduct[product.product_id] || getDefaultProductRatings()
        return {
            ...new ProductCardDTO(product),
            ratings: new ProductRatingDTO(productRatings),
        }
    })
}
