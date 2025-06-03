import { ProductCardDTO } from "~/src/DTOs/ProductCard.dto"

export interface ICartItemDTO {
    id: string
    cartId: string
    product: ProductCardDTO
    quantity: number
}
