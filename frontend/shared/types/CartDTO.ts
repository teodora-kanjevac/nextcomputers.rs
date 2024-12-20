import type { CartProductDTO } from './CartProductDTO'

export interface CartDTO {
    id: string
    cartItems: CartItemDTO[]
}

export interface CartItemDTO {
    id: string
    cartId: string
    product: CartProductDTO
    quantity: number
}
