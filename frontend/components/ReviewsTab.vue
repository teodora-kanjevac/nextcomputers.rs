<template>
    <div>
        <section class="p-4 sm:p-8">
            <div class="mx-auto max-w-screen-xl">
                <div class="sm:flex items-center gap-3">
                    <h2 class="text-2xl font-semibold text-gray-900">
                        Recenzije
                    </h2>
                    <StarRating
                        :rating="averageRating"
                        :total-reviews="totalReviews"
                        class="pt-2 -ms-1 sm:ms-0 sm:pt-0 sm:pb-1" />
                </div>

                <div class="my-6 gap-8 sm:flex sm:items-start md:my-8">
                    <div class="shrink-0 space-y-4">
                        <p
                            class="ms-0.5 text-2xl font-semibold leading-none text-gray-900">
                            {{ averageRating.toFixed(2) }} od 5
                        </p>

                        <button
                            type="button"
                            data-modal-target="createReview"
                            data-modal-toggle="createReview"
                            class="mb-2 me-2 flex items-center rounded-lg px-5 py-2.5 text-sm font-medium text-white bg-primary-light hover:bg-rose-800 active:bg-primary">
                            <PenIcon class="size-5 me-2 -ms-1" />
                            Napiši recenziju
                        </button>
                        <ReviewModal />
                    </div>

                    <div class="mt-6 min-w-0 flex-1 space-y-3 sm:mt-0">
                        <div
                            v-for="(rating, index) in ratings"
                            :key="index"
                            class="flex items-center gap-1.5">
                            <p
                                class="w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-900">
                                {{ rating.stars }}
                            </p>
                            <StarFilledIcon class="size-5 shrink-0" />
                            <div class="h-1.5 w-80 rounded-full bg-gray-200">
                                <div
                                    class="h-1.5 rounded-full bg-yellow-300"
                                    :style="{
                                        width:
                                            calculatePercentage(rating.count) +
                                            '%',
                                    }"></div>
                            </div>
                            <a
                                href="#"
                                class="w-8 shrink-0 ps-1 text-right text-sm font-medium leading-none hover:text-primary sm:w-auto sm:text-left">
                                {{ rating.count }}
                                <span class="hidden sm:inline">recenzije</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="mt-10 sm:mt-20 divide-y divide-gray-200">
                    <Review
                        v-for="(userReview, index) in visibleReviews"
                        :key="index"
                        :review="userReview" />
                </div>
                <div
                    class="mt-6 text-center"
                    v-if="numberOfVisibleReviews < userReviews.length">
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
import PenIcon from './icons/PenIcon.vue'
import { useRatings } from '~/composables/useRating'
import type { Rating } from '~/shared/types/rating'
import type { Review } from '~/shared/types/reviews'

const ratingsResponse: { totalReviews: number; ratings: Rating[] } = {
    totalReviews: 769,
    ratings: [
        { stars: 5, count: 239 },
        { stars: 4, count: 413 },
        { stars: 3, count: 53 },
        { stars: 2, count: 32 },
        { stars: 1, count: 32 },
    ],
}

const userReviews = ref<Review[]>([
    {
        rating: 4.8,
        name: 'Alice Johnson',
        date: 'September 25, 2024',
        comment:
            'Absolutely love this product! It exceeded my expectations and the customer service was fantastic.',
    },
    {
        rating: 3.7,
        name: 'Michael Brown',
        date: 'August 12, 2024',
        comment:
            'The product is good, but the delivery took longer than expected. Overall, happy with the purchase.',
    },
    {
        rating: 5.0,
        name: 'Samantha Lee',
        date: 'October 2, 2024',
        comment:
            'Perfect! Exactly what I was looking for. Would definitely recommend to anyone!',
    },
    {
        rating: 2.9,
        name: 'David Williams',
        date: 'July 30, 2024',
        comment:
            'The product has some issues with durability, and I had to return it. The return process was smooth though.',
    },
    {
        rating: 4.2,
        name: 'Emily Davis',
        date: 'September 18, 2024',
        comment:
            'Good quality overall. The design is sleek and fits well with my needs.',
    },
])

const { ratings, totalReviews } = ratingsResponse

const { averageRating, calculatePercentage } = useRatings(ratings, totalReviews)

const numberOfVisibleReviews = ref(4)
const visibleReviews = computed(() =>
    userReviews.value.slice(0, numberOfVisibleReviews.value)
)

const loadMoreReviews = () => {
    numberOfVisibleReviews.value += 4
}
</script>
