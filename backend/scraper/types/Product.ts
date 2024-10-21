import { isExcluded } from "~/scraper/utils/excludeCategory"

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
    public subcategoryName: string
    public subcategoryId?: number

    constructor(
        productId: number | undefined,
        name: string,
        stock: number,
        createdAt: Date | undefined,
        brand: string,
        price: number,
        retailPrice: number,
        subcategoryName: string,
        ean: string,
        imageUrl?: any,
        specification?: any,
        country?: string,
        supplier?: string,
        discountPrice?: number,
        subcategoryId?: number
    ) {
        this.productId = productId
        this.name = name
        this.stock = stock
        this.createdAt = createdAt
        this.brand = brand
        this.price = price
        this.retailPrice = retailPrice
        this.imageUrl = imageUrl
        this.specification = specification
        this.ean = ean
        this.country = country
        this.supplier = supplier
        this.discountPrice = discountPrice
        this.subcategoryName = subcategoryName
        this.subcategoryId = subcategoryId
    }

    public isExcluded(): boolean {
        return isExcluded(this.subcategoryName)
    }
}
