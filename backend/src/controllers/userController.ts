import { Request, Response } from 'express'
import { editBasicUserInfo, changeUserEmail } from '~/src/services/userService'
import { verifyEmailChange } from '~/src/services/authService'

export const editUserInfo = async (req: Request, res: Response) => {
    try {
        const userId = req.params.id
        const userData = req.body

        const updatedUser = await editBasicUserInfo(userId, userData)

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
    console.log(token)
    const verify = verifyEmailChange(token)
    console.log(verify)
    if (verify === true) {
        try {
            const userId = req.user?.id
            console.log(req.user?.id)
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
