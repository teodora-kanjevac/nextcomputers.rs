import { ProductCardDTO } from "~/src/DTOs/ProductCard.dto"

export class OrderDetails {
    public id: string
    public orderId: string
    public product: ProductCardDTO
    public quantity: number

    constructor(orderdetails: any) {
        this.id = orderdetails.order_detail_id
        this.orderId = orderdetails.order_id
        this.product = orderdetails.product
        this.quantity = orderdetails.quantity
    }
}
