import { Router } from 'express'
import {
    getProductDetails,
    getProducts,
    getProductsWithRatings,
    getProductsWithRatingsForCategory,
    getShowcaseProducts,
} from '~/src/controllers/productController'
import { rateLimitMiddleware } from '~/src/middleware/rateLimiter'

const router: Router = Router()

router.use(rateLimitMiddleware('API_GET_REQUESTS'))

router.get('/ratings/:subcategoryId', getProductsWithRatingsForCategory)
router.get('/ratings', getProductsWithRatings)
router.get('/showcase', getShowcaseProducts)
router.get('/:productId', getProductDetails)
router.get('/', getProducts)

export default router
