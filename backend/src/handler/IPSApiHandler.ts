import axios from 'axios'
import { IPSOptionsDTO } from '~/src/DTOs/IPSOptions.dto'

export const fetchQRCode = async (data: IPSOptionsDTO): Promise<Buffer> => {
    try {
        const response = await axios.post(process.env.IPS_API_URL as string, data, {
            responseType: 'arraybuffer',
        })
        return Buffer.from(response.data)
    } catch (error) {
        console.error('Error fetching QR code:', error)
        throw new Error('Failed to fetch QR code from API')
    }
}
