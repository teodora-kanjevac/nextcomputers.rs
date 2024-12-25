import type { OrderProductDTO } from './OrderProduct'

export interface OrderDTO {
    id: string
    userId?: string
    createdAt: Date
    totalPrice: number
    orderStatus?: string
    orderDetails: OrderDetailsDTO[]
}

export interface OrderDetailsDTO {
    id: string
    cartId: string
    product: OrderProductDTO
    quantity: number
}
