export class CheckoutMeta {
    public paymentMethod: 'CASH' | 'CARD' | 'ADVANCE' | undefined
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
