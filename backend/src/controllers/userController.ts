import { Request, Response } from 'express'
import {
    changeUserEmail,
    changeUserPassword,
    fetchUserFullName,
    fetchUserInfo,
    changeUserInfo,
} from '~/src/services/userService'
import { verifyEmailChange, verifyPasswordChange } from '~/src/services/authService'

export const getUsersFullName = async (req: Request, res: Response) => {
    try {
        const token = req.cookies.token

        if (!token) {
            return res.status(200).json({ user: null })
        } else {
            const user = await fetchUserFullName(token)
            res.status(200).json(user)
        }
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ error: error.message })
        } else {
            res.status(500).json({ error: 'Unexpected error occurred' })
        }
    }
}

export const getUserInfo = async (req: Request, res: Response) => {
    try {
        const token = req.cookies.token

        if (!token) {
            return res.status(200).json({ user: null })
        } else {
            const user = await fetchUserInfo(token)
            res.status(200).json(user)
        }
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ error: error.message })
        } else {
            res.status(500).json({ error: 'Unexpected error occurred' })
        }
    }
}

export const editUserInfo = async (req: Request, res: Response) => {
    try {
        const token = req.cookies.token
        const userData = req.body

        const updatedUser = await changeUserInfo(token, userData)

        res.status(200).json(updatedUser)
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ error: error.message })
        } else {
            res.status(500).json({ error: 'Unexpected error occurred' })
        }
    }
}

export const editUserEmail = async (req: Request, res: Response) => {
    const { token } = req.params
    const email = req.body.email

    const verify = await verifyEmailChange(token)
    if (verify) {
        try {
            const userId = req.user?.id
            const updatedUser = await changeUserEmail(email, userId)

            res.status(200).json(updatedUser)
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ error: error.message })
            } else {
                res.status(500).json({ error: 'Unexpected error occurred' })
            }
        }
    }
}

export const editUserPassword = async (req: Request, res: Response) => {
    const { token } = req.params
    const password = req.body.password
    const verify = await verifyPasswordChange(token)
    if (verify) {
        try {
            const userId = req.user?.id
            const updatedUser = await changeUserPassword(password, userId)

            res.status(200).json(updatedUser)
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ error: error.message })
            } else {
                res.status(500).json({ error: 'Unexpected error occurred' })
            }
        }
    }
}
