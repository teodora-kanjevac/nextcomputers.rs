import { Router } from 'express'
import { getFilteredProducts, getFilters } from '~/src/controllers/filterController'

const router: Router = Router()

router.post('/filteredProducts/:subcategoryId', getFilteredProducts)
router.get('/:subcategoryId', getFilters)

export default router
