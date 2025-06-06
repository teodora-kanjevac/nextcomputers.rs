import { defineStore } from 'pinia'
import axios from 'axios'
import { useAuthStore } from './AuthStore'
import { Review } from '~/shared/classes/Review'
import type { ReviewData } from '~/shared/classes/ReviewData'
import { ReviewProduct } from '~/shared/classes/ReviewProduct'
import { ReviewSuggestion } from '~/shared/classes/ReviewSuggestion'
import { useUserStore } from './UserStore'

export const useReviewStore = defineStore('review', {
    state: () => ({
        review: {} as ReviewProduct,
        reviews: [] as ReviewProduct[],
        reviewSuggestions: [] as ReviewSuggestion[],
        eligibility: {
            hasPurchased: false,
            hasReviewed: false,
            hasValidStatus: false,
            canReview: false,
        },
    }),
    actions: {
        async fetchReviewsForProduct(productId: number) {
            try {
                const { data } = await axios.get(`/api/reviews/product/${productId}`)

                this.reviews = data.map((review: any) => new ReviewProduct(review))
            } catch (error) {
                throw error
            }
        },
        async writeAReview(productId: number, reviewData: ReviewData) {
            try {
                const authStore = useAuthStore()
                const userStore = useUserStore()
                if (!authStore.isLoggedIn) return

                const { data } = await axios.post(`/api/reviews/leave-review/${productId}`, reviewData)

                this.review = new Review(data)
                this.reviews.push(this.review)
                this.reviewSuggestions = this.reviewSuggestions.filter(item => item.product.id !== productId)

                userStore.userStatistics.reviews += 1
                this.eligibility.hasReviewed = true
                this.eligibility.canReview = false
            } catch (error) {
                throw error
            }
        },
        async getReviewStatus(productId: number) {
            try {
                const authStore = useAuthStore()
                if (!authStore.isLoggedIn) return

                const { data } = await axios.get(`/api/reviews/status/${productId}`)

                this.eligibility = data
            } catch (error) {
                throw error
            }
        },
        async getReviewSuggestions() {
            try {
                const authStore = useAuthStore()
                if (!authStore.isLoggedIn) return

                const { data } = await axios.get('/api/reviews/suggestions')

                this.reviewSuggestions = data.map((suggestion: any) => new ReviewSuggestion(suggestion))
            } catch (error) {
                throw error
            }
        },
    },
})
