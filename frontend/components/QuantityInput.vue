<template>
    <div>
        <form class="max-w-xs mx-auto">
            <div class="relative flex items-center max-w-[7rem]">
                <button
                    type="button"
                    :id="`decrement-button-${cartItem.product.id}`"
                    @click="changeQuantity(-1)"
                    :aria-label="`Dekrement ${cartItem.product.name}`"
                    :disabled="isMinQuantity"
                    class="bg-gray-200 hover:bg-gray-300 border border-gray-200 rounded-s-lg p-2 h-8">
                    <MinusIcon class="size-4" />
                </button>

                <input
                    type="text"
                    :id="`quantity-input-${cartItem.product.id}`"
                    data-input-counter
                    data-input-counter-min="1"
                    :data-input-counter-max="`${cartItem.product.stock}`"
                    class="bg-gray-100 border-x-0 border-gray-200 h-8 text-center text-gray-900 text-sm font-medium block w-full py-2.5 no-focus-ring focus:border-gray-200"
                    :value="cartItem.quantity"
                    @input="onInputChange"
                    required />

                <button
                    type="button"
                    :id="`increment-button-${cartItem.product.id}`"
                    @click="changeQuantity(1)"
                    :aria-label="`Inkrement ${cartItem.product.name}`"
                    :disabled="isMaxQuantity"
                    class="bg-gray-200 hover:bg-gray-300 border border-gray-200 rounded-e-lg p-2 h-8">
                    <PlusIcon class="size-4" />
                </button>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
import PlusIcon from '~/components/icons/PlusIcon.vue'
import MinusIcon from '~/components/icons/MinusIcon.vue'
import type { CartItemDTO } from '~/shared/types/CartDTO'
import { useCartStore } from '~/stores/CartStore'
import { useNotification } from '~/composables/useNotification'

const { cartItem } = defineProps<{ cartItem: CartItemDTO }>()
const { showNotification } = useNotification()
const cartStore = useCartStore()

const constrainQuantity = (quantity: number) => Math.min(cartItem.product.stock, Math.max(1, quantity))

const isMinQuantity = computed(() => cartItem.quantity <= 1)
const isMaxQuantity = computed(() => cartItem.quantity >= cartItem.product.stock)

const changeQuantity = async (count: number) => {
    const newQuantity = constrainQuantity(cartItem.quantity + count)
    if (newQuantity !== cartItem.quantity) {
        try {
            cartItem.quantity = newQuantity
            await cartStore.updateQuantity(cartItem.id, newQuantity)
        } catch (error: any) {
            showNotification(
                'error',
                'Greška pri ažuriranju količine!',
                'Došlo je do problema pri ažuriranju količine.'
            )
        }
    }
}

const onInputChange = async (event: Event) => {
    const input = event.target as HTMLInputElement
    let newQuantity = parseInt(input.value, 10)

    if (isNaN(newQuantity)) {
        input.value = cartItem.quantity.toString()
        return
    }

    newQuantity = constrainQuantity(newQuantity)
    if (newQuantity !== cartItem.quantity) {
        try {
            cartItem.quantity = newQuantity
            await cartStore.updateQuantity(cartItem.id, newQuantity)
        } catch (error: any) {
            if (error.response && error.response.data.error.includes('Insufficient stock')) {
                showNotification(
                    'warn',
                    'Nema dovoljno proizvoda na stanju!',
                    'Količina koju ste tražili nije dostupna.'
                )
            } else {
                showNotification(
                    'error',
                    'Greška pri ažuriranju količine!',
                    'Došlo je do problema pri ažuriranju količine.'
                )
            }
            input.value = cartItem.quantity.toString()
        }
    }
    input.value = newQuantity.toString()
}
</script>

<style>
.no-focus-ring:focus {
    outline: none;
    box-shadow: none;
}
</style>
