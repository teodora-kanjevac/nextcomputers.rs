import { defineStore } from 'pinia'

export const useCheckoutStore = defineStore('checkout', {
    state: () => ({
        form: {
            fullname: '',
            email: '',
            address: '',
            city: '',
            zipcode: '',
            phone: '',
        },
        paymentMethod: '',
        paymentMethodText: '',
        paymentMethodDiscount: 1 as number,
        prices: {
            productsPrice: 0,
            discountPrice: 0,
            shippingPrice: 0,
            totalPrice: 0,
        },
    }),
    actions: {
        setPaymentMethod(method: string) {
            this.paymentMethod = method
        },
    },
})
