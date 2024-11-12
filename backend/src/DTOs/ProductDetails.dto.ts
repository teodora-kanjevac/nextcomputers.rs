import { IProductDetailsDTO } from '~/src/DTOs/interfaces/IProductDetails.dto'
import { ReviewDTO } from '~/src/DTOs/Review.dto'
import { ProductRatingDTO } from '~/src/DTOs/ProductRating.dto'

export class ProductDetailsDTO implements IProductDetailsDTO {
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

    constructor(product: any) {
        this.id = product.product_id
        this.name = product.name
        this.brand = product.brand
        this.imageUrl = product.image_url
        this.specification = product.specification
        this.ean = product.ean
        this.country = product.country
        this.supplier = product.supplier
        this.salePrice = product.sale_price
        this.retailPrice = product.retail_price
        this.discountPrice = product.discount_price
        this.reviews = product.review?.map((review: any) => new ReviewDTO(review))
        this.ratings = product.ratings;
    }
}
