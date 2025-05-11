import { Request, Response } from 'express'
import { fetchAllReviews, fetchAllReviewsForProduct, fetchAllReviewsFromUser, leaveReview } from '~/src/services/reviewService'

export const getReviews = async (req: Request, res: Response): Promise<void> => {
    try {
        const reviews = await fetchAllReviews()

        res.status(200).json(reviews)
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch reviews' })
    }
}

export const getReviewsFromUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const reviews = await fetchAllReviewsFromUser(req.params.userId)

        res.status(200).json(reviews)
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'Unexpected error occurred' });
        }
    }
}

export const getReviewsForProduct = async (req: Request, res: Response): Promise<void> => {
    try {
        const productId = parseInt(req.params.productId)

        const reviews = await fetchAllReviewsForProduct(productId)

        res.status(200).json(reviews)
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'Unexpected error occurred' });
        }
    }
}

export const postReview = async (req: Request, res: Response): Promise<void> => {
    try {
        const userId = req.user?.id
        if (!userId) {
            res.status(400).json({ error: 'User ID is required' });
            return;
        }
        const productId = parseInt(req.params.productId)
        const reviewData = req.body

        const review = await leaveReview(userId, productId, reviewData)

        res.status(201).json(review)
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'Unexpected error occurred' });
        }
    }
}