import { ProductCardDTO } from '~/src/DTOs/ProductCard.dto'

export interface IReviewDTO {
    id: string
    createdAt: Date
    user: string
    product: ProductCardDTO
    rating: number
    comment: string
}
