export class CheckoutData {
    public fullname: string
    public email: string
    public address: string
    public city: string
    public zipcode: string
    public phone: string
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
        this.fullname = data.fullname
        this.email = data.email
        this.address = data.address
        this.city = data.city
        this.zipcode = data.zipcode
        this.phone = data.phone
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
