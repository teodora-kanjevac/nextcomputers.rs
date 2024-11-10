import { Request, Response } from 'express'
import { fetchSubcategories, fetchSubcategoriesByCategory, fetchSubcategoryById } from '~/src/services/subcategoryService'

export const getSubcategories = async (req: Request, res: Response): Promise<void> => {
    try {
        const categories = await fetchSubcategories()
        res.status(200).json(categories)
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch subcategories' })
    }
}

export const getSubcategoryById = async (req: Request, res: Response): Promise<void> => {
    try {
        const subcategoryId = parseInt(req.params.id)

        const subcategory = await fetchSubcategoryById(subcategoryId)

        res.status(200).json(subcategory)
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'Unexpected error occurred' });
        }
    }
}

export const getSubcategoriesByCategory = async (req: Request, res: Response): Promise<void> => {
    try {
        const categoryId = parseInt(req.params.categoryId)

        const subcategories = await fetchSubcategoriesByCategory(categoryId)

        res.status(200).json(subcategories)
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'Unexpected error occurred' });
        }
    }
}

