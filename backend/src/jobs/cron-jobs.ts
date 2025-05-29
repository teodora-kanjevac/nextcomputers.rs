import cron from 'node-cron'
import { deleteExpiredCarts } from '~/src/jobs/deleteExpiredCarts'
import { removeUnavailableItemsFromCart } from '~/src/jobs/removeUnavailableItems'
import { scrapingProducts } from '~/src/jobs/scrapingProducts'
import { indexingProducts } from '~/src/jobs/indexingProducts'
import { deleteUnverifiedUsers } from '~/src/jobs/deleteUnverifiedUsers'

cron.schedule('15 */6 * * *', async () => {
    console.log('[Cleanup] Running user cleanup...')
    await deleteUnverifiedUsers()
})

cron.schedule('0 4 * * *', async () => {
    console.log('[Cleanup] Running cart cleanup...')
    await deleteExpiredCarts()
})

cron.schedule('0 8-20,22,1,4 * * 1-5', async () => {
    console.log('[Scraping] Running scraping products (Mon-Fri)...')
    await scrapingProducts()
    await indexingProducts()
    await removeUnavailableItemsFromCart()
})

cron.schedule('0 9,15,21,3 * * 6,7', async () => {
    console.log('[Scraping] Running scraping products (Sat-Sun)...')
    await scrapingProducts()
    await indexingProducts()
    await removeUnavailableItemsFromCart()
})
