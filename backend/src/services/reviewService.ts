import prisma from '~/src/utils/prisma'
import { Review } from '~/src/models/Review'

export const fetchAllReviews = async (): Promise<Review[]> => {
    const reviews = await prisma.review.findMany()
    return reviews.map(review => new Review(review))
}

export const fetchAllReviewsForProduct = async (productId: number): Promise<Review[]> => {
    if (isNaN(productId)) {
        throw new Error('Invalid product ID')
    }

    const reviews = await prisma.review.findMany({
        where: {
            product_id: productId,
        },
    })

    if (reviews.length === 0) {
        throw new Error(`Reviews for product ${productId} not found`)
    }
    return reviews.map(review => new Review(review))
}

export const fetchAllReviewsFromUser = async (userId: string): Promise<Review[]> => {
    const reviews = await prisma.review.findMany({
        where: {
            user_id: userId,
        },
    })

    if (reviews.length === 0) {
        throw new Error(`Reviews for user ${userId} not found`)
    }

    return reviews.map(review => new Review(review))
}