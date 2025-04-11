export interface CartProductDTO {
    id: number
    name: string
    ean: string
    price: number
    shippingPrice: number
    discountPrice?: number
    thumbnail: string
    stock: number
}
