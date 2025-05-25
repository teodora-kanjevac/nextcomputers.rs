import { defineStore } from 'pinia'
import axios from 'axios'
import type { RegisterFormData } from '~/shared/classes/RegisterFormData'
import type { LogInData } from '~/shared/classes/LogInData'
import type { UserMe } from '~/shared/classes/UserMe'
import { useCartStore } from './CartStore'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null as UserMe | null,
        hydrated: false,
    }),
    getters: {
        isLoggedIn: state => !!state.user,
    },
    actions: {
        async registerUser(RegisterFormData: RegisterFormData) {
            try {
                const cartId = localStorage.getItem('cart_id')

                const { data } = await axios.post(`/api/auth/register`, {
                    ...RegisterFormData,
                    cartId: cartId,
                })
                if (data.success === false) {
                    throw new Error(data.error)
                }

                this.user = data.newUser

                localStorage.removeItem('cart_expiration')
            } catch (error) {
                throw error
            }
        },
        async loginUser(loginData: LogInData) {
            try {
                const cartStore = useCartStore()

                const { data } = await axios.post(`/api/auth/login`, loginData)
                if (data.success === false) {
                    throw new Error(data.error)
                }
                this.user = data.user

                localStorage.removeItem('cart_expiration')
                sessionStorage.removeItem('session_updated')

                if (this.user?.cartId) {
                    await cartStore.fetchCart(this.user.cartId)
                }
            } catch (error) {
                throw error
            }
        },
        async logoutUser() {
            try {
                const cartStore = useCartStore()

                await axios.post(`/api/auth/logout`)
                this.user = null

                const newCartId = await cartStore.createCart()
                localStorage.setItem('cart_id', newCartId)

                const now = new Date()
                const newExpiration = new Date()
                newExpiration.setUTCDate(newExpiration.getUTCDate() + 10)

                localStorage.setItem('last_accessed_at', now.toISOString())
                localStorage.setItem('cart_expiration', newExpiration.toISOString())
                sessionStorage.removeItem('session_updated')
            } catch (error) {
                throw error
            }
        },
        async generateEmailToken() {
            try {
                const { data } = await axios.post(`/api/auth/generate-email`)
                return data.token
            } catch (error) {
                throw error
            }
        },
        async verifyEmailToken(token: string) {
            try {
                const { data } = await axios.put(`/api/auth/verify-email/${token}`)
                return data
            } catch (error) {
                throw error
            }
        },
        async storePendingVerification(registerData: any) {
            try {
                await axios.post(`/api/auth/pending-verification/create`, registerData)
            } catch (error) {
                console.error('Error storing pending verification:', error)
                throw error
            }
        },
        async getPendingVerification(email: string) {
            try {
                const { data } = await axios.post(`/api/auth/pending-verification/get`, {
                    email: email,
                })
                return data
            } catch (error) {
                throw error
            }
        },
        async removePendingVerification(email: string) {
            try {
                await axios.delete(`/api/auth/pending-verification/delete/${email}`)
            } catch (error) {
                throw error
            }
        },
        async getMe() {
            try {
                const { data } = await axios.get(`/api/auth/me`)
                this.user = data.user ? data.user : null
            } catch (error) {
                throw error
            }
        },
        hydrate() {
            this.hydrated = true
        },
    },
})
