import { IProductDTO } from '~/src/DTOs/interfaces/IProduct.dto'
import { Review } from '~/src/models/Review'

export class ProductDTO implements IProductDTO {
    id: number
    name: string
    price: number
    brand: string
    imageUrl: any
    specification?: any
    ean: string
    country?: string;
    supplier?: string;
    discountPrice?: number;
    subcategoryId?: number;
    reviews?: Review[];

    constructor(product: any) {
        this.id = product.id;
        this.name = product.name;
        this.price = product.price;
        this.brand = product.brand;
        this.imageUrl = product.image_url;
        this.specification = product.specification;
        this.ean = product.ean
        this.country = product.country
        this.supplier = product.supplier
        this.discountPrice = product.discountPrice
        this.subcategoryId = product.subcategoryId
        this.reviews = product.review?.map((review: any) => new Review(review));
    }
}
