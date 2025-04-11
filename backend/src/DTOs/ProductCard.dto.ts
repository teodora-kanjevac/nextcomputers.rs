import { calculateDiscountPercentage } from '~/src/utils/product/productPriceUtils'
import { IProductCardDTO } from '~/src/DTOs/interfaces/IProductCard.dto'

export class ProductCardDTO implements IProductCardDTO {
    id: number
    name: string
    ean: string
    salePrice: number
    shippingPrice: number
    discountPrice?: number
    discountPercentage?: number
    available: boolean
    thumbnail: string
    stock: number

    constructor(product: any) {
        this.id = product.product_id
        this.name = product.name
        this.ean = product.ean
        this.salePrice = product.sale_price
        this.shippingPrice = product.shipping_price
        this.discountPrice = product.discount_price
        this.discountPercentage = calculateDiscountPercentage(this.salePrice, this.discountPrice)
        this.available = product.available
        this.thumbnail = product.image_url[0].thumbnail
        this.stock = product.stock
    }
}
