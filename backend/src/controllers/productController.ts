import { Request, Response } from 'express'
import { getAllProducts } from '~/src/services/productService'

export const getProducts = async (req: Request, res: Response): Promise<void> => {
    try {
        const products = await getAllProducts()
        res.status(200).json(products)
    } catch (error) {
        console.error('Controller Error:', error)
        res.status(500).json({ error: 'Failed to fetch products' })
    }
}
