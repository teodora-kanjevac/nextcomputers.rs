import { ProductData } from './ProductData'

export class Review {
    public id: string
    public name: string
    public product: ProductData
    public comment: string
    public rating: number
    public date: Date

    constructor(review: any) {
        this.id = review.id
        this.name = review.user
        this.product = new ProductData(review.product)
        this.comment = review.comment
        this.rating = review.rating
        this.date = review.createdAt
    }
}
