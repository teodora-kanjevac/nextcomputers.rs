import { Router } from 'express'
import { authUser } from '~/src/middleware/authUser'
import {
    createWishlist,
    getWishlist,
    addProductToWishlist,
    getAllWishlists,
    removeProductFromWishlist,
    removeWishlist,
    changeProductPriority,
    renameWishlist,
    emptyWishlist,
} from '~/src/controllers/wishlistController'

const router: Router = Router()

router.use(authUser)

router.post('/create', createWishlist)
router.get('/', getAllWishlists)
router.put('/priority/:wishlistId', changeProductPriority)
router.put('/rename/:wishlistId', renameWishlist)
router.get('/default', getWishlist)
router.delete('/remove/:wishlistId', removeWishlist)
router.delete('/clear/:wishlistId', emptyWishlist)
router.post('/add-item/product', addProductToWishlist)
router.delete('/remove-item/:wishlistItemId', removeProductFromWishlist)

export default router
