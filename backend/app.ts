import express, { Application } from 'express'
import dotenv from 'dotenv'
import scraperRoutes from '~/src/routes/scraperRoutes'
import categoryRoutes from '~/src/routes/categoryRoutes'
import productRoutes from '~/src/routes/productRoutes'

dotenv.config()
const app: Application = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.use('/scraper', scraperRoutes)
app.use('/api/categories', categoryRoutes);
app.use('/api/products', productRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})