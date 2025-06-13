export interface IOrderDataDTO {
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
        pib: string
    }
    paymentMethod: 'CASH' | 'CARD' | 'ADVANCE'
    paymentMethodText: string
}
