import { IStarRatingDTO } from '~/src/DTOs/interfaces/IStarRating.dto'

export class StarRatingDTO implements IStarRatingDTO {
    star: number
    amount: number

    constructor(starRating: any) {
        this.star = starRating.star
        this.amount = starRating.amount
    }
}
