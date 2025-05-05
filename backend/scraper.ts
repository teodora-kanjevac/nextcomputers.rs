import express from 'express'
import dotenv from 'dotenv'
import scraperRoutes from '~/src/routes/scraperRoutes'
import '~/src/jobs/cron-jobs'

dotenv.config()

const scraper = express()
const PORT = Number(process.env.SCRAPER_PORT) || 4001

scraper.use(express.json())

scraper.use('/scraper', scraperRoutes)

scraper.listen(PORT, () => {
    console.log(`Scraper server running on port ${PORT}`)
})