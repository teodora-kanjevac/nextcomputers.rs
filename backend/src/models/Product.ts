export class Product {
    public id?: number
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
    public salePrice: number
    public productDistributor: string
    public available: boolean
    public subcategoryId?: number

    constructor(product: any) {
        this.id = product.product_id
        this.name = product.name
        this.stock = product.stock
        this.createdAt = product.created_at
        this.brand = product.brand
        this.price = product.price
        this.retailPrice = product.retail_price
        this.salePrice = product.sale_price
        this.productDistributor = product.product_distributor
        this.imageUrl = product.image_url
        this.specification = product.specification
        this.ean = product.ean
        this.country = product.country
        this.supplier = product.supplier
        this.discountPrice = product.discount_price
        this.available = product.available
        this.subcategoryId = product.subcategory_id
    }
}
