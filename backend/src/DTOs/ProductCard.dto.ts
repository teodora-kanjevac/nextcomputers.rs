import { calculateDiscountPercentage } from '~/src/utils/product/productPriceUtils'
import { IProductCardDTO } from '~/src/DTOs/interfaces/IProductCard.dto'

export class ProductCardDTO implements IProductCardDTO {
    id: number
    name: string
    ean: string
    salePrice: number
    discountPrice?: number
    discountPercentage?: number
    thumbnail: string

    constructor(product: any) {
        this.id = product.product_id
        this.name = product.name
        this.ean = product.ean
        this.salePrice = product.sale_price
        this.discountPrice = product.discount_price
        this.discountPercentage = calculateDiscountPercentage(this.salePrice, this.discountPrice)
        this.thumbnail = product.image_url[0].thumbnail
    }
}
