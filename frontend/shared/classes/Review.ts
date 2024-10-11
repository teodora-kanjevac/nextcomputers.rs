import dayjs from 'dayjs'
import type { ReviewDTO } from '../types/ReviewDTO'

export class Review {
    public name: string
    public comment: string
    public rating: number
    public date: Date

    constructor({ name, comment, rating, date }: ReviewDTO) {
        this.name = name
        this.comment = comment
        this.rating = rating
        this.date = new Date(date)
    }

    formatDate(): string {
        return dayjs(this.date).format('DD.MM.YYYY')
    }
}
