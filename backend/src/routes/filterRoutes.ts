import { Router } from 'express'
import { getFilteredProducts, getFilters, getSearchFilters } from '~/src/controllers/filterController'
import { rateLimitMiddleware } from '~/src/middleware/rateLimiter'

const router: Router = Router()

router.use(rateLimitMiddleware('API_GET_REQUESTS'))

router.post('/filteredProducts/:subcategoryId', getFilteredProducts)
router.get('/search/:searchTerm', getSearchFilters)
router.post('/:subcategoryId', getFilters)

export default router
