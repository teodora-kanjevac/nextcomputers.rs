import { IOrderDTO } from '~/src/DTOs/interfaces/IOrder.dto'
import { OrderDetailsDTO } from '~/src/DTOs/OrderDetails.dto'
import { OrderInfoDTO } from './OrderInfo.dto'

export class OrderDTO implements IOrderDTO {
    public id: string
    public createdAt: Date
    public totalPrice: number
    public orderStatus?: string
    public userId?: string
    public orderDetails: OrderDetailsDTO[]
    public orderInfo: OrderInfoDTO

    constructor(order: any) {
        this.id = order.order_id
        this.createdAt = order.created_at
        this.userId = order.user_id
        this.orderStatus = order.order_status
        this.totalPrice = order.total_price
        this.orderDetails = order.orderdetails.map((details: any) => new OrderDetailsDTO(details))
        this.orderInfo = new OrderInfoDTO(order.orderinfo)
    }
}
