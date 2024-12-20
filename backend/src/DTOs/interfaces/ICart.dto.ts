import { CartItemDTO } from "~/src/DTOs/CartItem.dto"

export interface ICartDTO {
    id: string
    userId?: string
    cartItems: CartItemDTO[]
}
