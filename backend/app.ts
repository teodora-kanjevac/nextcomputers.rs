import express, { Application } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import scraperRoutes from '~/src/routes/scraperRoutes'
import categoryRoutes from '~/src/routes/categoryRoutes'
import subcategoryRoutes from '~/src/routes/subcategoryRoutes'
import productRoutes from '~/src/routes/productRoutes'

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

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
