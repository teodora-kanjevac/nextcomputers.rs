import { Router } from 'express'
import { getFilteredSearchResults, syncSearchEngine } from '~/src/controllers/searchController'
import { rateLimitMiddleware } from '~/src/middleware/rateLimiter'

const router: Router = Router()

router.post('/filteredProducts', rateLimitMiddleware('API_GET_REQUESTS'), getFilteredSearchResults)
router.get('/syncEngine', syncSearchEngine)

export default router
