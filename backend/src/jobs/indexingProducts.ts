import { setupSearchEngine } from '~/src/utils/search/productSearchEngine'

export const indexingProducts = async () => {
    try {
        console.log('Started indexing items...')
        await setupSearchEngine()
    } catch (error) {
        console.error('Error indexing products:', error)
    }
}
