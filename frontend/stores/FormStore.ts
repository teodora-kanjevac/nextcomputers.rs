import { defineStore } from 'pinia'
import type { CheckoutData } from '~/shared/classes/CheckoutData'
import type { CheckoutMeta } from '~/shared/classes/CheckoutMeta'
import type { ContactData } from '~/shared/classes/ContactData'
import type { LogInData } from '~/shared/classes/LogInData'
import type { RegisterData } from '~/shared/classes/RegisterFormData'

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
            } as CheckoutMeta,
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
        login: {
            form: {
                email: '',
                password: '',
                rememberMe: false,
            } as LogInData,
        },
    }),
    actions: {
        setPaymentMethod(method: string) {
            this.checkout.meta.paymentMethod = method
        },
        resetContactForm() {
            this.contact.form = {
                fullname: '',
                email: '',
                comment: '',
            }
        },
        resetCheckoutForm() {
            this.checkout.form = {
                fullname: '',
                email: '',
                address: '',
                city: '',
                zipcode: '',
                phone: '',
            }
            this.checkout.meta.paymentMethod = ''
            this.checkout.meta.paymentMethodText = ''
            this.checkout.meta.paymentMethodDiscount = 1
            this.checkout.meta.prices = {
                productsPrice: 0,
                discountPrice: 0,
                shippingPrice: 0,
                totalPrice: 0,
            }
        },
        resetRegisterForm() {
            this.register.form = {
                firstName: '',
                lastName: '',
                email: '',
                address: '',
                city: '',
                phone: '',
                password: '',
                confirmPassword: '',
                termsAccepted: false,
            }
        },
        resetLoginForm() {
            this.login.form = {
                email: '',
                password: '',
                rememberMe: false,
            }
        },
    },
})
