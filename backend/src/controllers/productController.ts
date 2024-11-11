import { Request, Response } from 'express'
import { fetchProducts, fetchProductsWithRatings, fetchProductsWithReviews } from '~/src/services/productService'

export const getProducts = async (req: Request, res: Response): Promise<void> => {
    try {
        const products = await fetchProducts()

        res.status(200).json(products)
    } catch (error) {
        console.error('Controller Error:', error)
        res.status(500).json({ error: 'Failed to fetch products' })
    }
}

export const getProductsWithReviews = async (req: Request, res: Response): Promise<void> => {
    try {
        const products = await fetchProductsWithReviews()

        res.status(200).json(products)
    } catch (error) {
        console.error('Controller Error:', error)
        res.status(500).json({ error: 'Failed to fetch products' })
    }
}

export const getProductsWithRatings = async (req: Request, res: Response): Promise<void> => {
    try {
        const { page = 1, pageSize = 20 } = req.query
        const products = await fetchProductsWithRatings(Number(page), Number(pageSize))

        res.status(200).json(products)
    } catch (error) {
        console.error('Controller Error:', error)
        res.status(500).json({ error: 'Failed to fetch products' })
    }
}
