import { Router } from 'express'
import { orderConfirmationMail, contactMail, registerMail, resetPasswordMail } from '~/src/controllers/mailController'
import { rateLimitMiddleware } from '~/src/middleware/rateLimiter'

const router: Router = Router()

router.post('/order-confirmation', orderConfirmationMail)
router.post('/contact', rateLimitMiddleware('CONTACT_FORM'), contactMail)
router.post('/register', registerMail)
router.post('/resetPassword', resetPasswordMail)

export default router
