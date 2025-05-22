import dayjs from 'dayjs'

export class ReviewProduct {
    public id: string
    public name: string
    public comment: string
    public rating: number
    public date: Date

    constructor(review: any) {
        this.id = review.id
        this.name = review.user
        this.comment = review.comment
        this.rating = review.rating
        this.date = dayjs(review.createdAt).toDate()
    }

    formatDate(): string {
        return dayjs(this.date).format('DD.MM.YYYY')
    }
}
