import prisma from '~/src/utils/prisma'
import { Review } from '~/src/models/Review'
import { isNaNObject } from '~/src/utils/ErrorHandling'

export const fetchAllReviews = async (): Promise<Review[]> => {
    const reviews = await prisma.review.findMany()
    return reviews.map(review => new Review(review))
}

export const fetchAllReviewsForProduct = async (productId: number): Promise<Review[]> => {
    isNaNObject('product', productId)

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

export const leaveReview = async (userId: string, productId: number, reviewData: any): Promise<Review> => {
    isNaNObject('product', productId)

    const purchased = await prisma.orderdetails.findFirst({
        where: {
          product_id: productId,
          order: {
            user_id: userId,
          },
        },
      })
    
    if (!purchased) {
        throw new Error(`User ${userId} has not purchased product ${productId}`)
    }

    const existingReview = await prisma.review.findFirst({
        where: {
            user_id: userId,
            product_id: productId,
        },
    })

    if (existingReview) {
        throw new Error(`User ${userId} has already reviewed product ${productId}`)
    }

    if (reviewData.rating < 1 || reviewData.rating > 5) {
        throw new Error(`Rating must be between 1 and 5`)
    }

    const review = await prisma.review.create({
        data: {
            user_id: userId,
            product_id: productId,
            rating: reviewData.rating,
            comment: reviewData.comment,
        },
    })

    return new Review(review)
}