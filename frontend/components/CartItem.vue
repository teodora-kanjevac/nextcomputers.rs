<template>
    <div class="rounded-lg border border-gray-200 bg-white px-4 py-5 shadow-sm md:px-6">
        <div class="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
            <a :href="`/proizvod/${cartItem.product.id}`" class="shrink-0 md:order-1">
                <img class="size-24" :src="cartItem.product.thumbnail" :alt="cartItem.product.name" />
            </a>

            <div class="w-full min-w-0 flex-1 space-y-3 md:order-2 md:max-w-md">
                <a
                    :href="`/proizvod/${cartItem.product.id}`"
                    class="text-base font-medium text-gray-900 hover:underline">
                    {{ cartItem.product.name }}
                </a>
                <div class="flex items-center">
                    <button
                        type="button"
                        @click="removeItem"
                        class="inline-flex items-center text-sm font-medium text-red-600 hover:underline">
                        <TrashCanIcon class="size-5 me-1 mb-0.5" />
                        Ukloni proizvod
                    </button>
                </div>
            </div>
            <div class="flex items-center justify-between gap-7 md:order-3 md:justify-end">
                <QuantityInput :cart-item="cartItem" />

                <div class="text-end md:order-4">
                    <p class="text-xl font-bold leading-tight sm:w-36 text-gray-900 break-words">
                        {{ formattedPrice }}
                        <span class="text-base">RSD</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import TrashCanIcon from './icons/TrashCanIcon.vue'
import type { CartItemDTO } from '~/shared/types/CartDTO'
import { formatPrice } from '~/composables/utils'
import { useCartStore } from '~/stores/CartStore'

const { cartItem } = defineProps<{
    cartItem: CartItemDTO
}>()

const cartStore = useCartStore()
const formattedPrice = computed(() => formatPrice(cartItem.product?.discountPrice || cartItem.product!.price))

const removeItem = () => {
    cartStore.removeFromCart(cartItem.id)
}
</script>
