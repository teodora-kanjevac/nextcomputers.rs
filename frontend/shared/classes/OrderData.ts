export class OrderData {
    public orderId: string
    public orderDate: string
    public products: {
        id: number
        name: string
        ean: string
        price: number
        quantity: number
        imageUrl: string
    }[]
    public prices: {
        productsPrice: number
        discountPrice: number
        shippingPrice: number
        totalPrice: number
    }
    public form: {
        fullname: string
        email: string
        address: string
        city: string
        zipcode: string
        phone: string
        pib: string
    }
    public paymentMethod: string
    public paymentMethodText: string

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
