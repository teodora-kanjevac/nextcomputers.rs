import { Request, Response } from 'express'
import { registerUser, loginUser, verifyEmail, generateToken } from '~/src/services/authService'
import { fetchMe } from '~/src/services/userService'
import jwt from 'jsonwebtoken'

export const register = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password, firstName, lastName, address, city, phoneNumber } = req.body

        const newUser = await registerUser({ email, password, firstName, lastName, address, city, phoneNumber })

        const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET as string, { expiresIn: '1h' })
        res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' })

        res.status(201).json({ newUser, token })
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ error: error.message })
        } else {
            res.status(500).json({ error: 'Unexpected error occurred' })
        }
    }
}

export const login = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password, rememberMe } = req.body

        const user = await loginUser({ email, password })

        if (rememberMe === true) {
            const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string, { expiresIn: '30d' })
            res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' })

            res.status(200).json({ user, token })
        } else {
            const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string, { expiresIn: '1h' })
            res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' })

            res.status(200).json({ user, token })
        }
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ error: error.message })
        } else {
            res.status(500).json({ error: 'Unexpected error occurred' })
        }
    }
}

export const logout = (req: Request, res: Response): void => {
    res.clearCookie('token')
    res.status(200).json({ message: 'Logged out successfully' })
}

export const verifyUser = async (req: Request, res: Response) => {
    const { token } = req.params

    if (typeof token !== 'string') {
        return res.status(400).json({ error: 'Invalid token' })
    }
    const response = await verifyEmail(token)
    res.status(200).json(response)
}

export const generatePassToken = async (req: Request, res: Response): Promise<void> => {
    try {
    const response = await generateToken(req.body.userId, process.env.PASSWORD_VERIFY_SECRET as string)
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
    const response = await generateToken(req.body.userId, process.env.EMAIL_VERIFY_SECRET as string)
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
    try{
        const token = req.cookies.token;

        if(!token) {
            return res.status(400).send('User not authenticated')
        }
        else {
            const user = await fetchMe(token)
            return res.status(200).json(user)
        }
    } catch (error) {
        throw (error)
    }
}