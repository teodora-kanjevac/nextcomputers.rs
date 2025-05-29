import prisma from '~/src/utils/prisma'
import { Review } from '~/src/models/Review'
import jwt from 'jsonwebtoken'
import { ReviewProductDTO } from '~/src/DTOs/ReviewProduct.dto'
import { ReviewDTO } from '~/src/DTOs/Review.dto'
import { ReviewSuggestionDTO } from '../DTOs/ReviewSuggestions.dto'

export const fetchAllReviews = async (): Promise<Review[]> => {
    const reviews = await prisma.review.findMany()
    return reviews.map(review => new Review(review))
}

export const fetchAllReviewsForProduct = async (productId: number): Promise<ReviewProductDTO[]> => {
    const reviews = await prisma.review.findMany({
        where: {
            product_id: productId,
        },
        include: {
            user: {
                select: {
                    first_name: true,
                    last_name: true,
                },
            },
            product: {
                select: {
                    product_id: true,
                    name: true,
                    image_url: true,
                },
            },
        },
    })

    if (reviews.length === 0) return []

    const reviewDTOs = reviews.map(review => ({
        ...review,
        fullName: `${review.user.first_name} ${review.user.last_name}`,
    }))

    return reviewDTOs.map(review => new ReviewProductDTO(review))
}

export const fetchAllReviewsFromUser = async (token: string): Promise<ReviewDTO[]> => {
    const decoded = jwt.decode(token) as { id: string }

    const reviews = await prisma.review.findMany({
        where: {
            user_id: decoded.id,
        },
        include: {
            product: {
                select: {
                    product_id: true,
                    name: true,
                    image_url: true,
                },
            },
        },
        orderBy: { created_at: 'desc' },
    })

    if (reviews.length === 0) return []

    return reviews.map(review => new ReviewDTO(review))
}

export const leaveReview = async (token: string, productId: number, reviewData: ReviewDTO): Promise<ReviewDTO> => {
    const decoded = jwt.decode(token) as { id: string }

    const purchased = await prisma.orderdetails.findFirst({
        where: {
            product_id: productId,
            order: {
                user_id: decoded.id,
            },
        },
    })

    if (!purchased) {
        throw new Error(`User ${decoded.id} has not purchased product ${productId}`)
    }

    const existingReview = await prisma.review.findFirst({
        where: {
            user_id: decoded.id,
            product_id: productId,
        },
    })

    if (existingReview) {
        throw new Error(`User ${decoded.id} has already reviewed product ${productId}`)
    }

    if (reviewData.rating < 1 || reviewData.rating > 5) {
        throw new Error(`Rating must be between 1 and 5`)
    }

    const review = await prisma.review.create({
        data: {
            user_id: decoded.id,
            product_id: productId,
            rating: reviewData.rating,
            comment: reviewData.comment,
        },
        include: {
            user: {
                select: {
                    first_name: true,
                    last_name: true,
                },
            },
            product: {
                select: {
                    product_id: true,
                    name: true,
                    image_url: true,
                },
            },
        },
    })

    const reviewDTO = {
        ...review,
        fullName: `${review.user.first_name} ${review.user.last_name}`,
    }

    return new ReviewDTO(reviewDTO)
}

export const editUserReview = async (token: string, reviewId: string, reviewData: ReviewDTO): Promise<ReviewDTO> => {
    const decoded = jwt.decode(token) as { id: string }

    const review = await prisma.review.update({
        where: {
            user_id: decoded.id,
            review_id: reviewId,
        },
        data: {
            rating: reviewData.rating,
            comment: reviewData.comment,
        },
        include: {
            product: {
                select: {
                    product_id: true,
                    name: true,
                    image_url: true,
                },
            },
        },
    })

    return new ReviewDTO(review)
}

export const removeUserReview = async (reviewId: string): Promise<Review> => {
    const review = await prisma.review.delete({
        where: {
            review_id: reviewId,
        },
        select: {
            user_id: true,
            product_id: true,
        },
    })

    return new Review(review)
}

export const getReviewEligibility = async (token: string, productId: number) => {
    const decoded = jwt.decode(token) as { id: string }

    const [purchase, review] = await Promise.all([
        prisma.orderdetails.findFirst({
            where: {
                product_id: productId,
                order: {
                    user_id: decoded.id,
                },
            },
            select: { order_id: true },
        }),
        prisma.review.findFirst({
            where: {
                user_id: decoded.id,
                product_id: productId,
            },
            select: { review_id: true },
        }),
    ])

    return {
        hasPurchased: !!purchase,
        hasReviewed: !!review,
        canReview: !!purchase && !review,
    }
}

export const fetchReviewSuggestions = async (token: string): Promise<ReviewSuggestionDTO[]> => {
    const decoded = jwt.decode(token) as { id: string }

    const suggestions = await prisma.orderdetails.findMany({
        where: {
            order: {
                user_id: decoded.id,
            },
            product: {
                NOT: {
                    review: {
                        some: {
                            user_id: decoded.id,
                        },
                    },
                },
            },
        },
        select: {
            product: {
                select: {
                    product_id: true,
                    name: true,
                    image_url: true,
                },
            },
            order: {
                select: {
                    order_id: true,
                    created_at: true,
                },
            },
        },
        distinct: ['product_id'],
        orderBy: {
            order: {
                created_at: 'desc',
            },
        },
        take: 10,
    })

    return suggestions.map(suggestion => new ReviewSuggestionDTO(suggestion))
}
