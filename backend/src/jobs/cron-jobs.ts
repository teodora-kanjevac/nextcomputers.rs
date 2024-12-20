import cron from 'node-cron'
import { deleteExpiredCarts } from './deleteExpiredCarts';

cron.schedule('0 4 * * *', () => {
    console.log('Running scheduled cart cleanup job...')
    deleteExpiredCarts()
})
