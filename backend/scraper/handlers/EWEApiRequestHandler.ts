import axios from 'axios'
import { ApiProduct } from '~/scraper/types/ApiProduct'

export const fetchApiProducts = async (): Promise<ApiProduct[]> => {
    try {
        const response = await axios.get(process.env.EWE_API_URL as string)
        return response.data.catalog
    } catch (error) {
        console.error('Error fetching products:', error)
        throw new Error('Failed to fetch products from API')
    }
}
