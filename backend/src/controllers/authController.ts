import { Request, Response } from 'express'
import { registerUser, loginUser, verifyEmail, generateToken } from '~/src/services/authService'
import { fetchMe } from '~/src/services/userService'
import jwt from 'jsonwebtoken'
import {
    deleteVerificationData,
    getVerificationData,
    storeVerificationData,
} from '~/src/utils/verification/verification'

export const register = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password, firstName, lastName, address, city, phone, cartId } = req.body

        const newUser = await registerUser({ email, password, firstName, lastName, address, city, phone }, cartId)

        const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET as string, { expiresIn: '24h' })
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 24 * 60 * 60 * 1000,
        })

        res.status(201).json({ newUser, token })
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

        const user = await loginUser({ email, password })

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string, {
            expiresIn: rememberMe ? '30d' : '1h',
        })

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: rememberMe ? 30 * 24 * 60 * 60 * 1000 : undefined,
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
        const response = await generateToken(req.cookies.token, process.env.EMAIL_VERIFY_SECRET as string)
        res.status(200).json({ token: response })
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

export const createVerificationData = async (req: Request, res: Response) => {
    try {
        const { email, token, fullname } = req.body

        if (!email || !token || !fullname) {
            return res.status(400).json({
                error: 'Missing required fields',
            })
        }

        await storeVerificationData({ email, token, fullname })

        res.status(200).json({ success: true })
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

        res.status(200).json(data)
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ error: error.message })
        } else {
            res.status(500).json({ error: 'Unexpected error occurred' })
        }
    }
}

export const removeVerificationData = async (req: Request, res: Response) => {
    try {
        const { email } = req.params

        if (!email) {
            return res.status(400).json({
                error: 'Missing email',
            })
        }

        await deleteVerificationData(email)

        res.status(200).json({ success: true })
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ error: error.message })
        } else {
            res.status(500).json({ error: 'Unexpected error occurred' })
        }
    }
}
