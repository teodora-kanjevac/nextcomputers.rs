import { defineStore } from 'pinia'
import axios from 'axios'
import { Order } from '~/shared/classes/Order'
import type { OrderDataDTO } from '~/shared/classes/OrderData'

export const useOrderStore = defineStore('order', {
    state: () => ({
        order: {} as Order,
        orderData: {} as OrderDataDTO,
        qrCode: '',
    }),
    actions: {
        async createOrder(orderData: OrderDataDTO) {
            try {
                const { data } = await axios.post(`/api/order/create`, orderData)
                this.order = new Order(data)
            } catch (error) {
                throw error
            }
        },
        async fetchOrder(orderId: string) {
            try {
                const { data } = await axios.get(`/api/order/${orderId}`)
                this.order = new Order(data)
            } catch (error) {
                console.error('Failed to fetch order:', error)
            }
        },
        async fetchQRCode(orderData: OrderDataDTO) {
            try {
                const { data } = await axios.post(`/api/ips/generate`, orderData, {
                    responseType: 'arraybuffer',
                })
                const base64String = btoa(
                    new Uint8Array(data).reduce((acc, byte) => acc + String.fromCharCode(byte), '')
                )
                this.qrCode = `data:image/png;base64,${base64String}`
            } catch (error) {
                console.error('Failed to fetch QR code:', error)
            }
        },
    },
    persist: [
        {
            key: 'order-data',
            storage: import.meta.client ? sessionStorage : undefined,
        },
    ],
})
