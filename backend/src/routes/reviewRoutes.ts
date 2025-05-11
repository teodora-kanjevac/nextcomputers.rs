import { Router } from 'express'
import { getReviews, getReviewsForProduct, getReviewsFromUser, postReview } from '~/src/controllers/reviewController'
import { authUser } from '../middleware/authUser'

const router: Router = Router()

router.get('/product/:productId', getReviewsForProduct)
router.get('/user/:userId', authUser, getReviewsFromUser)
router.get('/', getReviews)
router.post('/leave-review/:productId', authUser, postReview)

export default router
