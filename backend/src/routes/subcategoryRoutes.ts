import { Router } from 'express'
import {
    getSubcategories,
    getSubcategoriesByCategory,
    getSubcategoryById,
} from '~/src/controllers/subcategoryController'
import { rateLimitMiddleware } from '~/src/middleware/rateLimiter'

const router: Router = Router()

router.use(rateLimitMiddleware('API_GET_REQUESTS'))

router.get('/category/:categoryId', getSubcategoriesByCategory)
router.get('/:id', getSubcategoryById)
router.get('/', getSubcategories)

export default router
