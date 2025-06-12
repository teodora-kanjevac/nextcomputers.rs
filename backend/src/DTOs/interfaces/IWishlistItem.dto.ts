import { ProductCardDTO } from "~/src/DTOs/ProductCard.dto"

export interface IWishlistItemDTO {
    id: string
    wishlistId: string
    addedAt: Date
    product: ProductCardDTO
    priority: number
}
