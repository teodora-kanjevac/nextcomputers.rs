import { Router } from 'express'
import { getCategories } from '~/src/controllers/categoryController'

const router: Router = Router()

router.get('/categories', getCategories)

export default router
