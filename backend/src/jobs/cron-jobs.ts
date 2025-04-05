import cron from 'node-cron'
import { deleteExpiredCarts } from '~/src/jobs/deleteExpiredCarts'
import { removeUnavailableItemsFromCart } from '~/src/jobs/removeUnavailableItems'
import { scrapingProducts } from '~/src/jobs/scrapingProducts'
import { indexingProducts } from '~/src/jobs/indexingProducts'

cron.schedule('0 4 * * *', () => {
    console.log('Running scheduled cart cleanup job...')
    deleteExpiredCarts()
})

cron.schedule('0 8-20,22,1,4 * * 1-5', async () => {
    console.log('Running scheduled scraping products job (Mon-Fri)...')
    await scrapingProducts()
    await indexingProducts()
    await removeUnavailableItemsFromCart()
})

cron.schedule('0 9,15,21,3 * * 6,7', async () => {
    console.log('Running scheduled scraping products job (Sat-Sun)...')
    await scrapingProducts()
    await indexingProducts()
    await removeUnavailableItemsFromCart()
})
