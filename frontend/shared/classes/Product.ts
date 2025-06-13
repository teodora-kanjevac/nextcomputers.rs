import { Specifications } from './Specifications'
import { Declaration } from './Declaration'
import { Rating } from './Rating'
import { Image } from './Image'

export class Product {
    public id: number
    public name: string
    public brand: string
    public price: number
    public discountPrice?: number
    public discountPercentage?: number
    public retailPrice: number
    public shippingPrice: number
    public available: boolean
    public images: Image[]
    public subcategoryId: number
    public specifications: Specifications
    public declaration: Declaration
    public ratings: Rating

    constructor(product: any) {
        this.id = product.id
        this.name = product.name
        this.brand = product.brand
        this.price = parseInt(product.salePrice)
        this.discountPrice = parseInt(product.discountPrice)
        this.discountPercentage = parseInt(product.discountPercentage)
        this.retailPrice = parseInt(product.retailPrice)
        this.shippingPrice = parseInt(product.shippingPrice)
        this.images = product.imageUrl.map((image: any) => new Image(image))
        this.subcategoryId = product.subcategoryId
        this.available = product.available
        this.specifications = new Specifications(product.specification)
        this.declaration = new Declaration(product)
        this.ratings = new Rating(product.ratings)
    }
}
