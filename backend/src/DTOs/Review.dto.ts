import { IReviewDTO } from "~/src/DTOs/interfaces/IReview.dto"

export class ReviewDTO implements IReviewDTO {
    id: number
    createdAt: Date
    user: string
    rating: number
    comment: string

    constructor(review: any) {
        this.id = review.review_id
        this.createdAt = review.created_at
        this.user = review.fullName
        this.rating = review.rating
        this.comment = review.comment
    }
}