import { ProductCardDTO } from '~/src/DTOs/ProductCard.dto'
import { IReviewDTO } from '~/src/DTOs/interfaces/IReview.dto'

export class ReviewDTO implements IReviewDTO {
    public id: string
    public createdAt: Date
    public user: string
    public product: ProductCardDTO
    public rating: number
    public comment: string

    constructor(review: any) {
        this.id = review.review_id
        this.createdAt = review.created_at
        this.user = review.fullName
        this.product = new ProductCardDTO(review.product)
        this.rating = review.rating
        this.comment = review.comment
    }
}
