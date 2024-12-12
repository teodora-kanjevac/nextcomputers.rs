import { Router } from 'express'
import {
    getProductDetails,
    getProducts,
    getProductsWithRatings,
    getProductsWithRatingsForCategory,
    getShowcaseProducts,
} from '~/src/controllers/productController'

const router: Router = Router()

router.get('/ratings/:subcategoryId', getProductsWithRatingsForCategory)
router.get('/ratings', getProductsWithRatings)
router.get('/showcase', getShowcaseProducts)
router.get('/:productId', getProductDetails)
router.get('/', getProducts)

export default router
