import { Router } from 'express'
import { getFilteredSearchResults, syncSearchEngine } from '~/src/controllers/searchController'

const router: Router = Router()

router.post('/filteredProducts', getFilteredSearchResults)
router.get('/syncEngine', syncSearchEngine)

export default router
