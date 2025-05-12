<template>
    <div>
        <div class="flex flex-col flex-grow h-full rounded-lg border border-gray-200 bg-white py-4 px-5 shadow-md">
            <div class="h-40 w-full">
                <NuxtLink :to="`/proizvod/${product.id}`">
                    <NuxtImg
                        class="mx-auto h-full object-cover"
                        :src="product.thumbnail"
                        :alt="product.name"
                        loading="lazy" />
                </NuxtLink>
            </div>
            <div class="pt-9">
                <div class="flex items-center justify-between gap-1">
                    <NuxtLink
                        :to="`/proizvod/${product.id}`"
                        class="text-base font-semibold ms-1 leading-tight text-gray-900 hover:underline"
                        :title="isOverflowing ? product.name : ''">
                        <span ref="productName" class="line-clamp-2 text-ellipsis overflow-hidden">
                            {{ truncateName(product.name) }}
                        </span>
                    </NuxtLink>
                    <AddToFavoritesTooltip :productId="product.id" />
                </div>
            </div>

            <StarRating :rating="product.ratings" class="mt-2" />

            <div class="mt-3 flex items-center text-gray-600 gap-1.5">
                <TruckDeliveryIcon class="size-5" />
                <p class="text-sm font-medium">Brza dostava</p>
            </div>

            <div class="flex items-center justify-between mt-3">
                <ProductPrice
                    :price="product.price"
                    :discountPrice="product.discountPrice"
                    :discount-percentage="product.discountPercentage" />

                <AddToCartButton :product-id="product.id" :disabled="!product.available" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useClamping, truncateName } from '~/composables/useClamping'
import TruckDeliveryIcon from './icons/TruckDeliveryIcon.vue'
import type { ProductCardDTO } from '~/shared/types/ProductCardDTO'
import { NuxtLink } from '#components';

const { product } = defineProps<{
    product: ProductCardDTO
}>()

const { element: productName, isOverflowing } = useClamping()
</script>
