import { IOrderInfoDTO } from "./interfaces/IOrderInfo.dto"

export class OrderInfoDTO implements IOrderInfoDTO {
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
        this.id = orderinfo.order_info_id
        this.orderId = orderinfo.order_id
        this.fullname = orderinfo.name
        this.address = orderinfo.address
        this.phone = orderinfo.phone_number
        this.email = orderinfo.email
        this.city = orderinfo.city
        this.zipcode = orderinfo.zipcode
        this.pib = orderinfo.pib
        this.paymentMethod = orderinfo.payment_method
        this.productPrice = orderinfo.subtotal_price
        this.shippingPrice = orderinfo.shipping_price
        this.discountPrice = orderinfo.discount_price
    }
}
