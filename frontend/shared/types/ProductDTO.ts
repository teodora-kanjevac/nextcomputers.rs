import type { RatingDTO } from './RatingDTO'
import type { ImageDTO } from './ImageDTO'

export interface ProductDTO {
    id: number
    name: string
    brand: string
    price: number
    shippingPrice: number
    discountPrice?: number
    discountPercentage?: number
    retailPrice: number
    subcategoryId: number
    available: boolean
    images: ImageDTO[]
    specifications: SpecificationsDTO
    declaration: DeclarationDTO
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
