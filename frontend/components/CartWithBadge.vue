<template>
    <div class="relative">
        <CartIcon class="mb-0.5" />
        <div
            v-if="badgeCount > 0"
            class="absolute inline-flex items-center justify-center size-4 md:size-5 md:text-xs text-[10px] font-semibold text-white bg-primary-light rounded-full md:-top-2 md:-right-2 -top-1.5 -right-1.5">
            {{ badgeCount }}
        </div>
    </div>
</template>

<script setup lang="ts">
import CartIcon from '~/components/icons/CartIcon.vue'
import { useCartStore } from '~/stores/CartStore'

const cartStore = useCartStore()
const badgeCount = computed(() =>
    cartStore.cart.cartItems.reduce((total, item) => total + item.quantity, 0)
)
</script>
