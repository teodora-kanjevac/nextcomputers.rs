import { Router } from 'express'
import {
    register,
    logout,
    login,
    generateEmailToken,
    generatePassToken,
    getMe,
    verifyUser,
    createVerificationData,
    fetchVerificationData,
    removeVerificationData,
} from '~/src/controllers/authController'

const router: Router = Router()

router.delete('/pending-verification/delete/:email', removeVerificationData)
router.put('/verify-email/:token', verifyUser)
router.post('/register', register)
router.post('/login', login)
router.post('/logout', logout)
router.post('/generate-email', generateEmailToken)
router.post('/generate-pass', generatePassToken)
router.post('/pending-verification/create', createVerificationData)
router.post('/pending-verification/get', fetchVerificationData)
router.get('/me', getMe)

export default router
