import { WishlistItemDTO } from '~/src/DTOs/WishlistItem.dto'

export interface IWishlistDTO {
    id: string
    userId: string
    name: string
    isDefault: boolean
    wishlistItems: WishlistItemDTO[]
}
