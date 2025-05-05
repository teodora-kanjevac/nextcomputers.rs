<template>
    <p class="text-lg font-semibold text-gray-900">Pregled narudžbine</p>
    <div class="space-y-4">
        <div class="space-y-2">
            <dl class="flex items-center justify-between gap-4">
                <dt class="text-base font-normal text-gray-700">Cena proizvoda</dt>
                <dd class="text-base font-medium text-gray-900">
                    {{ formattedPrices.totalProductPrice }}
                    <span class="text-sm">RSD</span>
                </dd>
            </dl>

            <dl class="flex items-center justify-between gap-4">
                <dt class="text-base font-normal text-gray-700">Popust</dt>
                <dd class="text-base font-medium text-green-600">
                    - {{ formattedPrices.discountPrice }}
                    <span class="text-sm">RSD</span>
                </dd>
            </dl>

            <dl class="flex items-center justify-between gap-4">
                <dt class="text-base font-normal text-gray-700">Cena poštarine</dt>
                <dd class="text-base font-medium text-gray-900">
                    {{ formattedPrices.shippingPrice }}
                    <span class="text-sm">RSD</span>
                </dd>
            </dl>
        </div>

        <dl class="flex items-center justify-between gap-4 border-t border-gray-200 py-3">
            <dt class="text-base font-semibold text-gray-900">Ukupan iznos</dt>
            <dd class="text-base font-semibold text-gray-900">
                {{ formattedPrices.totalPrice }}
                <span class="text-sm">RSD</span>
            </dd>
        </dl>
    </div>
</template>

<script setup lang="ts">
import { useCartStore } from '~/stores/CartStore'
import { useFormStore } from '~/stores/FormStore'
import { calculateShippingPrice } from '~/composables/useCart'
import { formatPrice } from '~/composables/utils'

const { selectedPaymentMethod } = defineProps<{
    selectedPaymentMethod: string | undefined
}>()

const cartStore = useCartStore()
const formStore = useFormStore()

const totalProductPrice = computed(() => {
    return cartStore.cart.cartItems.reduce((sum, item) => {
        return sum + item.product.price * item.quantity
    }, 0)
})

const productDiscount = computed(() => {
    return cartStore.cart.cartItems.reduce((sum, item) => {
        const product = item.product
        const discount = product.discountPrice ? (product.price - product.discountPrice) * item.quantity : 0
        return sum + discount
    }, 0)
})

const paymentMethodDiscountAmount = computed(() => {
    const totalProductPriceWithDiscount = totalProductPrice.value - productDiscount.value
    return Math.ceil(
        totalProductPriceWithDiscount - totalProductPriceWithDiscount * formStore.checkout.meta.paymentMethodDiscount
    )
})

const totalDiscount = computed(() => {
    return productDiscount.value + paymentMethodDiscountAmount.value
})

const shippingPrice = computed(() => {
    return calculateShippingPrice(totalProductPrice.value - productDiscount.value)
})

const totalPrice = computed(() => {
    return totalProductPrice.value + shippingPrice.value - totalDiscount.value
})

formStore.checkout.meta.prices.productsPrice = totalProductPrice.value
formStore.checkout.meta.prices.discountPrice = totalDiscount.value
formStore.checkout.meta.prices.shippingPrice = shippingPrice.value
formStore.checkout.meta.prices.totalPrice = totalPrice.value

watch(
    () => selectedPaymentMethod,
    newVal => {
        if (newVal === 'advance') {
            formStore.checkout.meta.paymentMethodDiscount = 0.99
        } else {
            formStore.checkout.meta.paymentMethodDiscount = 1
        }
    }
)

const formattedPrices = computed(() => ({
    totalProductPrice: formatPrice(totalProductPrice.value),
    discountPrice: formatPrice(totalDiscount.value),
    shippingPrice: formatPrice(shippingPrice.value),
    totalPrice: formatPrice(totalPrice.value),
}))
</script>
