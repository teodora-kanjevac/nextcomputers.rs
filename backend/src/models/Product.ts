export class Product {
    public productId?: number
    public imageUrl?: any
    public name: string
    public stock: number
    public createdAt?: Date
    public brand: string
    public specification?: any
    public ean: string
    public country?: string
    public supplier?: string
    public price: number
    public discountPrice?: number
    public retailPrice: number
    public subcategoryId?: number

    constructor(product: any) {
        this.productId = product.product_id
        this.name = product.name
        this.stock = product.stock
        this.createdAt = product.created_at
        this.brand = product.brand
        this.price = product.price
        this.retailPrice = product.retail_price
        this.imageUrl = product.image_url
        this.specification = product.specification
        this.ean = product.ean
        this.country = product.country
        this.supplier = product.supplier
        this.discountPrice = product.discount_price
        this.subcategoryId = product.subcategory_id
    }
}