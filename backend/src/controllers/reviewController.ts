import { Request, Response } from 'express'
import {
    editUserReview,
    fetchAllReviews,
    fetchAllReviewsForProduct,
    fetchAllReviewsFromUser,
    fetchReviewSuggestions,
    getReviewEligibility,
    leaveReview,
    removeUserReview,
} from '~/src/services/reviewService'

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
        const token = req.cookies.token
        if (!token) {
            res.status(400).json({ error: 'User is required' })
            return
        }

        const reviews = await fetchAllReviewsFromUser(token)

        res.status(200).json(reviews)
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message })
        } else {
            res.status(500).json({ error: 'Unexpected error occurred' })
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
            res.status(500).json({ error: error.message })
        } else {
            res.status(500).json({ error: 'Unexpected error occurred' })
        }
    }
}

export const postReview = async (req: Request, res: Response): Promise<void> => {
    try {
        const token = req.cookies.token
        if (!token) {
            res.status(400).json({ error: 'User is required' })
            return
        }
        const productId = parseInt(req.params.productId)
        const reviewData = req.body

        const review = await leaveReview(token, productId, reviewData)

        res.status(201).json(review)
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message })
        } else {
            res.status(500).json({ error: 'Unexpected error occurred' })
        }
    }
}

export const editReview = async (req: Request, res: Response): Promise<void> => {
    try {
        const token = req.cookies.token
        if (!token) {
            res.status(400).json({ error: 'User is required' })
            return
        }
        const reviewId = req.params.reviewId
        const reviewData = req.body

        const review = await editUserReview(token, reviewId, reviewData)

        res.status(201).json(review)
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message })
        } else {
            res.status(500).json({ error: 'Unexpected error occurred' })
        }
    }
}

export const deleteReview = async (req: Request, res: Response): Promise<void> => {
    try {
        const token = req.cookies.token
        if (!token) {
            res.status(400).json({ error: 'User is required' })
            return
        }

        const review = await removeUserReview(req.params.reviewId)

        res.status(201).json(review)
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message })
        } else {
            res.status(500).json({ error: 'Unexpected error occurred' })
        }
    }
}

export const getReviewStatus = async (req: Request, res: Response): Promise<void> => {
    try {
        const token = req.cookies.token
        if (!token) {
            res.status(400).json({ error: 'User is required' })
            return
        }
        const productId = parseInt(req.params.productId)

        const isEligible = await getReviewEligibility(token, productId)

        res.status(201).json(isEligible)
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message })
        } else {
            res.status(500).json({ error: 'Unexpected error occurred' })
        }
    }
}

export const getReviewSuggestions = async (req: Request, res: Response): Promise<void> => {
    try {
        const token = req.cookies.token
        if (!token) {
            res.status(400).json({ error: 'User is required' })
            return
        }

        const suggestions = await fetchReviewSuggestions(token)

        res.status(201).json(suggestions)
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message })
        } else {
            res.status(500).json({ error: 'Unexpected error occurred' })
        }
    }
}
