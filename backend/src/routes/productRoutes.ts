import { Router } from 'express'
import { getProducts } from '~/src/controllers/productController'

const router: Router = Router()

router.get('/products', getProducts)

export default router
