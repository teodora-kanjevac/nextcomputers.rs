import { Router } from 'express'
import { scrapeCategoriesAPI, scrapeProductsAPI } from '~/src/controllers/scraperController'

const router: Router = Router()

router.get('/products', scrapeProductsAPI)
router.get('/categories', scrapeCategoriesAPI)

export default router
