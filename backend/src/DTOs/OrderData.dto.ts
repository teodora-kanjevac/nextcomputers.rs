import { IOrderDataDTO } from "~/src/DTOs/interfaces/IOrderData.dto"

export class OrderDataDTO implements IOrderDataDTO {
    orderId: string
    orderDate: string
    products: {
        id: number
        name: string
        ean: string
        price: number
        quantity: number
        imageUrl: string
    }[]
    prices: {
        productsPrice: number
        discountPrice: number
        shippingPrice: number
        totalPrice: number
    }
    form: {
        fullname: string
        email: string
        address: string
        city: string
        zipcode: string
        phone: string
    }
    paymentMethod: string
    paymentMethodText: string

    constructor(data: any) {
        this.orderId = data.orderId
        this.orderDate = data.orderDate
        this.products = data.products
        this.prices = data.prices
        this.form = data.form
        this.paymentMethod = data.paymentMethod
        this.paymentMethodText = data.paymentMethodText
    }
}
