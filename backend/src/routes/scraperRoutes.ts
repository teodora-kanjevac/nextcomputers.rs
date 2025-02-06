import { Router } from 'express'
import { scrapeCategoriesAPI, scrapeEWEProductsAPI, scrapeUsponProductsAPI } from '~/src/controllers/scraperController'

const router: Router = Router()

router.get('/products/ewe', scrapeEWEProductsAPI)
router.get('/products/uspon', scrapeUsponProductsAPI)
router.get('/categories', scrapeCategoriesAPI)

export default router
