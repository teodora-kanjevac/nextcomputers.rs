import { Router } from 'express'
import { orderConfirmationMail, contactMail, registerMail } from '~/src/controllers/mailController'

const router: Router = Router()

router.post('/order-confirmation', orderConfirmationMail)
router.post('/contact', contactMail)
router.post('/register', registerMail)

export default router
