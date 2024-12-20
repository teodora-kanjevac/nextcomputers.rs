export class CartProduct {
    public id: number
    public name: string
    public price: number
    public discountPrice?: number
    public thumbnail: string

    constructor(product: any) {
        this.id = product.id
        this.name = product.name
        this.price = parseInt(product.salePrice)
        this.discountPrice = parseInt(product.discountPrice)
        this.thumbnail = product.thumbnail
    }
}