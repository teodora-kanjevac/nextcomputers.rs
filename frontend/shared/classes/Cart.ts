import { CartProduct } from "./CartProduct"

export class Cart{
    public id: string
    public userId?: string
    public cartItems: CartItem[]

    constructor(cart: any) {
        this.id = cart.id
        this.userId = cart.userId
        this.cartItems = cart.cartItems.map((item: any) => new CartItem(item))
    }
}

export class CartItem {
    public id: string
    public cartId: string
    public product: CartProduct
    public quantity: number

    constructor(cartItem: any) {
        this.id = cartItem.id
        this.cartId = cartItem.cartId
        this.product = new CartProduct(cartItem.product)
        this.quantity = cartItem.quantity
    }
}