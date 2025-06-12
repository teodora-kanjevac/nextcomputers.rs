import { Router } from 'express'
import { createAnOrder, getOrderById } from '~/src/controllers/orderController'
import { rateLimitMiddleware } from '~/src/middleware/rateLimiter'

const router: Router = Router()

router.post('/create', createAnOrder)
router.get('/:orderId', rateLimitMiddleware('API_GET_REQUESTS'), getOrderById)

export default router
