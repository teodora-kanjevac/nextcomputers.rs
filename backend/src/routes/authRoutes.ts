import { Router } from 'express'
import { register } from '~/src/controllers/authController'

const router: Router = Router()

router.post('/register', register)

export default router