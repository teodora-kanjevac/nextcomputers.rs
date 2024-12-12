import { Request, Response } from 'express'
import { fetchFilteredSearchResults, fetchProductSearchResults } from '../services/searchService'

export const getProductSearchResults = async (req: Request, res: Response): Promise<void> => {
    try {
        const { sortBy, order, page = 1, pageSize = 20 } = req.query
        const searchTerm = req.query.q as string

        const products = await fetchProductSearchResults(
            searchTerm,
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

export const getFilteredSearchResults = async (req: Request, res: Response): Promise<void> => {
    try {
        const { sortBy, order, page = 1, pageSize = 20 } = req.body.params || {}
        const filters: Record<string, string[]> = req.body.filters || {}
        const searchTerm = req.query.q as string

        const products = await fetchFilteredSearchResults(
            searchTerm,
            sortBy as string,
            order as string,
            filters,
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