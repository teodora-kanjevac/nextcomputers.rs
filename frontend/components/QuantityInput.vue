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
                    data-input-counter-max="99"
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

const { cartItem } = defineProps<{ cartItem: CartItemDTO }>()
const cartStore = useCartStore()

const constrainQuantity = (quantity: number) => Math.min(99, Math.max(1, quantity))

const isMinQuantity = computed(() => cartItem.quantity <= 1)
const isMaxQuantity = computed(() => cartItem.quantity >= 99)

const changeQuantity = async (count: number) => {
    const newQuantity = constrainQuantity(cartItem.quantity + count)
    if (newQuantity !== cartItem.quantity) {
        cartItem.quantity = newQuantity
        await cartStore.updateQuantity(cartItem.id, newQuantity)
    }
}

const onInputChange = (event: Event) => {
    const input = event.target as HTMLInputElement
    let newQuantity = parseInt(input.value, 10)

    if (isNaN(newQuantity)) {
        input.value = cartItem.quantity.toString()
        return
    }

    newQuantity = constrainQuantity(newQuantity)
    cartItem.quantity = newQuantity
    cartStore.updateQuantity(cartItem.id, newQuantity)
}
</script>

<style>
.no-focus-ring:focus {
    outline: none;
    box-shadow: none;
}
</style>
