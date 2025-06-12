import { Router } from 'express'
import { authUser } from '~/src/middleware/authUser'
import {
    createWishlist,
    getWishlist,
    addProductToWishlist,
    getAllWishlists,
    removeProductsFromWishlist,
    removeWishlist,
    changeProductPriority,
    renameWishlist,
    emptyWishlist,
    removeProductFromWishlist,
} from '~/src/controllers/wishlistController'
import { rateLimitMiddleware } from '~/src/middleware/rateLimiter'

const router: Router = Router()

router.use(authUser)

router.post('/create', rateLimitMiddleware('API_POST_REQUESTS'), createWishlist)
router.get('/default', rateLimitMiddleware('API_GET_REQUESTS'), getWishlist)
router.get('/', rateLimitMiddleware('API_GET_REQUESTS'), getAllWishlists)
router.put('/priority/:wishlistId', rateLimitMiddleware('API_POST_REQUESTS'), changeProductPriority)
router.put('/rename/:wishlistId', rateLimitMiddleware('API_POST_REQUESTS'), renameWishlist)
router.delete('/remove/:wishlistId', rateLimitMiddleware('API_POST_REQUESTS'), removeWishlist)
router.delete('/clear/:wishlistId', rateLimitMiddleware('API_POST_REQUESTS'), emptyWishlist)
router.delete('/remove-item/:wishlistItemId', rateLimitMiddleware('API_POST_REQUESTS'), removeProductFromWishlist)
router.delete('/remove-items', rateLimitMiddleware('API_POST_REQUESTS'), removeProductsFromWishlist)
router.post('/add-item/product', rateLimitMiddleware('API_POST_REQUESTS'), addProductToWishlist)

export default router
