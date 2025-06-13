import { Product } from '~/src/models/Product'
import { Wishlist } from '~/src/models/Wishlist'

export class WishlistItem {
    public id: string
    public wishlist: Wishlist
    public product: Product
    public addedAt: Date
    public priority: number

    constructor(wishlistItem: any) {
        this.id = wishlistItem.wishlist_item_id
        this.wishlist = wishlistItem.wishlist_id
        this.product = wishlistItem.product_id
        this.addedAt = wishlistItem.added_at
        this.priority = wishlistItem.priority
    }
}
