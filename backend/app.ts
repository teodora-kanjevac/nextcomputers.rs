import express, { Application } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import categoryRoutes from '~/src/routes/categoryRoutes'
import subcategoryRoutes from '~/src/routes/subcategoryRoutes'
import productRoutes from '~/src/routes/productRoutes'
import reviewRoutes from '~/src/routes/reviewRoutes'
import filterRoutes from '~/src/routes/filterRoutes'
import searchRoutes from '~/src/routes/searchRoutes'
import cartRoutes from '~/src/routes/cartRoutes'
import orderRoutes from '~/src/routes/orderRoutes'
import mailRoutes from '~/src/routes/mailRoutes'
import ipsRoutes from '~/src/routes/ipsRoutes'
import catalogRoutes from '~/src/routes/catalogRoutes'
import authRoutes from '~/src/routes/authRoutes'
import userRoutes from '~/src/routes/userRoutes'
import cookieParser from 'cookie-parser'
import wishlistRoutes from '~/src/routes/wishlistRoutes'

dotenv.config()
const app: Application = express()
const PORT = Number(process.env.PORT) || 3001

app.use(express.json())
app.use(
    cors({
        origin: 'http://localhost',
    })
)
app.use(cookieParser())

app.use('/api/categories', categoryRoutes)
app.use('/api/subcategories', subcategoryRoutes)
app.use('/api/products', productRoutes)
app.use('/api/reviews', reviewRoutes)
app.use('/api/filters', filterRoutes)
app.use('/api/search', searchRoutes)
app.use('/api/cart', cartRoutes)
app.use('/api/order', orderRoutes)
app.use('/api/mail', mailRoutes)
app.use('/api/ips', ipsRoutes)
app.use('/api/catalog', catalogRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/user', userRoutes)
app.use('/api/wishlist', wishlistRoutes)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
