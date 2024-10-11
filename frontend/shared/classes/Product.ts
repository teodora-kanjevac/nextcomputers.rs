import type { ProductDTO } from '../types/ProductDTO'
import { Specifications } from './Specifications'
import { Declaration } from './Declaration'
import { Rating } from './Rating'
import { Review } from './Review'

export class Product {
    public id: string
    public name: string
    public price: number
    public discountPrice?: number
    public image: string
    public specifications: Specifications
    public declaration: Declaration
    public ratings: Rating
    public reviews: Review[]

    constructor({ id, name, price, discountPrice, image, specifications, declaration, ratings, reviews }: ProductDTO) {
        this.id = id
        this.name = name
        this.price = price
        this.discountPrice = discountPrice
        this.image = image
        this.specifications = new Specifications(specifications)
        this.declaration = new Declaration(declaration)
        this.ratings = new Rating(ratings)
        this.reviews = reviews.map(review => new Review(review))
    }
}
