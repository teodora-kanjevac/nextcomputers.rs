import { IStarRatingDTO } from '~/src/DTOs/interfaces/IStarRating.dto'

export interface IProductRatingDTO {
    totalReviews: number
    starRatings: IStarRatingDTO[]
}
