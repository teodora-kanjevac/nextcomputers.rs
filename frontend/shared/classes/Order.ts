import { OrderProduct } from './OrderProduct'

export class Order {
    public id: string
    public userId?: string
    public createdAt: Date
    public totalPrice: number
    public orderStatus?: string
    public orderDetails: OrderDetails[]
    public orderInfo: OrderInfo

    constructor(order: any) {
        this.id = order.id
        this.userId = order.userId
        this.createdAt = order.createdAt
        this.orderStatus = order.orderStatus
        this.totalPrice = order.totalPrice
        this.orderDetails = order.orderDetails.map((details: any) => new OrderDetails(details))
        this.orderInfo = new OrderInfo(order.orderInfo)
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

export class OrderInfo {
    public id: string
    public orderId: string
    public fullname: string
    public address: string
    public phone: string
    public email: string
    public city: string
    public zipcode: string
    public pib: string
    public paymentMethod: 'CASH' | 'CARD' | 'ADVANCE'
    public productPrice: number
    public shippingPrice: number
    public discountPrice: number

    constructor(orderinfo: any) {
        this.id = orderinfo.id
        this.orderId = orderinfo.orderId
        this.fullname = orderinfo.fullname
        this.address = orderinfo.address
        this.phone = orderinfo.phone
        this.email = orderinfo.email
        this.city = orderinfo.city
        this.zipcode = orderinfo.zipcode
        this.pib = orderinfo.pib
        this.paymentMethod = orderinfo.paymentMethod
        this.productPrice = orderinfo.productPrice
        this.shippingPrice = orderinfo.shippingPrice
        this.discountPrice = orderinfo.discountPrice
    }
}
