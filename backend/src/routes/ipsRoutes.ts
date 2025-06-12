import { Router } from 'express'
import { getQRCode } from '~/src/controllers/ipsController'

const router: Router = Router()

router.post('/generate', getQRCode)

export default router
