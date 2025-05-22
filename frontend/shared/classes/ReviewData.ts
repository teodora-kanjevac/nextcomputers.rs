export class ReviewData {
    public rating: number
    public comment: string

    constructor(data: any) {
        this.rating = data.rating
        this.comment = data.comment
    }
}
