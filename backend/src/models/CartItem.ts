import { Product } from '~/src/models/Product'
import { Cart } from '~/src/models/Cart'

export class CartItem {
    public id: string
    public cart: Cart
    public product: Product
    public addedAt: Date
    public quantity: number

    constructor(cartItem: any) {
        this.id = cartItem.cart_item_id
        this.cart = cartItem.cart_id
        this.product = cartItem.product_id
        this.addedAt = cartItem.added_at
        this.quantity = cartItem.quantity
    }
}
