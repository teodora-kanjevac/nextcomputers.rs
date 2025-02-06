import axios from 'axios'
import { EWEApiProduct } from '~/scraper/types/EWEApiProduct'

export const fetchEWEApiProducts = async (): Promise<EWEApiProduct[]> => {
    try {
        const response = await axios.get(process.env.EWE_API_URL as string)
        return response.data.catalog
    } catch (error) {
        console.error('Error fetching products:', error)
        throw new Error('Failed to fetch products from API')
    }
}
