import { OrderDetails } from '~/src/models/OrderDetails'

export interface IOrderDTO {
    id: string
    createdAt: Date
    totalPrice: number
    orderStatus?: string
    userId?: string
    orderDetails: OrderDetails[]
}
