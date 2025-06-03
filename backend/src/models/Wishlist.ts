import { WishlistItem } from '~/src/models/WishlistItem'

export class Wishlist {
    public id: string
    public createdAt: Date
    public userId: string
    public name: string
    public isDefault: boolean
    public wishlistItems: WishlistItem[]

    constructor(wishlist: any) {
        this.id = wishlist.wishlist_id
        this.createdAt = wishlist.created_at
        this.userId = wishlist.user_id
        this.name = wishlist.name
        this.isDefault = wishlist.is_default
        this.wishlistItems = wishlist.wishlistitem
    }
}
