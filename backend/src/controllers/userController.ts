import { Request, Response } from 'express'
import { editBasicUserInfo } from '~/src/services/userService'

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