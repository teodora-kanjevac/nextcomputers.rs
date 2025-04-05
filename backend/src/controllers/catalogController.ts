import { Request, Response } from 'express'
import { fetchCatalog } from '~/src/services/catalogService'

export const getCatalog = async (req: Request, res: Response): Promise<void> => {
    try {
        const catalog = await fetchCatalog()

        res.status(200).json(catalog)
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message })
        } else {
            res.status(500).json({ error: 'Unexpected error occurred' })
        }
    }
}