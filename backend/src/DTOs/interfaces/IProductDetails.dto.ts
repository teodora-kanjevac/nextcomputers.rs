import { ReviewDTO } from "~/src/DTOs/Review.dto"
import { ProductRatingDTO } from "~/src/DTOs/ProductRating.dto"

export interface IProductDetailsDTO {
    id: number
    name: string
    brand: string
    imageUrl: any
    specification?: any
    ean: string
    country?: string
    supplier?: string
    salePrice: number
    shippingPrice: number
    retailPrice: number
    discountPrice?: number
    discountPercentage?: number
    available: boolean
    subcategoryId: number
    reviews?: ReviewDTO[]
    ratings?: ProductRatingDTO
}
