import { IProductRatingDTO } from '~/src/DTOs/interfaces/IProductRating.dto'
import { StarRatingDTO } from '~/src/DTOs/StarRating.dto'

export class ProductRatingDTO implements IProductRatingDTO {
    totalReviews: number
    starRatings: StarRatingDTO[]

    constructor(productRatings: any) {
        this.totalReviews = productRatings.totalReviews
        this.starRatings = productRatings.starRatings.map((rating: any) => new StarRatingDTO(rating))
    }
}
