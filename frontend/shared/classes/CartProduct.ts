export class CartProduct {
    public id: number
    public name: string
    public ean: string
    public price: number
    public discountPrice?: number
    public thumbnail: string
    public stock: number

    constructor(product: any) {
        this.id = product.id
        this.name = product.name
        this.ean = product.ean
        this.price = parseInt(product.salePrice)
        this.discountPrice = parseInt(product.discountPrice)
        this.thumbnail = product.thumbnail
        this.stock = parseInt(product.stock)
    }
}
