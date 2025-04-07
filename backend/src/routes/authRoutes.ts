import { Router } from 'express'
import { register } from '~/src/controllers/authController'
import { login } from '~/src/controllers/authController'
import { logout } from '~/src/controllers/authController'
//import { authUser } from '../middleware/authUser'

const router: Router = Router()

//router.use(authUser);

router.post('/register', register)
router.post('/login', login)
router.post('/logout', logout)

export default router
