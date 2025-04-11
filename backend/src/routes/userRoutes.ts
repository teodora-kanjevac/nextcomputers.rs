import { Router } from 'express'
import { editUserInfo, editUserEmail } from '~/src/controllers/userController'
import { verifyUser } from '~/src/controllers/authController'
import { authUser } from '../middleware/authUser'

const router: Router = Router()

router.use(authUser);

router.post('/verify-email', verifyUser)
router.put('/:id', editUserInfo)
router.put('/email/:token', editUserEmail)

export default router
