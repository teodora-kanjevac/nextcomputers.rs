import { Request, Response } from 'express'
import {
    scrapeDSCProducts,
    scrapeEWEProducts,
    scrapeUsponProducts,
} from '~/scraper/services/scraperService'

export const scrapeEWEProductsAPI = async (req: Request, res: Response): Promise<void> => {
    try {
        const products = await scrapeEWEProducts()
        res.status(200).json(products)
    } catch (error) {
        console.error('Controller Error:', error)
        res.status(500).json({ error: 'Failed to fetch products' })
    }
}

export const scrapeUsponProductsAPI = async (req: Request, res: Response): Promise<void> => {
    try {
        const products = await scrapeUsponProducts()
        res.status(200).json(products)
    } catch (error) {
        console.error('Controller Error:', error)
        res.status(500).json({ error: 'Failed to fetch products' })
    }
}

export const scrapeDSCProductsAPI = async (req: Request, res: Response): Promise<void> => {
    try {
        const products = await scrapeDSCProducts()
        res.status(200).json(products)
    } catch (error) {
        console.error('Controller Error:', error)
        res.status(500).json({ error: 'Failed to fetch products' })
    }
}
