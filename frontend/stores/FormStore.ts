import { defineStore } from 'pinia'
import type { CheckoutData } from '~/shared/classes/CheckoutData'
import type { ContactData } from '~/shared/classes/ContactData'
import type { RegisterData } from '~/shared/classes/RegisterData'

export const useFormStore = defineStore('forms', {
    state: () => ({
        contact: {
            form: {
                fullname: '',
                email: '',
                comment: '',
            } as ContactData,
        },
        checkout: {
            form: {
                fullname: '',
                email: '',
                address: '',
                city: '',
                zipcode: '',
                phone: '',
            } as CheckoutData,
            meta: {
                paymentMethod: '',
                paymentMethodText: '',
                paymentMethodDiscount: 1 as number,
                prices: {
                    productsPrice: 0,
                    discountPrice: 0,
                    shippingPrice: 0,
                    totalPrice: 0,
                },
            } as CheckoutData,
        },
        register: {
            form: {
                firstName: '',
                lastName: '',
                email: '',
                address: '',
                city: '',
                phone: '',
                password: '',
                confirmPassword: '',
                termsAccepted: false,
            } as RegisterData,
        },
    }),
    actions: {
        setPaymentMethod(method: string) {
            this.checkout.form.paymentMethod = method
        },
    },
})
