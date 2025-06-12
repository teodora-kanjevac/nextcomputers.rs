import { Request, response, Response } from 'express'
import {
    registerUser,
    loginUser,
    verifyEmail,
    generateToken,
    verifyPasswordChange,
    changePass,
} from '~/src/services/authService'
import { checkUser, fetchMe, findUserByEmail } from '~/src/services/userService'
import jwt from 'jsonwebtoken'
import crypto from 'crypto'
import { getVerificationData, storeVerificationData } from '~/src/utils/verification/verification'
import { sendEmailVerification, sendPasswordResetEmail } from '../services/mailService'
import { ResetPasswordDataDTO } from '../DTOs/ResetPasswordData.dto'
import { RegisterDataDTO } from '../DTOs/RegisterData.dto'

export const register = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password, firstName, lastName, address, city, phone } = req.body
        const cartId = req.cookies.cart_id

        const newUser = await registerUser({ email, password, firstName, lastName, address, city, phone }, cartId)

        const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET as string, { expiresIn: '24h' })
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 24 * 60 * 60 * 1000,
        })
        res.cookie('cart_id', cartId, {
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 24 * 60 * 60 * 1000,
        })

        res.status(201).json({ newUser })
    } catch (error) {
        res.status(200).json({
            success: false,
            error: error instanceof Error ? error.message : 'Register failed',
        })
    }
}

export const login = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password, rememberMe } = req.body

        const { user, cartId } = await loginUser({ email, password })

        let tokenExpiry: Date | undefined
        let cookieExpiry: Date | undefined

        if (user.isVerified) {
            if (rememberMe) {
                const thirtyDays = 31 * 24 * 60 * 60 * 1000
                tokenExpiry = new Date(Date.now() + thirtyDays)
                cookieExpiry = tokenExpiry
            }
        } else {
            if (user.expiresAt) {
                const now = new Date()
                const expiresAt = new Date(user.expiresAt)

                if (expiresAt <= now) {
                    throw new Error('User account has expired')
                }

                tokenExpiry = expiresAt
                cookieExpiry = expiresAt
            }
        }

        const expiresInSeconds = tokenExpiry ? Math.floor((tokenExpiry.getTime() - Date.now()) / 1000) : undefined

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string, {
            expiresIn: expiresInSeconds || '1h',
        })

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            expires: cookieExpiry,
        })
        res.cookie('cart_id', cartId, {
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            expires: cookieExpiry,
        })

        res.status(200).json({ user })
    } catch (error) {
        res.status(200).json({
            success: false,
            error: error instanceof Error ? error.message : 'Login failed',
        })
    }
}

export const logout = (req: Request, res: Response): void => {
    res.clearCookie('token')
    res.status(200).json({ message: 'Logged out successfully' })
}

export const changePassword = async (req: Request, res: Response) => {
    try {
        const { token, resetPasswordData } = req.body

        if (!token) {
            return res.status(400).json({ error: 'Token required' })
        }

        const validation = await verifyPasswordChange(token)

        if (!validation?.success) {
            res.status(400).json({
                success: false,
                error: validation?.message || 'Invalid token',
            })
            return
        }

        await changePass(token, resetPasswordData.password)

        res.status(200).json({ success: true })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error instanceof Error ? error.message : 'Password reset failed',
        })
    }
}

export const verifyUser = async (req: Request, res: Response) => {
    try {
        const { token } = req.params

        if (typeof token !== 'string') {
            return res.status(400).json({ error: 'Invalid token' })
        }
        const response = await verifyEmail(token)

        res.status(200).json(response)
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message })
        } else {
            res.status(500).json({ error: 'Unexpected error occurred' })
        }
    }
}

export const verifyPassToken = async (req: Request, res: Response) => {
    try {
        const { token } = req.params

        if (!token) {
            return res.status(400).json({ error: 'Invalid token' })
        }

        const response = await verifyPasswordChange(token)

        res.status(200).json(response)
    } catch (error) {
        res.status(200).json({
            success: false,
            error: error instanceof Error ? error.message : 'Password reset failed',
        })
    }
}

export const checkIfUserExists = async (req: Request, res: Response) => {
    try {
        const { email } = req.body

        const response = await checkUser(email)

        res.status(200).json(response)
    } catch (error) {
        res.status(200).json({
            success: false,
            error: error instanceof Error ? error.message : 'Unexpected error occurred',
        })
    }
}

export const generateResetPassToken = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email } = req.body

        const user = await findUserByEmail(email)

        const payload = {
            id: user.id,
            purpose: 'password_reset',
            timestamp: Date.now(),
            hash: crypto.createHash('sha256').update(user.passwordHash).digest('hex').slice(0, 10),
        }

        const token = jwt.sign(payload, process.env.PASSWORD_VERIFY_SECRET as string, { expiresIn: '30m' })

        const link =
            process.env.NODE_ENV === 'production' ? process.env.RESET_PASS_PROD_URL : process.env.RESET_PASS_DEV_URL

        const resetPasswordData: ResetPasswordDataDTO = {
            email,
            resetLink: link + token,
        }

        await sendPasswordResetEmail(resetPasswordData)

        res.status(200).json({ success: true })
    } catch (error) {
        res.status(200).json({
            success: false,
            error: error instanceof Error ? error.message : 'Password reset failed',
        })
    }
}

export const generatePassToken = async (req: Request, res: Response): Promise<void> => {
    try {
        const response = await generateToken(req.cookies.token, process.env.PASSWORD_VERIFY_SECRET as string)
        res.status(200).json({ token: response })
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ error: error.message })
        } else {
            res.status(500).json({ error: 'Unexpected error occurred' })
        }
    }
}

export const generateEmailToken = async (req: Request, res: Response): Promise<void> => {
    try {
        const data = req.body

        if (!req.cookies?.token) {
            res.status(401).json({ error: 'Unauthorized' })
            return
        }

        const token = await generateToken(req.cookies.token, process.env.EMAIL_VERIFY_SECRET as string)

        const verifylink =
            process.env.NODE_ENV === 'production' ? process.env.EMAIL_VERIFY_BASE_URL : process.env.EMAIL_VERIFY_DEV_URL

        const registerData: RegisterDataDTO = {
            fullname: data.fullname,
            email: data.email,
            link: verifylink + token,
        }

        await storeVerificationData({ fullname: data.fullname, email: data.email, token })

        await sendEmailVerification(registerData)

        res.status(200).json({ success: true })
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ error: error.message })
        } else {
            res.status(500).json({ error: 'Unexpected error occurred' })
        }
    }
}

export const requestVerificationMail = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email } = req.body

        const verificationData = await getVerificationData(email)

        if (!verificationData) {
            res.status(400).json({ error: 'No data for verification' })
            return
        }

        const verifylink =
            process.env.NODE_ENV === 'production' ? process.env.EMAIL_VERIFY_BASE_URL : process.env.EMAIL_VERIFY_DEV_URL

        const verificationDataDTO: RegisterDataDTO = {
            fullname: verificationData.fullname,
            email: verificationData.email,
            link: verifylink + verificationData.token,
        }

        await sendEmailVerification(verificationDataDTO)

        res.status(200).json({ success: true })
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ error: error.message })
        } else {
            res.status(500).json({ error: 'Unexpected error occurred' })
        }
    }
}

export const getMe = async (req: Request, res: Response) => {
    try {
        const token = req.cookies.token
        if (!token) {
            return res.status(200).json({ user: null })
        } else {
            const user = await fetchMe(token)
            return res.status(200).json({ user })
        }
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ error: error.message })
        } else {
            res.status(500).json({ error: 'Unexpected error occurred' })
        }
    }
}

export const fetchVerificationData = async (req: Request, res: Response) => {
    try {
        const { email } = req.body

        if (!email) {
            return res.status(400).json({
                error: 'Missing email',
            })
        }

        const data = await getVerificationData(email)

        const verificationData = data ? { email: data.email } : null

        res.status(200).json(verificationData)
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ error: error.message })
        } else {
            res.status(500).json({ error: 'Unexpected error occurred' })
        }
    }
}
