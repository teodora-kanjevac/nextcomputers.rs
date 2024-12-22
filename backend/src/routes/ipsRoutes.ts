import { Router } from 'express'
import { getQRCode } from '../controllers/ipsController'

const router: Router = Router()

router.post('/generate', getQRCode)

export default router
