import type { OrderProductDTO } from './OrderProductDTO'

export interface OrderDTO {
    id: string
    userId?: string
    createdAt: Date
    totalPrice: number
    orderStatus?: string
    orderDetails: OrderDetailsDTO[]
    orderInfo: OrderInfo
}

export interface OrderDetailsDTO {
    id: string
    product: OrderProductDTO
    quantity: number
}

export interface OrderInfo {
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
