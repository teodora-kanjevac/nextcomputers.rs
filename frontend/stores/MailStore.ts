import { defineStore } from 'pinia'
import axios from 'axios'
import type { OrderData } from '~/shared/classes/OrderData'
import type { ContactData } from '~/shared/classes/ContactData'

export const useMailStore = defineStore('mail', {
    state: () => ({}),
    actions: {
        async sendMail(orderData: OrderData) {
            try {
                await axios.post(`/api/mail/order-confirmation`, orderData)
            } catch (error) {
                throw error
            }
        },
        async sendContactMail(contactData: ContactData) {
            try {
                await axios.post(`/api/mail/contact`, contactData)
            } catch (error) {
                throw error
            }
        },
    },
})
