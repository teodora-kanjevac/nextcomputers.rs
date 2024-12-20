import express, { Application } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import scraperRoutes from '~/src/routes/scraperRoutes'
import categoryRoutes from '~/src/routes/categoryRoutes'
import subcategoryRoutes from '~/src/routes/subcategoryRoutes'
import productRoutes from '~/src/routes/productRoutes'
import reviewRoutes from '~/src/routes/reviewRoutes'
import filterRoutes from '~/src/routes/filterRoutes'
import searchRoutes from '~/src/routes/searchRoutes'
import cartRoutes from '~/src/routes/cartRoutes'
import '~/src/jobs/cron-jobs'

dotenv.config()
const app: Application = express()
const PORT = Number(process.env.PORT) || 3001

app.use(express.json())
app.use(
    cors({
        origin: 'http://localhost',
    })
)

app.use('/scraper', scraperRoutes)
app.use('/api/categories', categoryRoutes)
app.use('/api/subcategories', subcategoryRoutes)
app.use('/api/products', productRoutes)
app.use('/api/reviews', reviewRoutes)
app.use('/api/filters', filterRoutes)
app.use('/api/search', searchRoutes)
app.use('/api/cart', cartRoutes)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
