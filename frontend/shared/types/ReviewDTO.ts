import type { ProductDataDTO } from './ProductDataDTO'

export interface ReviewDTO {
    id: string
    name: string
    product: ProductDataDTO
    rating: number
    date: Date
    comment: string
}
