import { ProductCardDTO } from '~/src/DTOs/ProductCard.dto'

export interface IReviewSuggestionDTO {
    orderId: string
    product: ProductCardDTO
    purchasedAt: Date
}
