<template>
    <button
        type="button"
        @click="addToCart"
        class="inline-flex self-end rounded-lg p-2.5 text-gray-100 bg-primary-light hover:bg-rose-800 active:bg-primary"
        aria-label="Dodaj u korpu">
        <AddToCartIcon class="size-6" />
    </button>
</template>

<script setup lang="ts">
import AddToCartIcon from '~/components/icons/AddToCartIcon.vue'
import { useCartStore } from '~/stores/CartStore'

const { productId } = defineProps<{
    productId: number
}>()

const cartStore = useCartStore()

const addToCart = async () => {
    await cartStore.addToCart(productId, 1)
}
</script>
