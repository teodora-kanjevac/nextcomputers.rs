import { defineStore } from 'pinia'

export const useCheckoutStore = defineStore('checkout', {
    state: () => ({
        form: {
            fullname: '',
            email: '',
            address: '',
            city: '',
            zipcode: '',
            phone: ''
        },
        paymentMethod: undefined as string | undefined,
        paymentMethodDiscount: 1 as number
    }),
    actions: {
        setPaymentMethod(method: string) {
            this.paymentMethod = method
        }
    },
})

