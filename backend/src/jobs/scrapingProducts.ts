import { scrapeEWEProducts, scrapeUsponProducts } from '~/scraper/services/scraperService'

export const scrapingProducts = async () => {
    try {
        console.log('Started EWE scraper...')
        await scrapeEWEProducts()
    } catch (error) {
        console.error('Error scraping products:', error)
    }
}
