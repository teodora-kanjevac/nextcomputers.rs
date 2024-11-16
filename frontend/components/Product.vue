<template>
    <div>
        <div class="flex flex-col flex-grow h-full rounded-lg border border-gray-200 bg-white py-4 px-5 shadow-md">
            <div class="h-40 w-full">
                <NuxtLink :to="`/proizvod/${product.id}`">
                    <NuxtImg class="mx-auto h-full" :src="product.thumbnail" :alt="product.name" />
                </NuxtLink>
            </div>
            <div class="pt-9">
                <div class="flex items-center justify-between gap-1">
                    <NuxtLink
                        :to="`/proizvod/${product.id}`"
                        class="text-base font-semibold ms-1 leading-tight line-clamp-2 text-gray-900 hover:underline">
                        {{ product.name }}
                    </NuxtLink>
                    <AddToFavoritesTooltip :productId="product.id" />
                </div>
            </div>

            <StarRating :rating="product.ratings" class="mt-2" />

            <div class="mt-3 flex items-center text-gray-600 gap-1.5">
                <TruckDeliveryIcon class="size-5" />
                <p class="text-sm font-medium">Brza dostava</p>
            </div>

            <div class="flex items-center justify-between mt-2">
                <div class="flex-col">
                    <div :class="{ invisible: !product.discountPrice || product.discountPrice === 0 }">
                        <span class="rounded px-2 py-1 text-xs font-semibold bg-red-100 text-red-800">
                            Čak do 15% popusta
                        </span>
                        <p class="text-base line-through font-semibold leading-tight text-gray-500 mt-3 ms-0.5">
                            {{ formatPrice(product.price) }} RSD
                        </p>
                    </div>
                    <p class="text-2xl font-bold leading-tight text-gray-900">
                        {{
                            product.discountPrice && product.discountPrice > 0
                                ? formatPrice(product.discountPrice)
                                : formatPrice(product.price)
                        }}
                        <span class="text-lg">RSD</span>
                    </p>
                </div>
                <button
                    type="button"
                    class="inline-flex self-end rounded-lg p-2.5 text-gray-100 bg-primary-light hover:bg-rose-800 active:bg-primary">
                    <AddToCartIcon class="size-6" />
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { formatPrice } from '~/composables/utils'
import AddToCartIcon from '~/components/icons/AddToCartIcon.vue'
import TruckDeliveryIcon from './icons/TruckDeliveryIcon.vue'
import type { ProductCardDTO } from '~/shared/types/ProductCardDTO'

defineProps<{
    product: ProductCardDTO
}>()
</script>
