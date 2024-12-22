import { Router } from 'express'
import { createAnOrder, getOrderById } from '~/src/controllers/orderController'

const router: Router = Router()

router.post('/create', createAnOrder)
router.get('/:orderId', getOrderById)

export default router
