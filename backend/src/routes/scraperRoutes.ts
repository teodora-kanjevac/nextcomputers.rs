import { Router } from 'express'
import {
    scrapeEWEProductsAPI,
    scrapeUsponProductsAPI,
    scrapeDSCProductsAPI,
} from '~/src/controllers/scraperController'
import { scrapingProducts } from '~/src/jobs/scrapingProducts'

const router: Router = Router()

router.get('/products/ewe', scrapeEWEProductsAPI)
router.get('/products/uspon', scrapeUsponProductsAPI)
router.get('/products/dsc', scrapeDSCProductsAPI)
router.get('/products/scrapeAll', scrapingProducts)

export default router
