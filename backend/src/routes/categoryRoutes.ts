import { Router } from 'express'
import { getCategories, getCategoryById } from '~/src/controllers/categoryController'
import { rateLimitMiddleware } from '~/src/middleware/rateLimiter'

const router: Router = Router()

router.use(rateLimitMiddleware('API_GET_REQUESTS'))

router.get('/:id', getCategoryById)
router.get('/', getCategories)

export default router
