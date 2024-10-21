import express, { Application } from 'express'
import dotenv from 'dotenv'
import categoryRoutes from '~/src/routes/categoryRoutes'
import productRoutes from '~/src/routes/productRoutes'

dotenv.config()
const app: Application = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.use('/api', categoryRoutes, productRoutes)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
