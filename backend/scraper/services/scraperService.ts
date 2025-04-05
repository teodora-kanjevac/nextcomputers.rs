import { fetchEWEApiProducts } from '~/scraper/handlers/EWEApiRequestHandler'
import { storeCategoriesAndSubcategories } from '~/scraper/services/categoryService'
import {
    CategoryfromAPI,
    ProductfromDSCAPI,
    ProductfromEWEAPI,
    ProductfromUsponAPI,
} from '~/scraper/services/mapperService'
import { storeProducts } from '~/scraper/services/productService'
import { fetchUsponApiProducts } from '~/scraper/handlers/UsponApiRequestHandler'
import { Product } from '~/scraper/types/Product'
import { fetchDSCApiProducts } from '~/scraper/handlers/DSCApiRequestHandler'

export const scrapeCategories = async (): Promise<void> => {
    try {
        const apiProducts = await fetchEWEApiProducts()

        const categories = apiProducts.map(CategoryfromAPI)

        await storeCategoriesAndSubcategories(categories)
    } catch (error) {
        console.error('Error processing categories:', error)
        throw new Error('Failed to process categories')
    }
}

export const scrapeEWEProducts = async (): Promise<void> => {
    try {
        const apiProducts = await fetchEWEApiProducts()

        const products = (await Promise.all(apiProducts.map(ProductfromEWEAPI))).filter(
            (product): product is Product => product !== null
        )
        await storeProducts(products)
    } catch (error) {
        console.error('Error processing products:', error)
        throw new Error('Failed to process products')
    }
}

export const scrapeUsponProducts = async (): Promise<void> => {
    try {
        const apiProducts = await fetchUsponApiProducts()

        const products = (await Promise.all(apiProducts.map(ProductfromUsponAPI))).filter(
            (product): product is Product => product !== null
        )
        await storeProducts(products)
    } catch (error) {
        console.error('Error processing products:', error)
        throw new Error('Failed to process products')
    }
}

export const scrapeDSCProducts = async (): Promise<void> => {
    try {
        const apiProducts = await fetchDSCApiProducts()

        const products = (await Promise.all(apiProducts.map(ProductfromDSCAPI))).filter(
            (product): product is Product => product !== null
        )
        await storeProducts(products)
    } catch (error) {
        console.error('Error processing products:', error)
        throw new Error('Failed to process products')
    }
}
