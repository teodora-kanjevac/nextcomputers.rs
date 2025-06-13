import { Router } from 'express'
import {
    deleteReview,
    editReview,
    getReviews,
    getReviewsForProduct,
    getReviewsFromUser,
    getReviewStatus,
    getReviewSuggestions,
    postReview,
} from '~/src/controllers/reviewController'
import { authUser } from '~/src/middleware/authUser'
import { rateLimitMiddleware } from '~/src/middleware/rateLimiter'

const router: Router = Router()

router.get('/product/:productId', rateLimitMiddleware('API_GET_REQUESTS'), getReviewsForProduct)
router.get('/user', authUser, rateLimitMiddleware('PRIVATE_API_REQUESTS'), getReviewsFromUser)
router.get('/', rateLimitMiddleware('API_GET_REQUESTS'), getReviews)
router.get('/status/:productId', rateLimitMiddleware('API_GET_REQUESTS'), getReviewStatus)
router.get('/suggestions', authUser, rateLimitMiddleware('PRIVATE_API_REQUESTS'), getReviewSuggestions)
router.post('/leave-review/:productId', authUser, rateLimitMiddleware('PRIVATE_API_REQUESTS'), postReview)
router.put('/edit/:reviewId', authUser, rateLimitMiddleware('PRIVATE_API_REQUESTS'), editReview)
router.delete('/delete/:reviewId', authUser, rateLimitMiddleware('PRIVATE_API_REQUESTS'), deleteReview)

export default router
