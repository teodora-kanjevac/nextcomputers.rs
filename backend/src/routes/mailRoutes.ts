import { Router } from 'express'
import { orderConfirmationMail } from '~/src/controllers/mailController'

const router: Router = Router()

router.post('/order-confirmation', orderConfirmationMail)

export default router
