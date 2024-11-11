export class Review {
    public reviewId: number;
    public createdAt: Date;
    public productId: number;
    public userId: string;
    public rating: number;
    public comment: string;

    constructor(review: any) {
        this.reviewId = review.review_id;
        this.createdAt = review.created_at;
        this.productId = review.product_id;
        this.userId = review.user_id;
        this.rating = review.rating;
        this.comment = review.comment;
    }
}
