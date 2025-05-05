<template>
    <div>
        <section class="py-8 md:py-16">
            <div class="mx-auto max-w-screen-xl px-5 2xl:px-0">
                <h2 class="font-semibold text-xl sm:text-2xl ps-0.5 pb-2 sm:pb-4 border-b-2 border-gray-200">
                    Vaša korpa
                </h2>

                <div class="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
                    <div class="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                        <div class="space-y-3">
                            <template v-for="cartItem in cartItems">
                                <CartItem :cart-item="cartItem" />
                            </template>
                        </div>
                        <div class="flex justify-end">
                            <button
                                @click="emptyCart"
                                class="flex me-0.5 my-6 px-5 py-2 text-gray-800 bg-gray-200 hover:bg-gray-300 border border-gray-300 font-medium text-sm rounded-lg">
                                <TrashCanIcon class="size-5 me-1" />
                                Isprazni korpu
                            </button>
                        </div>
                        <hr class="border-b border-gray-200" />
                        <div class="hidden xl:mt-14 xl:block">
                            <h3 class="font-semibold text-xl sm:text-2xl ps-0.5 pb-4 sm:pb-6">
                                Možda ste zainteresovani i za
                            </h3>
                            <div>
                                <section class="splide">
                                    <Splide :options="options">
                                        <template v-for="chunk in productChunks" :key="chunk[0]?.id">
                                            <SplideSlide>
                                                <SliderProductCardGrid
                                                    class="grid gap-3 grid-cols-3 pb-3"
                                                    :products="chunk" />
                                            </SplideSlide>
                                        </template>
                                    </Splide>
                                </section>
                            </div>
                        </div>
                    </div>

                    <div class="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
                        <div class="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
                            <CheckoutPrice :selectedPaymentMethod="selectedPaymentMethod" />

                            <button
                                type="submit"
                                class="flex w-full items-center justify-center rounded-md bg-primary-light hover:bg-rose-800 transition duration-75 px-5 py-2.5 text-sm font-medium text-white active:bg-primary"
                                @click.prevent="goToNextStep">
                                Nastavi dalje
                            </button>

                            <div class="flex items-center justify-center gap-2">
                                <span class="text-sm font-normal text-gray-500">ili</span>
                                <a
                                    href="/"
                                    class="inline-flex items-center gap-1 text-sm font-medium text-primary-light underline hover:no-underline">
                                    Nastavi sa kupovinom
                                    <ArrowRightIcon class="size-4 mt-0.5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import TrashCanIcon from '~/components/icons/TrashCanIcon.vue'
import ArrowRightIcon from '~/components/icons/ArrowRightIcon.vue'
import type { CartItemDTO } from '~/shared/types/CartDTO'
import { useCartStore } from '~/stores/CartStore'
import { useCheckoutStore } from '~/stores/CheckoutStore'
import { useProductStore } from '~/stores/ProductStore'
import type { ProductCardDTO } from '~/shared/types/ProductCardDTO'
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import 'assets/css/splide.css'
import { updateProductChunks, productChunks } from '~/composables/useSliderChunks'

const emit = defineEmits(['nextStep'])

function goToNextStep() {
    emit('nextStep')
}

const productStore = useProductStore()
const productCards = computed<ProductCardDTO[]>(() => productStore.showcaseProductCards)

const cartStore = useCartStore()
const cartItems = computed<CartItemDTO[]>(() => cartStore.cart.cartItems)

const emptyCart = () => {
    cartStore.clearCart()
}
const checkoutStore = useCheckoutStore()
const selectedPaymentMethod = computed(() => checkoutStore.paymentMethod)

onMounted(() => {
    updateProductChunks(productCards.value)
    watch(productCards, updateProductChunks, { immediate: true })
    productStore.fetchShowcaseProducts()
})

const options = {
    type: 'loop',
    gap: '0.75em',
    speed: 3000,
    autoplay: true,
    interval: 8000,
    pagination: false,
    arrows: false,
}
</script>
