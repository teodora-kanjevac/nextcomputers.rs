import { Rating } from './Rating'

export class ProductCard {
    public id: number
    public name: string
    public price: number
    public discountPrice?: number
    public thumbnail: string
    public ratings: Rating

    constructor(product: any) {
        this.id = product.id
        this.name = product.name
        this.price = parseInt(product.salePrice)
        this.discountPrice = parseInt(product.discountPrice)
        this.thumbnail = product.thumbnail
        this.ratings = new Rating(product.ratings)
    }
}