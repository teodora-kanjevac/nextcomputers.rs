import { IReviewSuggestionDTO } from '~/src/DTOs/interfaces/IReviewSuggestion.dto'
import { ProductCardDTO } from '~/src/DTOs/ProductCard.dto'

export class ReviewSuggestionDTO implements IReviewSuggestionDTO {
    public orderId: string
    public product: ProductCardDTO
    public purchasedAt: Date

    constructor(suggestion: any) {
        this.orderId = suggestion.order.order_id
        this.product = new ProductCardDTO(suggestion.product)
        this.purchasedAt = suggestion.order.created_at
    }
}
