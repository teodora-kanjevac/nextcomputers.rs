import { Request, Response } from 'express'
import { fetchCategories, fetchCategoryById } from '~/src/services/categoryService'

export const getCategories = async (req: Request, res: Response): Promise<void> => {
    try {
        const categories = await fetchCategories()

        res.status(200).json(categories)
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message })
        } else {
            res.status(500).json({ error: 'Unexpected error occurred' })
        }
    }
}

export const getCategoryById = async (req: Request, res: Response): Promise<void> => {
    try {
        const categoryId = parseInt(req.params.id)

        const category = await fetchCategoryById(categoryId)

        res.status(200).json(category)
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message })
        } else {
            res.status(500).json({ error: 'Unexpected error occurred' })
        }
    }
}
