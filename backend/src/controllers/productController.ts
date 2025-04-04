import { Request, Response } from 'express'
import {
    fetchProducts,
    fetchProductsWithRatings,
    fetchProductsWithRatingsForCategory,
    fetchProductDetails,
    fetchShowcaseProducts,
} from '~/src/services/productService'

export const getProducts = async (req: Request, res: Response): Promise<void> => {
    try {
        const products = await fetchProducts()

        res.status(200).json(products)
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message })
        } else {
            res.status(500).json({ error: 'Unexpected error occurred' })
        }
    }
}

export const getShowcaseProducts = async (req: Request, res: Response): Promise<void> => {
    try {
        const products = await fetchShowcaseProducts()

        res.status(200).json(products)
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message })
        } else {
            res.status(500).json({ error: 'Unexpected error occurred' })
        }
    }
}

export const getProductDetails = async (req: Request, res: Response): Promise<void> => {
    try {
        const productId = parseInt(req.params.productId)

        const product = await fetchProductDetails(productId)

        res.status(200).json(product)
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message })
        } else {
            res.status(500).json({ error: 'Unexpected error occurred' })
        }
    }
}

export const getProductsWithRatings = async (req: Request, res: Response): Promise<void> => {
    try {
        const { sortBy, order, page = 1, pageSize = 20 } = req.query

        const products = await fetchProductsWithRatings(
            sortBy as string,
            order as string,
            Number(page),
            Number(pageSize)
        )

        res.status(200).json(products)
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message })
        } else {
            res.status(500).json({ error: 'Unexpected error occurred' })
        }
    }
}

export const getProductsWithRatingsForCategory = async (req: Request, res: Response): Promise<void> => {
    try {
        const { sortBy, order, page = 1, pageSize = 20 } = req.query
        const subcategoryId = parseInt(req.params.subcategoryId)

        const products = await fetchProductsWithRatingsForCategory(
            subcategoryId,
            sortBy as string,
            order as string,
            Number(page),
            Number(pageSize)
        )

        res.status(200).json(products)
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message })
        } else {
            res.status(500).json({ error: 'Unexpected error occurred' })
        }
    }
}
