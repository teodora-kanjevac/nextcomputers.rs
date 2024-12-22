import { IOrderDetailsDTO } from "~/src/DTOs/interfaces/IOrderDetails.dto"
import { ProductCardDTO } from "~/src/DTOs/ProductCard.dto"

export class OrderDetailsDTO implements IOrderDetailsDTO {
    public id: string
    public orderId: string
    public product: ProductCardDTO
    public quantity: number

    constructor(orderDetails: any) {
        this.id = orderDetails.order_detail_id
        this.orderId = orderDetails.order_id
        this.product = new ProductCardDTO(orderDetails.product)
        this.quantity = orderDetails.quantity
    }
}
