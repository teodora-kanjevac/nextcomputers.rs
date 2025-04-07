import { Router } from 'express'
import { register, logout, login, verifyUser } from '~/src/controllers/authController'
//import { authUser } from '../middleware/authUser'

const router: Router = Router()

//router.use(authUser);

router.post('/register', register)
router.post('/login', login)
router.post('/logout', logout)
router.get('/verify-email', verifyUser)

export default router
