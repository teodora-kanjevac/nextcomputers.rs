import axios from 'axios'
import { XMLParser } from 'fast-xml-parser'
import { Product } from '~/scraper/types/Product'

export const fetchUsponApiProducts = async (): Promise<Product[]> => {
    try {
        const response = await axios.get(process.env.USPON_API_URL as string, {
            headers: { 'Content-Type': 'application/xml' },
        })

        const xmlData = response.data

        const parser = new XMLParser({
            ignoreAttributes: false,
            attributeNamePrefix: '@_',
            parseTagValue: true,
            parseAttributeValue: false,
        })

        const jsonData = parser.parse(xmlData)

        const products = jsonData.artikli?.artikal || []
        if (!Array.isArray(products)) {
            return [products]
        }

        return products
    } catch (error) {
        console.error('Error fetching products:', error)
        throw new Error('Failed to fetch products from API')
    }
}
