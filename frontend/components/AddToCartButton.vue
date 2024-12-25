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

const toast = useToast()
const cartStore = useCartStore()

const addToCart = async () => {
    try {
        await cartStore.addToCart(productId, 1)
        toast.add({
            severity: 'success',
            summary: 'Proizvod dodat u korpu!',
            detail: 'Ovaj proizvod je uspešno dodat u korpu.',
            life: 4000,
        })
    } catch (error) {
        toast.add({
            severity: 'error',
            summary: 'Greška pri dodavanju u korpu!',
            detail: 'Došlo je do problema pri dodavanju proizvoda u korpu.',
            life: 5000,
        })
    }
}
</script>
