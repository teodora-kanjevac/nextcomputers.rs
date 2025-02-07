import { Router } from 'express'
import {
    addItemToCart,
    createACart,
    emptyCart,
    getCartById,
    getCartByUser,
    removeItemFromCart,
    updateLastVisitToCart,
    updateQuantity,
} from '~/src/controllers/cartController'

const router: Router = Router()

router.delete('/remove-item/:cartItemId', removeItemFromCart)
router.delete('/clear/:cartItemId', emptyCart)
router.put('/last-accessed', updateLastVisitToCart)
router.put('/update-quantity', updateQuantity)
router.post('/add-item', addItemToCart)
router.post('/create', createACart)
router.get('/user/:userId', getCartByUser)
router.get('/:cartId', getCartById)

export default router
