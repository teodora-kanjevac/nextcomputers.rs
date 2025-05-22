import { IReviewProductDTO } from '~/src/DTOs/interfaces/IReviewProduct.dto'

export class ReviewProductDTO implements IReviewProductDTO {
    public id: string
    public createdAt: Date
    public user: string
    public rating: number
    public comment: string

    constructor(review: any) {
        this.id = review.review_id
        this.createdAt = review.created_at
        this.user = review.fullName
        this.rating = review.rating
        this.comment = review.comment
    }
}
