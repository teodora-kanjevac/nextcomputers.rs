import { IProductCardDTO } from './interfaces/IProductCard.dto'

export class ProductCardDTO implements IProductCardDTO {
    id: number
    name: string
    salePrice: number
    discountPrice?: number
    thumbnail: string

    constructor(product: any) {
        this.id = product.product_id
        this.name = product.name
        this.salePrice = product.sale_price
        this.discountPrice = product.discount_price
        this.thumbnail = product.image_url[0].thumbnail
    }
}
