import { defineStore } from 'pinia'
import axios from 'axios'
import type { User } from '~/shared/classes/User'
import { useAuthStore } from './AuthStore'
import type { EditUserData } from '~/shared/classes/EditUserData'
import type { Order } from '~/shared/classes/Order'
import { Review } from '~/shared/classes/Review'
import type { ReviewData } from '~/shared/classes/ReviewData'
import { useReviewStore } from './ReviewStore'

export const useUserStore = defineStore('user', {
    state: () => ({
        user: null as User | null,
        orderHistory: [] as Order[],
        reviewHistory: [] as Review[],
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
        async fetchUserPurchaseHistory() {
            try {
                const authStore = useAuthStore()
                await authStore.getMe()
                if (!authStore.user) return

                const { data } = await axios.get('/api/user/history')

                this.orderHistory = data
            } catch (error) {
                throw error
            }
        },
        async fetchUserReviewHistory() {
            try {
                const authStore = useAuthStore()
                await authStore.getMe()
                if (!authStore.user) return

                const { data } = await axios.get('/api/reviews/user')

                this.reviewHistory = data.map((review: any) => new Review(review))
            } catch (error) {
                throw error
            }
        },
        async editUserReview(reviewId: string, reviewData: ReviewData) {
            try {
                const authStore = useAuthStore()
                await authStore.getMe()
                if (!authStore.user) return

                const { data } = await axios.put(`/api/reviews/edit/${reviewId}`, reviewData)

                this.reviewHistory = this.reviewHistory.map(review =>
                    review.id === reviewId ? new Review(data) : review
                )
            } catch (error) {
                throw error
            }
        },
        async deleteUserReview(reviewId: string) {
            try {
                const reviewStore = useReviewStore()
                const authStore = useAuthStore()
                await authStore.getMe()
                if (!authStore.user) return

                await axios.delete(`/api/reviews/delete/${reviewId}`)

                this.reviewHistory = this.reviewHistory.filter(item => item.id !== reviewId)

                reviewStore.eligibility.hasReviewed = false
                reviewStore.eligibility.canReview = true
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
