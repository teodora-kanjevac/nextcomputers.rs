import { defineStore } from 'pinia'
import axios from 'axios'
import type { RegisterFormData } from '~/shared/classes/RegisterFormData'
import type { LogInData } from '~/shared/classes/LogInData'
import { UserMe } from '~/shared/classes/UserMe'
import { useCartStore } from './CartStore'
import { useCartCookies } from '~/composables/useCartCookies'
import type { ResetPasswordData } from '~/shared/classes/ResetPasswordData'
import type { RegisterData } from '~/shared/classes/RegisterData'

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

                if (data.error) throw new Error(data.error)

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

                if (data.error) throw new Error(data.error)

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
        async checkIfUserExists(email: string) {
            try {
                const { data } = await axios.post(`/api/auth/check-user`, { email })

                if (data.error) throw new Error(data.error)

                return data
            } catch (error) {
                throw error
            }
        },
        async generateEmailToken(registerData: RegisterData) {
            try {
                const { data } = await axios.post(`/api/auth/generate-email`, registerData)
                return data
            } catch (error) {
                throw error
            }
        },
        async generateResetPasswordToken(email: string) {
            try {
                const { data } = await axios.post(
                    `/api/auth/generate-reset-pass`,
                    { email },
                    { validateStatus: status => status < 500 }
                )

                if (data.error) throw new Error(data.error)

                return data
            } catch (error) {
                throw error
            }
        },
        async verifyEmailToken(token: string) {
            try {
                const { $axios } = useNuxtApp()
                const { data } = await $axios.put(`/api/auth/verify-email/${token}`)
                return data
            } catch (error) {
                throw error
            }
        },
        async verifyPassToken(token: string) {
            try {
                const { $axios } = useNuxtApp()
                const { data } = await $axios.post(`/api/auth/verify-pass/${token}`)
                return data
            } catch (error) {
                throw error
            }
        },
        async requestVerificationMail(email: string) {
            try {
                const { data } = await axios.post(
                    `/api/auth/request-verify-email`,
                    { email },
                    { validateStatus: status => status < 500 }
                )

                if (data.error) throw new Error(data.error)

                return data
            } catch (error) {
                throw error
            }
        },
        async changePassword(token: string, resetPasswordData: ResetPasswordData) {
            try {
                const { data } = await axios.put(`/api/auth/change-pass`, {
                    token,
                    resetPasswordData,
                })

                if (data.success === false) throw new Error(data.error)

                return data
            } catch (error) {
                throw error
            }
        },
        async getPendingVerification(email: string) {
            try {
                const { data } = await axios.post(`/api/auth/pending-verification/get`, { email })
                return data
            } catch (error) {
                throw error
            }
        },
        async getMe() {
            try {
                const { $axios } = useNuxtApp()
                const { data } = await $axios.get(`/api/auth/me`)
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
