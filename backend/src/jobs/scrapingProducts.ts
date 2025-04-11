import { scrapeDSCProducts, scrapeEWEProducts, scrapeUsponProducts } from '~/scraper/services/scraperService'
import { updateProductsWithBestPrice } from '~/scraper/utils/distributorUtils'

export const scrapingProducts = async () => {
    try {
        console.log('Started EWE scraper...')
        await scrapeEWEProducts()
        console.log('Started Uspon scraper...')
        await scrapeUsponProducts()
        console.log('Started DSC scraper...')
        await scrapeDSCProducts()
        await updateProductsWithBestPrice()
    } catch (error) {
        console.error('Error scraping products:', error)
    }
}
