import { defineStore } from 'pinia'
import axios from 'axios'
import type { OrderDataDTO } from '~/shared/classes/OrderData'

export const useMailStore = defineStore('mail', {
    state: () => ({}),
    actions: {
        async sendMail(orderData: OrderDataDTO) {
            try {
                await axios.post(`/api/mail/order-confirmation`, orderData)
            } catch (error) {
                console.error('Failed to send order confirmation mail:', error)
            }
        },
    },
})
