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

const router: Router = Router()

router.get('/product/:productId', getReviewsForProduct)
router.get('/user', authUser, getReviewsFromUser)
router.get('/', getReviews)
router.get('/status/:productId', getReviewStatus)
router.get('/suggestions', authUser, getReviewSuggestions)
router.post('/leave-review/:productId', authUser, postReview)
router.put('/edit/:reviewId', authUser, editReview)
router.delete('/delete/:reviewId', authUser, deleteReview)

export default router
