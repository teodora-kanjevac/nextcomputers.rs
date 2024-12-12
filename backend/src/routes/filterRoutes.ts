import { Router } from 'express'
import { getFilteredProducts, getFilters, getSearchFilters } from '~/src/controllers/filterController'

const router: Router = Router()

router.post('/filteredProducts/:subcategoryId', getFilteredProducts)
router.get('/search/:searchTerm', getSearchFilters)
router.get('/:subcategoryId', getFilters)

export default router
