import { fetchApiProducts } from '~/scraper/handlers/EWEApiRequestHandler'
import { storeCategoriesAndSubcategories } from '~/scraper/services/categoryService'
import { CategoryfromAPI, ProductfromAPI } from '~/scraper/services/mapperService'

export const fetchCategories = async (): Promise<void> => {
    try {
        const apiProducts = await fetchApiProducts()

        const categories = apiProducts.map(CategoryfromAPI)

        await storeCategoriesAndSubcategories(categories)
    } catch (error) {
        console.error('Error processing categories:', error)
        throw new Error('Failed to process categories')
    }
}

export const fetchProducts = async (): Promise<void> => {
    try {
        const apiProducts = await fetchApiProducts()

        const products = apiProducts.map(ProductfromAPI)
        console.log(products[0])

    } catch (error) {
        console.error('Error processing categories:', error)
        throw new Error('Failed to process categories')
    }
}
