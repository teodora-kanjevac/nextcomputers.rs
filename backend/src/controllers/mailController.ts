import { Request, Response } from 'express'
import {
    sendOrderConfirmationEmail,
    sendContactEmail,
    sendEmailVerification,
    sendPasswordResetEmail,
} from '~/src/services/mailService'

export const orderConfirmationMail = async (req: Request, res: Response): Promise<void> => {
    try {
        const orderData = req.body

        const mailInfo = await sendOrderConfirmationEmail(orderData)

        res.status(200).json({ success: true, messageId: mailInfo.messageId })
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ success: false, error: error.message })
        } else {
            res.status(500).json({ error: 'Unexpected error occurred' })
        }
    }
}

export const contactMail = async (req: Request, res: Response): Promise<void> => {
    try {
        const contactData = req.body

        const mailInfo = await sendContactEmail(contactData)

        res.status(200).json({ success: true, messageId: mailInfo.messageId })
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ success: false, error: error.message })
        } else {
            res.status(500).json({ error: 'Unexpected error occurred' })
        }
    }
}

export const registerMail = async (req: Request, res: Response): Promise<void> => {
    try {
        const registerData = req.body

        const mailInfo = await sendEmailVerification(registerData)

        res.status(200).json({ success: true, messageId: mailInfo.messageId })
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ success: false, error: error.message })
        } else {
            res.status(500).json({ error: 'Unexpected error occurred' })
        }
    }
}

export const resetPasswordMail = async (req: Request, res: Response): Promise<void> => {
    try {
        const resetPasswordData = req.body

        const mailInfo = await sendPasswordResetEmail(resetPasswordData)

        res.status(200).json({ success: true, messageId: mailInfo.messageId })
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ success: false, error: error.message })
        } else {
            res.status(500).json({ error: 'Unexpected error occurred' })
        }
    }
}
