import cron from 'node-cron'
import { deleteExpiredCarts } from '~/src/jobs/deleteExpiredCarts';
import { removeUnavailableItemsFromCart } from '~/src/jobs/removeUnavailableItems';

cron.schedule('0 4 * * *', () => {
    console.log('Running scheduled cart cleanup job...')
    deleteExpiredCarts()
})

cron.schedule('0 * * * *', () => {
    console.log('Running scheduled unavailable cart items cleanup job...')
    removeUnavailableItemsFromCart()
})
