import { scrapeDSCProducts, scrapeEWEProducts, scrapeUsponProducts } from '~/scraper/services/scraperService'

export const scrapingProducts = async () => {
    try {
        console.log('Started EWE scraper...')
        await scrapeEWEProducts()
        console.log('Started Uspon scraper...')
        await scrapeUsponProducts()
        console.log('Started DSC scraper...')
        await scrapeDSCProducts()
    } catch (error) {
        console.error('Error scraping products:', error)
    }
}
