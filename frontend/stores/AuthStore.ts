import { defineStore } from 'pinia'
import axios from 'axios'
import type { RegisterFormData } from '~/shared/classes/RegisterFormData'
import type { LogInData } from '~/shared/classes/LogInData'
import { UserMe } from '~/shared/classes/UserMe'
import { useCartStore } from './CartStore'
import { useCartCookies } from '~/composables/useCartCookies'

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
                const { cartIdCookie, sessionUpdatedCookie } = useCartCookies()

                const { data } = await axios.post(
                    `/api/auth/register`,
                    {
                        ...RegisterFormData,
                        cartId: cartIdCookie.value,
                    },
                    { validateStatus: status => status < 500 }
                )

                if (data.success === false) throw new Error(data.error)

                this.user = new UserMe(data.newUser)

                sessionUpdatedCookie.value = undefined
            } catch (error) {
                throw error
            }
        },
        async loginUser(loginData: LogInData) {
            try {
                const cartStore = useCartStore()
                const { sessionUpdatedCookie } = useCartCookies()

                const { data } = await axios.post(`/api/auth/login`, loginData, {
                    validateStatus: status => status < 500,
                })

                if (data.success === false) throw new Error(data.error)

                this.user = new UserMe(data.user)

                await cartStore.updateLastAccessToCart()
                await cartStore.fetchCart()
                sessionUpdatedCookie.value = undefined
            } catch (error) {
                throw error
            }
        },
        async logoutUser() {
            try {
                const cartStore = useCartStore()
                const { sessionUpdatedCookie, cartIdCookie } = useCartCookies()

                await axios.post(`/api/auth/logout`)
                this.user = null

                cartIdCookie.value = undefined
                await cartStore.createCart()

                sessionUpdatedCookie.value = undefined

                await cartStore.fetchCart()
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
