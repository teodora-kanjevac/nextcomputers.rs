import { defineStore } from 'pinia'
import axios from 'axios'
import type { User } from '~/shared/classes/User'
import { useAuthStore } from './AuthStore'
import type { EditUserData } from '~/shared/classes/EditUserData'

export const useUserStore = defineStore('user', {
    state: () => ({
        user: null as User | null,
    }),
    actions: {
        async fetchUserFullName() {
            try {
                const authStore = useAuthStore()
                await authStore.getMe()
                if (!authStore.user) return
                const { data } = await axios.get('/api/user/fullname')
                this.user = data
            } catch (error) {
                throw error
            }
        },
        async fetchUserInfo() {
            try {
                const authStore = useAuthStore()
                await authStore.getMe()
                if (!authStore.user) return
                const { data } = await axios.get('/api/user/info')
                this.user = data
            } catch (error) {
                throw error
            }
        },
        async editUserData(editUserData: EditUserData) {
            try {
                const authStore = useAuthStore()
                await authStore.getMe()
                if (!authStore.user) return
                const { data } = await axios.put('/api/user/edit', {
                    firstName: editUserData.firstName,
                    lastName: editUserData.lastName,
                    phone: editUserData.phone,
                    address: editUserData.address,
                    city: editUserData.city,
                    zipcode: editUserData.zipcode,
                })
                this.user = data
            } catch (error) {
                throw error
            }
        },
    },
})
