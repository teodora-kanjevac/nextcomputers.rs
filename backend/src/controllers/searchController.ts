import { Request, Response } from 'express'
import { fetchFilteredSearchResults } from '~/src/services/searchService'
import { setupSearchEngine } from '~/src/utils/search/productSearchEngine'

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

export const syncSearchEngine = async (req: Request, res: Response): Promise<void> => {
    try {
        setupSearchEngine()

        res.status(200).json({ message: 'Indexing successful' })
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message })
        } else {
            res.status(500).json({ error: 'Unexpected error occurred' })
        }
    }
}
