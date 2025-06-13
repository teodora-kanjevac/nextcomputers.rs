import { IWishlistDTO } from '~/src/DTOs/interfaces/IWishlist.dto'
import { WishlistItemDTO } from '~/src/DTOs/WishlistItem.dto'

export class WishlistDTO implements IWishlistDTO {
    id: string
    userId: string
    name: string
    isDefault: boolean
    wishlistItems: WishlistItemDTO[]

    constructor(wishlist: any) {
        this.id = wishlist.wishlist_id
        this.userId = wishlist.user_id
        this.name = wishlist.name
        this.isDefault = wishlist.is_default
        this.wishlistItems = wishlist.wishlistitem.map((item: any) => new WishlistItemDTO(item))
    }
}
