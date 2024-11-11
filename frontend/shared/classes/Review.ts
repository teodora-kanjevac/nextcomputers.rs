import dayjs from 'dayjs'

export class Review {
    public id: number
    public name: string
    public comment: string
    public rating: number
    public date: Date

    constructor(review: any) {
        this.id = review.reviewId
        this.name = review.userId
        this.comment = review.comment
        this.rating = review.rating
        this.date = new Date(review.createdAt)
    }

    formatDate(): string {
        return dayjs(this.date).format('DD.MM.YYYY')
    }
}
