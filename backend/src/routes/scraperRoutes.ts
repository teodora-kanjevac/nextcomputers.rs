import { Router } from 'express'
import {
    scrapeCategoriesAPI,
    scrapeEWEProductsAPI,
    scrapeUsponProductsAPI,
    scrapeDSCProductsAPI,
} from '~/src/controllers/scraperController'

const router: Router = Router()

router.get('/products/ewe', scrapeEWEProductsAPI)
router.get('/products/uspon', scrapeUsponProductsAPI)
router.get('/products/dsc', scrapeDSCProductsAPI)
router.get('/categories', scrapeCategoriesAPI)

export default router
