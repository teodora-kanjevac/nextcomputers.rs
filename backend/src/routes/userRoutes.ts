import { Router } from 'express'
import { editUserInfo, editUserEmail, editUserPassword } from '~/src/controllers/userController'
import { authUser } from '~/src/middleware/authUser'
import { getOrdersByUserId } from '~/src/controllers/orderController'

const router: Router = Router()

router.use(authUser)

router.put('/:id', editUserInfo)
router.put('/email/:token', editUserEmail)
router.put('/password/:token', editUserPassword)
router.get('/history', getOrdersByUserId)

export default router
