import { Router } from 'express'
import { getReviews, getReviewsForProduct, getReviewsFromUser } from '~/src/controllers/reviewController'

const router: Router = Router()

router.get('/', getReviews)
router.get('/user/:userId', getReviewsFromUser)
router.get('/product/:productId', getReviewsForProduct)

export default router
