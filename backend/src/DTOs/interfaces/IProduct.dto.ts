export interface IProductDTO {
    id: number
    name: string
    brand: string
    specification?: any
    ean: string
    country?: string
    supplier?: string
    price: number
    discountPrice?: number
    subcategoryId?: number
}
