import { CartProduct } from './CartProduct'

export class Wishlist {
    public id: string
    public userId: string
    public name: string
    public isDefault: boolean
    public wishlistItems: WishlistItem[]

    constructor(wishlist: any) {
        this.id = wishlist.id
        this.userId = wishlist.userId
        this.name = wishlist.name
        this.isDefault = wishlist.isDefault
        this.wishlistItems = wishlist.wishlistItems.map((item: any) => new WishlistItem(item))
    }
}

export class WishlistItem {
    public id: string
    public wishlistId: string
    public product: CartProduct
    public priority: number

    constructor(wishlistItem: any) {
        this.id = wishlistItem.id
        this.wishlistId = wishlistItem.wishlistId
        this.product = new CartProduct(wishlistItem.product)
        this.priority = wishlistItem.priority
    }
}
