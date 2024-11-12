import { Router } from 'express'
import { getCategories, getCategoryById } from '~/src/controllers/categoryController'

const router: Router = Router()

router.get('/:id', getCategoryById)
router.get('/', getCategories)

export default router
