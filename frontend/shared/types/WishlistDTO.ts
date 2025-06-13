import type { CartProductDTO } from './CartProductDTO'

export interface WishlistDTO {
    id: string
    userId: string
    name: string
    isDefault: boolean
    wishlistItems: WishlistItemDTO[]
}

export interface WishlistItemDTO {
    id: string
    wishlistId: string
    product: CartProductDTO
    priority: number
}
