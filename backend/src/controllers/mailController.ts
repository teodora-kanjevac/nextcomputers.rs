import { Request, Response } from 'express'
import { sendOrderConfirmationEmail } from '~/src/services/mailService'

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