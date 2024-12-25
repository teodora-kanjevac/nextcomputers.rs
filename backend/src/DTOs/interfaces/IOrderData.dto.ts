export interface IOrderDataDTO {
    orderId: string
    orderDate: string
    products: {
        id: number
        name: string
        ean: string
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
}
