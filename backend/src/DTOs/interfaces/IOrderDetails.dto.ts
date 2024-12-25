import { ProductCardDTO } from '~/src/DTOs/ProductCard.dto'

export interface IOrderDetailsDTO {
    id: string
    orderId: string
    product: ProductCardDTO
    quantity: number
}
