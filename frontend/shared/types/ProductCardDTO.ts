import type { RatingDTO } from './RatingDTO'

export interface ProductCardDTO {
    id: number
    name: string
    price: number
    discountPrice?: number
    discountPercentage?: number
    thumbnail: string
    ratings: RatingDTO
}