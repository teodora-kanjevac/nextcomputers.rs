import { Router } from 'express'
import { editUserInfo } from '~/src/controllers/userController'
import { authUser } from '../middleware/authUser'

const router: Router = Router()

router.use(authUser);

router.put('/:id', editUserInfo)

export default router
