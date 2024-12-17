import { ICartItemDTO } from '~/src/DTOs/interfaces/ICartItem.dto'
import { ProductCardDTO } from '~/src/DTOs/ProductCard.dto'

export class CartItemDTO implements ICartItemDTO {
    id: string
    cartId: string
    product: ProductCardDTO
    quantity: number

    constructor(cartItem: any) {
        this.id = cartItem.cart_item_id
        this.cartId = cartItem.cart_id
        this.product = new ProductCardDTO(cartItem.product)
        this.quantity = cartItem.quantity
    }
}
