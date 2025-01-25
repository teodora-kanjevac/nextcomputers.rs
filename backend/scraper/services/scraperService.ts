import { fetchApiProducts } from '~/scraper/handlers/EWEApiRequestHandler'
import { storeCategoriesAndSubcategories } from '~/scraper/services/categoryService'
import { CategoryfromAPI, ProductfromEWEAPI, ProductfromUsponAPI } from '~/scraper/services/mapperService'
import { storeProducts } from '~/scraper/services/productService'
import { fetchUsponApiProducts } from '~/scraper/handlers/UsponApiRequestHandler'
import { Product } from '~/scraper/types/Product'

export const scrapeCategories = async (): Promise<void> => {
    try {
        const apiProducts = await fetchApiProducts()

        const categories = apiProducts.map(CategoryfromAPI)

        await storeCategoriesAndSubcategories(categories)
    } catch (error) {
        console.error('Error processing categories:', error)
        throw new Error('Failed to process categories')
    }
}

export const scrapeProducts = async (): Promise<void> => {
    try {
        const eweapiProducts = await fetchApiProducts()
        // const usponapiProducts = await fetchUsponApiProducts()

        // const usponproducts = (await Promise.all(usponapiProducts.map(ProductfromUsponAPI))).filter(
        //     (product): product is Product => product !== null
        // )
        const eweproducts = (await Promise.all(eweapiProducts.map(ProductfromEWEAPI))).filter(
            (product): product is Product => product !== null
        )
        await storeProducts(eweproducts)
    } catch (error) {
        console.error('Error processing products:', error)
        throw new Error('Failed to process products')
    }
}
