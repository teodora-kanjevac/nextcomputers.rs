import { Request, Response } from 'express'
import { registerUser } from '~/src/services/authService'
import jwt from 'jsonwebtoken'

export const register = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password, firstName, lastName, address, phoneNumber } = req.body
        
        const newUser = await registerUser({ email, password, firstName, lastName, address, phoneNumber })

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
