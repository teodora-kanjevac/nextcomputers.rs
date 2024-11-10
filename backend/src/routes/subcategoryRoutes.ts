import { Router } from 'express'
import { getSubcategories, getSubcategoriesByCategory, getSubcategoryById } from '~/src/controllers/subcategoryController'

const router: Router = Router()

router.get('/', getSubcategories)
router.get('/:id', getSubcategoryById)
router.get('/category/:categoryId', getSubcategoriesByCategory)

export default router
