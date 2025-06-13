import { Router } from 'express'
import {
    addItemToCart,
    checkCart,
    createACart,
    emptyCart,
    getCartById,
    removeItemFromCart,
    removeUnavailableItemsFromCart,
    updateLastVisitToCart,
    updateQuantity,
} from '~/src/controllers/cartController'
import { rateLimitMiddleware } from '~/src/middleware/rateLimiter'

const router: Router = Router()

router.delete('/remove-unavailable-items/:cartId', removeUnavailableItemsFromCart)
router.delete('/remove-item/:cartItemId', rateLimitMiddleware('API_POST_REQUESTS'), removeItemFromCart)
router.delete('/clear/:cartId', rateLimitMiddleware('API_POST_REQUESTS'), emptyCart)
router.put('/last-accessed', rateLimitMiddleware('API_POST_REQUESTS'), updateLastVisitToCart)
router.put('/update-quantity', rateLimitMiddleware('API_POST_REQUESTS'), updateQuantity)
router.post('/add-item', rateLimitMiddleware('API_POST_REQUESTS'), addItemToCart)
router.post('/create', rateLimitMiddleware('API_POST_REQUESTS'), createACart)
router.get('/exists/:cartId', checkCart)
router.get('/', rateLimitMiddleware('API_GET_REQUESTS'), getCartById)

export default router
