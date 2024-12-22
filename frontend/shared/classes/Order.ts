import { OrderProduct } from './OrderProduct'

export class Order {
    public id: string
    public userId?: string
    public createdAt: Date
    public totalPrice: number
    public orderStatus?: string
    public orderDetails: OrderDetails[]

    constructor(order: any) {
        this.id = order.id
        this.userId = order.userId
        this.createdAt = order.createdAt
        this.totalPrice = order.totalPrice
        this.orderDetails = order.orderDetails.map((details: any) => new OrderDetails(details))
    }
}

export class OrderDetails {
    public id: string
    public orderId: string
    public product: OrderProduct
    public quantity: number

    constructor(orderDetails: any) {
        this.id = orderDetails.id
        this.orderId = orderDetails.orderId
        this.product = new OrderProduct(orderDetails.product)
        this.quantity = orderDetails.quantity
    }
}
