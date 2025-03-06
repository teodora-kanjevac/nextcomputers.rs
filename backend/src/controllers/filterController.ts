import { Request, Response } from 'express'
import { fetchFilteredProducts, fetchFilters, fetchSearchFilters } from '~/src/services/filterService'

export const getFilters = async (req: Request, res: Response): Promise<void> => {
    try {
        const subcategoryId = parseInt(req.params.subcategoryId)
        const selectedFilters: Record<string, string[]> = req.body.selectedFilters || {}

        const filters = await fetchFilters(subcategoryId, selectedFilters)

        res.status(200).json(filters)
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message })
        } else {
            res.status(500).json({ error: 'Unexpected error occurred' })
        }
    }
}

export const getSearchFilters = async (req: Request, res: Response): Promise<void> => {
    try {
        const searchTerm = req.params.searchTerm as string

        const filters = await fetchSearchFilters(searchTerm)

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
        const { sortBy, order, page = 1, pageSize = 20 } = req.body.params || {}
        const filters: Record<string, string[]> = req.body.filters || {}
        const subcategoryId = parseInt(req.params.subcategoryId)

        const products = await fetchFilteredProducts(
            subcategoryId,
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
