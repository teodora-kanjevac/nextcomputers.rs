import type { RatingDTO } from './RatingDTO'

export interface ProductCardDTO {
    id: number
    name: string
    price: number
    shippingPrice: number
    discountPrice?: number
    discountPercentage?: number
    available: boolean
    thumbnail: string
    ratings: RatingDTO
}