import { Router } from 'express'
import { register, logout, login, generateEmailToken, generatePassToken, getMe } from '~/src/controllers/authController'

const router: Router = Router()

router.post('/register', register)
router.post('/login', login)
router.post('/logout', logout)
router.post('/generate-email', generateEmailToken)
router.post('/generate-pass', generatePassToken)
router.get('/me', getMe)

export default router
