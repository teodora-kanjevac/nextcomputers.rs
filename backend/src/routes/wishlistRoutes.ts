import { Router } from 'express'
import { authUser } from '~/src/middleware/authUser'
import { createWishlist, getWishlist, addProductToWishlist, getAllWishlists, removeProductFromWishlist, removeWishlist, getProductsInWishlist, changeProductPriority, renameWishlist } from '~/src/controllers/wishlistControler'

const router: Router = Router()

router.use(authUser)

router.post('/create', createWishlist)
router.get('/', getAllWishlists)
router.get('/products/:wishlistId', getProductsInWishlist)
router.put('/products/priority/:wishlistId', changeProductPriority)
router.put('/rename/:wishlistId', renameWishlist)
router.get('/:wishlistId', getWishlist)
router.delete('/:wishlistId', removeWishlist)
router.post('/:wishlistId/product/:productId', addProductToWishlist)
router.delete('/:wishlistId/product/:productId', removeProductFromWishlist)

export default router