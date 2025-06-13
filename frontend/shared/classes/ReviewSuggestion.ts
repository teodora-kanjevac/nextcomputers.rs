import { ProductData } from './ProductData'

export class ReviewSuggestion {
    public orderId: string
    public product: ProductData
    public purchasedAt: Date

    constructor(suggestion: any) {
        this.orderId = suggestion.orderId
        this.product = new ProductData(suggestion.product)
        this.purchasedAt = suggestion.purchasedAt
    }
}
