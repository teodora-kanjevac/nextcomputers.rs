import { scrapeDSCProducts, scrapeEWEProducts, scrapeUsponProducts } from '~/scraper/services/scraperService'
import { updateProductsWithBestPrice } from '~/scraper/utils/distributorUtils'

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const scrapingProducts = async () => {
    try {
        console.log('Started EWE scraper...')
        await scrapeEWEProducts()

        console.log('Started Uspon scraper...')
        await scrapeUsponProducts()
        await delay(15000)

        console.log('Started DSC scraper...')
        await scrapeDSCProducts()
        await delay(5000)

        await updateProductsWithBestPrice()
    } catch (error) {
        console.error('Error scraping products:', error)
    }
}
