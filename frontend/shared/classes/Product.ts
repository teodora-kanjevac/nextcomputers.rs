import { Specifications } from './Specifications'
import { Declaration } from './Declaration'
import { Rating } from './Rating'
import { Review } from './Review'

export class Product {
    public id: string
    public name: string
    public price: number
    public discountPrice?: number
    public retailPrice: number
    public images: any
    public specifications: Specifications
    public declaration: Declaration
    public ratings: Rating
    public reviews: Review[]

    constructor(product: any) {
        this.id = product.id
        this.name = product.name
        this.price = product.salePrice
        this.discountPrice = product.discountPrice
        this.retailPrice = product.retailPrice
        this.images = product.imageUrl
        this.specifications = new Specifications(product.specifications)
        this.declaration = new Declaration(product.declaration)
        this.ratings = new Rating(product.ratings)
        this.reviews = product.reviews.map((review: any) => new Review(review))
    }
}
