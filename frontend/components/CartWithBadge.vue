<template>
    <div class="relative">
        <CartIcon class="mb-0.5" />
        <div
            v-if="badgeCount > 0"
            class="absolute inline-flex items-center justify-center font-semibold text-white bg-primary-light rounded-full"
            :class="{
                'text-[10px] size-4 -top-1.5 -right-1.5': isScrolled,
                'md:size-5 md:text-xs md:-top-2 md:-right-2 text-[10px] size-4 -top-1.5 -right-1.5': !isScrolled,
            }">
            {{ badgeCount }}
        </div>
    </div>
</template>

<script setup lang="ts">
import CartIcon from '~/components/icons/CartIcon.vue'
import { useCartStore } from '~/stores/CartStore'

const cartStore = useCartStore()
const { isScrolled } = useScroll()

const badgeCount = computed(() => cartStore.cart.cartItems.reduce((total, item) => total + item.quantity, 0))
</script>
