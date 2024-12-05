import { Router } from 'express'
import { getFilteredSearchResults, getProductSearchResults } from '~/src/controllers/searchController'

const router: Router = Router()

router.post('/filteredProducts', getFilteredSearchResults)
router.get('/', getProductSearchResults)

export default router
