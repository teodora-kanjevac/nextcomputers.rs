<template>
    <div>
        <div class="flex flex-col flex-grow h-full rounded-lg border border-gray-200 bg-white py-4 px-5 shadow-md">
            <div class="h-40 w-full">
                <a :href="`/proizvod/${product.id}`">
                    <NuxtImg class="mx-auto h-full" :src="product.thumbnail" :alt="product.name" loading="lazy" />
                </a>
            </div>
            <div class="pt-9">
                <div class="flex items-center justify-between gap-1">
                    <a
                        :href="`/proizvod/${product.id}`"
                        class="text-base font-semibold ms-1 leading-tight text-gray-900 hover:underline"
                        :title="isOverflowing ? product.name : ''">
                        <span ref="productName" class="line-clamp-2">
                            {{ product.name }}
                        </span>
                    </a>
                    <AddToFavoritesTooltip :productId="product.id" />
                </div>
            </div>

            <StarRating :rating="product.ratings" class="mt-2" />

            <div class="mt-3 flex items-center text-gray-600 gap-1.5">
                <TruckDeliveryIcon class="size-5" />
                <p class="text-sm font-medium">Brza dostava</p>
            </div>

            <div class="flex items-center justify-between mt-3">
                <ProductPrice :discountPrice="product.discountPrice" :price="product.price" />

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
import { useClamping } from '~/composables/useClamping'
import AddToCartIcon from '~/components/icons/AddToCartIcon.vue'
import TruckDeliveryIcon from './icons/TruckDeliveryIcon.vue'
import type { ProductCardDTO } from '~/shared/types/ProductCardDTO'

const { product } = defineProps<{
    product: ProductCardDTO
}>()

const { element: productName, isOverflowing } = useClamping()
</script>
