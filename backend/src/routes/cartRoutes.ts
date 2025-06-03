import { Router } from 'express'
import {
    addItemToCart,
    createACart,
    emptyCart,
    getCartById,
    removeItemFromCart,
    removeUnavailableItemsFromCart,
    updateLastVisitToCart,
    updateQuantity,
} from '~/src/controllers/cartController'

const router: Router = Router()

router.delete('/remove-unavailable-items/:cartId', removeUnavailableItemsFromCart)
router.delete('/remove-item/:cartItemId', removeItemFromCart)
router.delete('/clear/:cartId', emptyCart)
router.put('/last-accessed', updateLastVisitToCart)
router.put('/update-quantity', updateQuantity)
router.post('/add-item', addItemToCart)
router.post('/create', createACart)
router.get('/', getCartById)

export default router
