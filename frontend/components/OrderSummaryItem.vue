<template>
    <tr class="border-y border-gray-200 text-sm sm:text-base">
        <td class="py-4">
            <div class="flex items-center gap-4">
                <a :href="`/proizvod/${cartItem.product.id}`" class="flex items-center w-10 h-10 shrink-0">
                    <img
                        class="h-auto w-full max-h-full"
                        :src="cartItem.product.thumbnail"
                        :alt="cartItem.product.name" />
                </a>
                <a :href="`/proizvod/${cartItem.product.id}`">
                    <p class="hover:underline max-w-md line-clamp-1">
                        {{ cartItem.product.name }}
                    </p>
                </a>
            </div>
        </td>

        <td class="p-4 font-normal text-gray-800">x{{ cartItem.quantity }}</td>

        <td class="p-4 text-right font-semibold text-gray-800">
            {{ formattedPrice }}
            <span class="text-sm">RSD</span>
        </td>
    </tr>
</template>

<script setup lang="ts">
import type { CartItemDTO } from '~/shared/types/CartDTO'

const { cartItem } = defineProps<{
    cartItem: CartItemDTO
}>()

const price = cartItem.product?.discountPrice || cartItem.product!.price

const formattedPrice = computed(() => formatPrice(price * cartItem.quantity))
</script>
