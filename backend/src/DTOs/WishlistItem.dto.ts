import { ProductCardDTO } from '~/src/DTOs/ProductCard.dto'
import { IWishlistItemDTO } from './interfaces/IWishlistItem.dto'

export class WishlistItemDTO implements IWishlistItemDTO {
    public id: string
    public wishlistId: string
    public addedAt: Date
    public product: ProductCardDTO
    public priority: number

    constructor(wishlistItem: any) {
        this.id = wishlistItem.wishlist_item_id
        this.wishlistId = wishlistItem.wishlist_id
        this.addedAt = wishlistItem.added_at
        this.product = new ProductCardDTO(wishlistItem.product)
        this.priority = wishlistItem.priority
    }
}
