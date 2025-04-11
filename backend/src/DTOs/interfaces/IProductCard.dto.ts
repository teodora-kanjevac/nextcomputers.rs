export interface IProductCardDTO {
    id: number
    name: string
    ean: string
    thumbnail: string
    salePrice: number
    shippingPrice: number
    discountPrice?: number
    discountPercentage?: number
    available: boolean
}
