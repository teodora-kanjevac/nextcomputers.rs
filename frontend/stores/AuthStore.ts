import { defineStore } from 'pinia'
import axios from 'axios'
import type { RegisterFormData } from '~/shared/classes/RegisterFormData'
import type { LogInData } from '~/shared/classes/LogInData'
import type { User } from '~/shared/classes/User'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        loginUserData: {} as LogInData,
        user: null as User | null,
        hydrated: false,
    }),
    getters: {
        isLoggedIn: state => !!state.user,
    },
    actions: {
        async registerUser(RegisterFormData: RegisterFormData) {
            try {
                const { data } = await axios.post(`/api/auth/register`, RegisterFormData)
                if (data.success === false) {
                    throw new Error(data.error)
                }
            } catch (error) {
                throw error
            }
        },
        async loginUser(loginData: LogInData) {
            try {
                const { data } = await axios.post(`/api/auth/login`, loginData)
                if (data.success === false) {
                    throw new Error(data.error)
                }
                this.user = data.user
            } catch (error) {
                throw error
            }
        },
        async logoutUser() {
            try {
                await axios.post(`/api/auth/logout`)
                this.user = null
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
