import { OrderDetails } from "~/src/models/OrderDetails"

export class Order {
    public id: string
    public createdAt: Date
    public totalPrice: number
    public orderStatus?: string
    public userId?: string
    public orderDetails: OrderDetails[]

    constructor(order: any) {
        this.id = order.order_id
        this.createdAt = order.created_at
        this.userId = order.user_id
        this.orderStatus = order.order_status
        this.totalPrice = order.total_price
        this.orderDetails = order.orderdetails
    }
}
