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
import { useNotification } from '~/composables/useNotification'
import { useCartStore } from '~/stores/CartStore'

const { productId } = defineProps<{
    productId: number
}>()

const { showNotification } = useNotification()
const cartStore = useCartStore()

const addToCart = async () => {
    try {
        await cartStore.addToCart(productId, 1)
        showNotification('success', 'Proizvod dodat u korpu!', 'Ovaj proizvod je uspešno dodat u korpu.', 4000)
    } catch (error) {
        showNotification(
            'error',
            'Greška pri dodavanju u korpu!',
            'Došlo je do problema pri dodavanju proizvoda u korpu.'
        )
    }
}
</script>
