import { ICartDTO } from '~/src/DTOs/interfaces/ICart.dto'
import { CartItemDTO } from '~/src/DTOs/CartItem.dto'

export class CartDTO implements ICartDTO {
    id: string
    userId?: string
    cartItems: CartItemDTO[]

    constructor(cart: any) {
        this.id = cart.cart_id
        this.userId = cart.user_id
        this.cartItems = cart.cartitem.map((item: any) => new CartItemDTO(item))
    }
}
