export interface RatingDTO {
    totalReviews: number
    starRatings: StarDTO[]
}

export interface StarDTO {
    star: number
    amount: number
}
