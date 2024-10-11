import type { RatingDTO, StarDTO } from '../types/RatingDTO'

export class Rating {
    public totalReviews: number
    public starRatings: Star[]

    constructor({ totalReviews, starRatings }: RatingDTO) {
        this.totalReviews = totalReviews
        this.starRatings = starRatings.map(star => new Star(star))
    }

    public getAverageRating(): number {
        const totalStars = this.starRatings.reduce((acc, star) => acc + star.star * star.amount, 0)
        return this.totalReviews > 0 ? totalStars / this.totalReviews : 0
    }
}

export class Star {
    public star: number
    public amount: number

    constructor({ star, amount }: StarDTO) {
        this.star = star
        this.amount = amount
    }
}
