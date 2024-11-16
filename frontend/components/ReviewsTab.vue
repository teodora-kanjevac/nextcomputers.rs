<template>
    <div>
        <section class="p-4 sm:p-8">
            <div class="mx-auto max-w-screen-xl">
                <div class="sm:flex items-center gap-3">
                    <h2 class="text-2xl font-semibold text-gray-900">Recenzije</h2>
                    <StarRating :rating="rating" class="mt-2 -ms-1 sm:ms-0 sm:pt-0 sm:pb-1" />
                </div>

                <div class="my-6 gap-8 sm:flex sm:items-start md:my-8">
                    <div class="shrink-0 space-y-4">
                        <p class="ms-0.5 text-2xl font-semibold leading-none text-gray-900">
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

                    <div class="mt-8 min-w-0 flex-1 space-y-3 sm:mt-0">
                        <div v-for="(star, index) in rating.starRatings" :key="index" class="flex items-center gap-1.5">
                            <p class="w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-900">
                                {{ star.star }}
                            </p>
                            <StarFilledIcon class="size-5 shrink-0" />
                            <div class="h-1.5 w-80 rounded-full bg-gray-200">
                                <div
                                    class="h-1.5 rounded-full"
                                    :class="calculatePercentage(star.amount) > 0 ? 'bg-yellow-300' : 'bg-gray-200'"
                                    :style="{
                                        width:
                                            calculatePercentage(star.amount) > 0
                                                ? calculatePercentage(star.amount) + '%'
                                                : '0%',
                                    }"></div>
                            </div>

                            <a
                                href="#"
                                class="w-8 shrink-0 ps-1 text-right text-sm font-medium leading-none hover:text-primary sm:w-auto sm:text-left">
                                {{ star.amount }}
                                <span class="hidden sm:inline">recenzije</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="mt-8 sm:mt-16 divide-y divide-gray-200">
                    <Review v-if="visibleReviews.length > 0" v-for="(userReview, index) in visibleReviews" :key="index" :review="userReview" />
                    <div class="text-gray-600 text-center" v-else>
                        <p class="font-semibold py-5">Trenutno nema recenzija</p>
                        <p class="font-medium ">Budite prvi koji će ostaviti recenziju!</p>
                    </div>
                </div>
                <div class="text-center" v-if="numberOfVisibleReviews < userReviews.length">
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
import type { RatingDTO } from '~/shared/types/RatingDTO'
import type { ReviewDTO } from '~/shared/types/ReviewDTO'
import { Rating } from '~/shared/classes/Rating'

const props = defineProps<{
    rating: RatingDTO
    userReviews: ReviewDTO[]
}>()
const { rating, userReviews } = props

const averageRating = new Rating(rating).getAverageRating()

const calculatePercentage = useRatings(rating.totalReviews)

const numberOfVisibleReviews = ref(4)
const visibleReviews = computed(() => userReviews.slice(0, numberOfVisibleReviews.value))

const loadMoreReviews = () => {
    numberOfVisibleReviews.value += 4
}
</script>
