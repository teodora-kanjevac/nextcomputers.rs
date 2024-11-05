import { Router } from 'express'
import { getCategories } from '~/src/controllers/categoryController'

const router: Router = Router()

router.get('/', getCategories)

export default router
