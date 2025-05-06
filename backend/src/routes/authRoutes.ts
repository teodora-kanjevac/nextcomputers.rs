import { Router } from 'express'
import { register, logout, login, generate, getMe } from '~/src/controllers/authController'

const router: Router = Router()

router.post('/register', register)
router.post('/login', login)
router.post('/logout', logout)
// router.get('/verify-email', verifyUser)
router.post('/generate', generate)
router.get('/me', getMe)

export default router
