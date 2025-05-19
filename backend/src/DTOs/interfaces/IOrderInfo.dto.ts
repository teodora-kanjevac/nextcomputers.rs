export interface IOrderInfoDTO {
    id: string
    orderId: string
    fullname: string
    address: string
    phone: string
    email: string
    city: string
    zipcode: string
    pib: string
    paymentMethod: 'CASH' | 'CARD' | 'ADVANCE'
    productPrice: number
    shippingPrice: number
    discountPrice: number
}
