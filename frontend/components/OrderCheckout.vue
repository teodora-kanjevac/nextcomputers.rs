<template>
    <div class="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
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

        <a
            href="#"
            class="flex w-full items-center justify-center rounded-lg bg-primary-light py-2.5 text-sm font-medium text-white active:bg-primary">
            Nastavite ka plaćanju
        </a>

        <div class="flex items-center justify-center gap-2">
            <span class="text-sm font-normal text-gray-500">ili</span>
            <a
                href="/"
                class="inline-flex items-center gap-1 text-sm font-medium text-primary-light underline hover:no-underline">
                Nastavite sa kupovinom
                <ArrowRightIcon class="size-4 mt-0.5" />
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">
import ArrowRightIcon from './icons/ArrowRightIcon.vue'
import { useCartStore } from '~/stores/CartStore'
import { formatPrice } from '~/composables/utils'

const cartStore = useCartStore()

const totalProductPrice = computed(() => {
    return cartStore.cart.cartItems.reduce((sum, item) => {
        return sum + item.product.price * item.quantity
    }, 0)
})

const discountPrice = computed(() => {
    return cartStore.cart.cartItems.reduce((sum, item) => {
        const product = item.product
        const discount = product.discountPrice ? (product.price - product.discountPrice) * item.quantity : 0
        return sum + discount
    }, 0)
})

const shippingPrice = computed(() => {
    return totalProductPrice.value - discountPrice.value > 10000 ? 0 : 490
})

const totalPrice = computed(() => {
    return totalProductPrice.value + shippingPrice.value - discountPrice.value
})

const formattedPrices = computed(() => ({
    totalProductPrice: formatPrice(totalProductPrice.value),
    discountPrice: formatPrice(discountPrice.value),
    shippingPrice: formatPrice(shippingPrice.value),
    totalPrice: formatPrice(totalPrice.value),
}))
</script>
