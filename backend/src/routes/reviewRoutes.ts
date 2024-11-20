import { Router } from 'express'
import { getReviews, getReviewsForProduct, getReviewsFromUser } from '~/src/controllers/reviewController'

const router: Router = Router()

router.get('/product/:productId', getReviewsForProduct)
router.get('/user/:userId', getReviewsFromUser)
router.get('/', getReviews)

export default router
