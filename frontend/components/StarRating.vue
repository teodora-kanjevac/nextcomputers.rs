<template>
    <div class="flex items-center gap-2">
        <div class="flex items-center">
            <Star v-for="index in 5" :size="size" :key="index" :filled="index <= filledStars" :half="index === halfStar" />
        </div>
        <p class="text-sm font-medium text-gray-900">{{ roundDecimal(averageRating) }}</p>
        <p class="text-sm font-medium text-gray-600">({{ rating.totalReviews }})</p>
    </div>
</template>

<script setup lang="ts">
import { roundDecimal } from '~/composables/utils'
import { Rating } from '~/shared/classes/Rating'
import type { RatingDTO } from '~/shared/types/RatingDTO'

const { rating } = defineProps<{
    rating: RatingDTO
    size: number
}>()

const averageRating = new Rating(rating).getAverageRating()

const filledStars = averageRating % 1 >= 0.79 ? Math.ceil(averageRating) : Math.floor(averageRating)
const halfStar = averageRating % 1 >= 0.29 && averageRating % 1 <= 0.79 ? Math.ceil(averageRating) : 0
</script>
