import { Router } from 'express'
import { orderConfirmationMail, contactMail } from '~/src/controllers/mailController'

const router: Router = Router()

router.post('/order-confirmation', orderConfirmationMail)
router.post('/contact', contactMail)

export default router
