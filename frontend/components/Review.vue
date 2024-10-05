<template>
    <div class="gap-3 py-6 sm:flex sm:items-start">
        <div class="shrink-0 space-y-2 sm:w-48 md:w-72">
            <div class="flex items-center">
                <UserStarRating :rating="review.rating" class="-ms-0.5" />
            </div>

            <div class="space-y-0.5">
                <p class="text-base font-semibold text-gray-900">
                    {{ review.name }}
                </p>
                <p class="text-sm font-normal text-gray-500">
                    {{ review.date }}
                </p>
            </div>
        </div>

        <div class="mt-5 min-w-0 space-y-4">
            <p class="text-base font-normal text-gray-700">
                {{ review.comment }}
            </p>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    review: Object,
})
</script>
