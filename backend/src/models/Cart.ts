import { CartItem } from '~/src/models/CartItem'

export class Cart {
    public id: string
    public createdAt: Date
    public userId?: string
    public cartItems: CartItem[]

    constructor(cart: any) {
        this.id = cart.cart_id
        this.createdAt = cart.created_at
        this.userId = cart.user_id
        this.cartItems = cart.cartitem
    }
}
