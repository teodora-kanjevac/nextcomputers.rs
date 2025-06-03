<template>
    <div>
        <section class="p-4 sm:p-8">
            <div class="mx-auto max-w-screen-xl">
                <div class="sm:flex items-center gap-3">
                    <h2 class="text-2xl font-semibold text-gray-900">Recenzije</h2>
                    <StarRating :size="6" :rating="rating" class="mt-1 -ms-1 sm:ms-0 sm:pt-0 sm:pb-1" />
                </div>
                <div class="py-6 gap-8 sm:flex sm:items-start md:py-8">
                    <div class="shrink-0">
                        <p class="ms-0.5 text-2xl font-semibold leading-none text-gray-900">
                            {{ averageRating.toFixed(2) }} od 5
                        </p>
                        <ReviewModal />
                    </div>
                    <div class="mt-8 min-w-0 flex-1 space-y-3 sm:mt-0 text-sm">
                        <div v-for="(star, index) in percentageForStars" :key="index" class="flex items-center gap-1.5">
                            <p class="w-2 shrink-0 text-start font-medium leading-none text-gray-900">
                                {{ star.star }}
                            </p>
                            <StarFilledIcon class="size-5 shrink-0" />
                            <ReviewProgressBar :star="star" />
                            <button
                                type="button"
                                @click.prevent="toggleRatingFilter(star.star)"
                                class="w-8 shrink-0 ps-1 text-right font-medium leading-none hover:text-primary sm:w-auto sm:text-left"
                                :class="{ 'text-primary': activeFilter === star.star }">
                                {{ star.amount }}
                                <span class="hidden sm:inline">{{ getReviewWord(star.amount) }}</span>
                            </button>
                        </div>
                    </div>
                </div>
                <hr class="my-5 mx-auto border-gray-200" />
                <div class="divide-y divide-gray-200">
                    <template v-if="filteredReviews.length > 0">
                        <Review v-for="userReview in paginatedReviews" :key="userReview.id" :review="userReview" />
                    </template>
                    <div class="mt-8 text-gray-600 text-center" v-else>
                        <p class="font-semibold py-5">Trenutno nema recenzija</p>
                        <p class="font-medium">Budite prvi koji će ostaviti recenziju!</p>
                    </div>
                </div>
                <div class="text-center" v-if="showLoadMore">
                    <button
                        type="button"
                        @click="loadMoreReviews"
                        class="mx-auto flex items-center text-gray-900 bg-white rounded-lg border-2 border-gray-200 hover:bg-gray-100 active:bg-gray-200 pl-4 pr-2 py-2.5 text-sm font-medium">
                        Prikaži više
                        <IndicatorDownIcon class="size-5 ms-0.5 mt-0.5" />
                    </button>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import StarFilledIcon from './icons/StarFilledIcon.vue'
import IndicatorDownIcon from './icons/IndicatorDownIcon.vue'
import { useRatings } from '~/composables/useRating'
import type { RatingDTO } from '~/shared/types/RatingDTO'
import type { ReviewProductDTO } from '~/shared/types/ReviewProductDTO'
import { Rating } from '~/shared/classes/Rating'
import { useReviewStore } from '~/stores/ReviewStore'
import { useAuthStore } from '~/stores/AuthStore'

const { rating } = defineProps<{
    rating: RatingDTO
}>()

const route = useRoute()
const reviewStore = useReviewStore()
const authStore = useAuthStore()

const activeFilter = ref<number | null>(null)
const pageCount = ref(0)
const reviewsPerPage = 5

const userReviews = computed<ReviewProductDTO[]>(() => reviewStore.reviews)

const filteredReviews = computed(() => {
    if (activeFilter.value === null) {
        return userReviews.value
    }
    return userReviews.value.filter(review => review.rating === activeFilter.value)
})

const numberOfVisibleReviews = computed(() =>
    Math.min(filteredReviews.value.length, reviewsPerPage * (pageCount.value + 1))
)

const paginatedReviews = computed(() => filteredReviews.value.slice(0, numberOfVisibleReviews.value))
const showLoadMore = computed(() => numberOfVisibleReviews.value < filteredReviews.value.length)

const averageRating = computed(() => new Rating(rating).getAverageRating())

const calculateStarPercentage = useRatings(rating.totalReviews)
const percentageForStars = computed(() => {
    return rating.starRatings.map(star => ({
        ...star,
        percentage: calculateStarPercentage(star.amount),
    }))
})

const toggleRatingFilter = (star: number) => {
    if (activeFilter.value === star) {
        activeFilter.value = null
    } else {
        activeFilter.value = star
    }
    pageCount.value = 0
}

const loadMoreReviews = () => {
    pageCount.value++
}

const getReviewWord = (num: number) => {
    const lastDigit = num % 10
    if (lastDigit >= 2 && lastDigit <= 4) {
        return 'recenzije'
    }
    return 'recenzija'
}

onMounted(async () => {
    await authStore.getMe()
    await reviewStore.getReviewStatus(parseInt(route.params.productId as string))
})
</script>
