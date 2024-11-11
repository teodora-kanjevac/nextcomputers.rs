import { Router } from 'express'
import { getProducts, getProductsWithRatings, getProductsWithReviews } from '~/src/controllers/productController'

const router: Router = Router()

router.get('/', getProducts)
router.get('/reviews', getProductsWithReviews)
router.get('/ratings', getProductsWithRatings)

export default router
