<template>
    <div>
        <div class="rounded-lg border border-gray-200 bg-white px-5 py-4 m-1 shadow-md">
            <div class="mb-8 h-56 w-full">
                <a :href="`/proizvod/${product.id}`">
                    <NuxtImg class="mx-auto h-full object-cover" :src="product.thumbnail" :alt="product.name" />
                </a>
            </div>

            <div class="flex items-center justify-between gap-1">
                <a
                    :href="`/proizvod/${product.id}`"
                    class="text-lg font-semibold ms-0.5 pb-0.5 leading-tight text-gray-900 hover:underline"
                    :title="isOverflowing ? product.name : ''">
                    <span ref="productName" class="line-clamp-1 text-ellipsis overflow-hidden">
                        {{ truncateName(product.name) }}
                    </span>
                </a>
                <button
                    :id="`tooltipAddToFavoritesButton-${product.id}`"
                    type="button"
                    class="rounded-lg m-1 p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900">
                    <HeartOutlineIcon class="size-6" />
                </button>
            </div>

            <StarRating :rating="product.ratings" class="mt-1" />

            <div class="mt-3 flex items-center text-gray-600 gap-1.5">
                <TruckDeliveryIcon class="size-5" />
                <p class="text-sm font-medium">Brza dostava</p>
            </div>

            <div class="flex items-center justify-between mt-3">
                <ProductPrice :discount-price="product.discountPrice" :price="product.price" />

                <button
                    type="button"
                    class="inline-flex self-end rounded-lg p-2.5 text-gray-100 bg-primary-light hover:bg-rose-800 active:bg-primary"
                    aria-label="Dodaj u korpu">
                    <AddToCartIcon class="size-6" />
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useClamping, truncateName } from '~/composables/useClamping'
import HeartOutlineIcon from '~/components/icons/HeartOutlineIcon.vue'
import AddToCartIcon from '~/components/icons/AddToCartIcon.vue'
import TruckDeliveryIcon from './icons/TruckDeliveryIcon.vue'
import type { ProductCardDTO } from '~/shared/types/ProductCardDTO'

const { product } = defineProps<{
    product: ProductCardDTO
}>()

const { element: productName, isOverflowing } = useClamping()
</script>
