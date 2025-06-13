export interface CartProductDTO {
    id: number
    name: string
    ean: string
    price: number
    available: boolean
    shippingPrice: number
    discountPrice?: number
    thumbnail: string
    stock: number
}
