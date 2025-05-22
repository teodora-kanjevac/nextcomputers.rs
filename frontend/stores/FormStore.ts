import { defineStore } from 'pinia'
import type { CheckoutData } from '~/shared/classes/CheckoutData'
import type { CheckoutMeta } from '~/shared/classes/CheckoutMeta'
import type { ContactData } from '~/shared/classes/ContactData'
import type { EditUserData } from '~/shared/classes/EditUserData'
import type { LogInData } from '~/shared/classes/LogInData'
import type { RegisterFormData } from '~/shared/classes/RegisterFormData'
import type { ReviewData } from '~/shared/classes/ReviewData'

export const useFormStore = defineStore('forms', {
    state: () => ({
        contact: {
            form: {
                fullname: '',
                email: '',
                comment: '',
            } as ContactData,
        },
        review: {
            form: {
                rating: 0,
                comment: '',
            } as ReviewData,
        },
        checkout: {
            form: {
                fullname: '',
                email: '',
                address: '',
                city: '',
                zipcode: '',
                phone: '',
                pib: '',
            } as CheckoutData,
            meta: {
                paymentMethod: undefined,
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
            } as RegisterFormData,
        },
        editUserData: {
            form: {
                firstName: '',
                lastName: '',
                email: '',
                address: '',
                city: '',
                phone: '',
                zipcode: '',
            } as EditUserData,
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
        setPaymentMethod(method: 'CASH' | 'CARD' | 'ADVANCE') {
            this.checkout.meta.paymentMethod = method
        },
        resetContactForm() {
            this.contact.form = {
                fullname: '',
                email: '',
                comment: '',
            }
        },
        resetReviewForm() {
            this.review.form = {
                rating: 0,
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
                pib: '',
            }
            this.checkout.meta.paymentMethod = undefined
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
        resetEditUserForm() {
            this.editUserData.form = {
                firstName: '',
                lastName: '',
                address: '',
                city: '',
                phone: '',
                zipcode: '',
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
