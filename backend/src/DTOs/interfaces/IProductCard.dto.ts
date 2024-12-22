export interface IProductCardDTO {
    id: number
    name: string
    ean: string
    thumbnail: string
    salePrice: number
    discountPrice?: number
    discountPercentage?: number
}
