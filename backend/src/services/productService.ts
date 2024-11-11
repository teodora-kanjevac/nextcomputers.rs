import prisma from '~/src/utils/prisma'
import { Product } from '~/src/models/Product'
import { ProductRatingDTO } from '~/src/DTOs/ProductRating.dto'
import { ProductDTO } from '~/src/DTOs/Product.dto'
import { buildRatingsByProduct, fetchRatingsData, getDefaultProductRatings } from '~/src/utils/productRatingUtils'
import { ProductCardDTO } from '~/src/DTOs/ProductCard.dto'

export const fetchProducts = async (): Promise<Product[]> => {
    const product = await prisma.product.findMany()
    return product.map(product => new Product(product))
}

export const fetchProductsWithReviews = async (): Promise<ProductDTO[]> => {
    const products = await prisma.product.findMany({
        include: {
            review: true,
        },
    })
    return products.map(product => new ProductDTO(product))
}

export const fetchProductsWithRatings = async (page: number = 1, pageSize: number = 20): Promise<ProductCardDTO[]> => {
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