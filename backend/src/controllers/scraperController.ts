import { Request, Response } from 'express';
import { scrapeCategories, scrapeProducts } from "~/scraper/services/scraperService"

export const scrapeProductsAPI = async (req: Request, res: Response): Promise<void> => {
    try {
        const products = await scrapeProducts()
        res.status(200).json(products)
    } catch (error) {
        console.error('Controller Error:', error)
        res.status(500).json({ error: 'Failed to fetch products' })
    }
}

export const scrapeCategoriesAPI = async (req: Request, res: Response): Promise<void> => {
    try {
        const categories = await scrapeCategories()
        res.status(200).json(categories)
    } catch (error) {
        console.error('Controller Error:', error)
        res.status(500).json({ error: 'Failed to fetch categories' })
    }
}