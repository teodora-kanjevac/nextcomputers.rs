import type { ReviewDTO } from './ReviewDTO'
import type { RatingDTO } from './RatingDTO'

export interface ProductDTO {
    id: string
    name: string
    price: number
    discountPrice?: number
    image: string
    specifications: SpecificationsDTO
    declaration: DeclarationDTO
    reviews: ReviewDTO[]
    ratings: RatingDTO
}

export interface SpecificationsDTO {
    [key: string]: string
}

export interface DeclarationDTO {
    productName: string
    supplier: string
    originCountry: string
    ean: string
}
