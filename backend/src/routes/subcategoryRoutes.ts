import { Router } from 'express'
import { getSubcategories, getSubcategoriesByCategory, getSubcategoryById } from '~/src/controllers/subcategoryController'

const router: Router = Router()

router.get('/category/:categoryId', getSubcategoriesByCategory)
router.get('/:id', getSubcategoryById)
router.get('/', getSubcategories)

export default router
