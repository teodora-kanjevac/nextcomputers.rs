<template>
    <div>
        <div class="flex-col">
            <div :class="{ invisible: !isDiscounted }">
                <span class="rounded px-2 py-1 text-xs font-semibold bg-red-100 text-red-800">
                    {{ discountPercentage }}% POPUSTA
                </span>
                <p class="text-base line-through font-semibold leading-tight text-gray-500 mt-2 ms-0.5">
                    {{ formatPrice(price) }} RSD
                </p>
            </div>
            <p class="text-2xl font-bold leading-tight text-gray-900">
                {{ formattedPrice }}
                <span class="text-lg">RSD</span>
            </p>
        </div>
    </div>
</template>
<script setup lang="ts">
import { formatPrice } from '~/composables/utils'

const { discountPrice, price } = defineProps<{
    discountPrice: number | undefined
    discountPercentage: number | undefined
    price: number
}>()

const formattedPrice = computed(() => formatPrice(discountPrice || price))
const isDiscounted = computed(() => discountPrice && discountPrice > 0)
</script>
