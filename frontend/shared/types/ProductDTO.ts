import type { ReviewDTO } from './ReviewDTO'
import type { RatingDTO } from './RatingDTO'
import type { ImageDTO } from './ImageDTO'

export interface ProductDTO {
    id: string
    name: string
    brand: string
    price: number
    discountPrice?: number
    retailPrice: number
    images: ImageDTO[]
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
    supplier?: string
    originCountry?: string
    ean: string
}
