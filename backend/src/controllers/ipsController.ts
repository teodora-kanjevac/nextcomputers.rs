import { Request, Response } from 'express'
import { fetchQRCode } from '~/src/handler/IPSApiHandler'
import { IPSOptionsDTO } from '~/src/DTOs/IPSOptions.dto'

export const getQRCode = async (req: Request, res: Response): Promise<void> => {
    try {
        const data = req.body

        const qrimage = await fetchQRCode(new IPSOptionsDTO(data))

        res.type('image/png').send(qrimage)
    } catch (error) {
        console.error('Error processing QR code:', error)
        throw new Error('Failed to process QR code')
    }
}
