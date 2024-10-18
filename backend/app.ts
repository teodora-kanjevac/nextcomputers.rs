import express, { Application } from 'express'
import dotenv from 'dotenv'
import categoryRoutes from '~/src/routes/categoryRoutes'

dotenv.config()
const app: Application = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.use('/api', categoryRoutes)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
