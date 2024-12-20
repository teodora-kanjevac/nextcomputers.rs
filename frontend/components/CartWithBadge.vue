<template>
    <div class="relative">
        <CartIcon class="mb-0.5" />
        <div
            v-if="badgeCount > 0"
            class="absolute inline-flex items-center justify-center size-5 text-xs font-semibold text-white bg-primary-light rounded-full -top-2 -right-2">
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
