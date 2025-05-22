import type { ProductDataDTO } from './ProductDataDTO'

export interface ReviewSuggestion {
    orderId: string
    product: ProductDataDTO
    purchasedAt: Date
}
