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
    retailPrice: number
    discountPrice?: number
    reviews?: ReviewDTO[]
    ratings?: ProductRatingDTO
}
