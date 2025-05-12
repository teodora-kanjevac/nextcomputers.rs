export class CheckoutMeta {
    public paymentMethod: string
    public paymentMethodText: string
    public paymentMethodDiscount: number
    public prices: {
        productsPrice: number
        discountPrice: number
        shippingPrice: number
        totalPrice: number
    }

    constructor(data: any) {
        this.paymentMethod = data.paymentMethod
        this.paymentMethodText = data.paymentMethodText
        this.paymentMethodDiscount = data.paymentMethodDiscount
        this.prices = {
            productsPrice: data.productsPrice,
            discountPrice: data.discountPrice,
            shippingPrice: data.shippingPrice,
            totalPrice: data.totalPrice,
        }
    }
}
