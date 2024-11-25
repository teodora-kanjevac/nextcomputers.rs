import { Request, Response } from 'express'
import { fetchFilteredProducts, fetchFilters } from '~/src/services/filterService'

export const getFilters = async (req: Request, res: Response): Promise<void> => {
    try {
        const subcategoryId = parseInt(req.params.subcategoryId)

        const filters = await fetchFilters(subcategoryId)

        res.status(200).json(filters)
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message })
        } else {
            res.status(500).json({ error: 'Unexpected error occurred' })
        }
    }
}

export const getFilteredProducts = async (req: Request, res: Response): Promise<void> => {
    try {
        const subcategoryId = parseInt(req.params.subcategoryId)

        const filters: Record<string, string[]> = req.body.filters || {};

        const products = await fetchFilteredProducts(subcategoryId, filters)

        res.status(200).json(products)
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message })
        } else {
            res.status(500).json({ error: 'Unexpected error occurred' })
        }
    }
}