import { Request, Response } from 'express'
import { fetchCategories } from '~/src/services/categoryService'

export const getCategories = async (req: Request, res: Response): Promise<void> => {
    try {
        const categories = await fetchCategories()
        res.status(200).json(categories)
    } catch (error) {
        console.error('Controller Error:', error)
        res.status(500).json({ error: 'Failed to fetch categories' })
    }
}
