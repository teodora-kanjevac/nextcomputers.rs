import { Router } from 'express'
import {
    register,
    logout,
    login,
    generateEmailToken,
    generatePassToken,
    getMe,
    verifyUser,
    generateResetPassToken,
    verifyPassToken,
    changePassword,
    requestVerificationMail,
    checkIfUserExists,
    fetchVerificationData,
} from '~/src/controllers/authController'
import { rateLimitMiddleware } from '~/src/middleware/rateLimiter'

const router: Router = Router()

router.put('/change-pass', changePassword)
router.put('/verify-email/:token', rateLimitMiddleware('API_POST_REQUESTS'), verifyUser)
router.post('/verify-pass/:token', rateLimitMiddleware('API_POST_REQUESTS'), verifyPassToken)
router.post('/register', rateLimitMiddleware('REGISTER'), register)
router.post('/login', rateLimitMiddleware('LOGIN'), login)
router.post('/logout', logout)
router.post('/check-user', rateLimitMiddleware('API_POST_REQUESTS'), checkIfUserExists)
router.post('/generate-email', generateEmailToken)
router.post('/request-verify-email', rateLimitMiddleware('EMAIL_VERIFICATION'), requestVerificationMail)
router.post('/generate-pass', generatePassToken)
router.post('/generate-reset-pass', rateLimitMiddleware('FORGOT_PASSWORD'), generateResetPassToken)
router.post('/pending-verification/get', fetchVerificationData)
router.get('/me', rateLimitMiddleware('API_GET_REQUESTS'), getMe)

export default router