import { Router } from 'express'
import {
    editUserInfo,
    editUserEmail,
    editUserPassword,
    getUsersFullName,
    getUserInfo,
    getUserStatistics,
} from '~/src/controllers/userController'
import { authUser } from '~/src/middleware/authUser'
import { getOrdersByUserId } from '~/src/controllers/orderController'
import { rateLimitMiddleware } from '~/src/middleware/rateLimiter'

const router: Router = Router()

router.use(authUser, rateLimitMiddleware('PRIVATE_API_REQUESTS'))

router.put('/edit', editUserInfo)
router.put('/email/:token', editUserEmail)
router.put('/password/:token', editUserPassword)
router.get('/history', getOrdersByUserId)
router.get('/fullname', getUsersFullName)
router.get('/info', getUserInfo)
router.get('/statistics', getUserStatistics)

export default router
