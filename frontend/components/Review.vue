<template>
    <div class="gap-3 py-6 sm:flex sm:items-start">
        <div class="shrink-0 space-y-1 sm:w-48 md:w-52">
            <div class="flex items-center">
                <UserStarRating :rating="review.rating" class="-ms-1" />
            </div>
            <div class="space-y-0.5">
                <p class="text-base font-semibold text-gray-900">
                    {{ review.name }}
                </p>
                <p class="text-sm font-medium text-gray-600">
                    {{ formatedDate }}
                </p>
            </div>
        </div>
        <div class="min-w-0 space-y-4 mt-5 sm:mt-0">
            <p class="text-base font-medium text-gray-800">
                {{ review.comment }}
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { ReviewDTO } from '~/shared/types/ReviewDTO'
import { Review } from '~/shared/classes/Review'

const { review } = defineProps<{
    review: ReviewDTO
}>()

const formatedDate = new Review(review).formatDate()
</script>
