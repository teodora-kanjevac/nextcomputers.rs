<template>
    <div>
        <section class="py-3">
            <div class="mx-auto max-w-screen-xl px-4 mb-10">
                <div class="lg:flex lg:items-start lg:gap-8">
                    <div class="min-w-0 flex-1 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-8 mb-5">
                        <div>
                            <p class="font-semibold text-xl lg:text-2xl ps-0.5 pb-7 sm:pb-10">Pregled narudžbine</p>
                            <div>
                                <table class="w-full text-left font-medium text-gray-800">
                                    <template v-for="cartItem in cartItems">
                                        <OrderSummaryItem :cartItem="cartItem" />
                                    </template>
                                </table>
                            </div>
                            <div class="my-12">
                                <h4 class="text-lg font-semibold text-gray-800 border-b border-gray-100 pb-2">
                                    Informacije o isporuci
                                </h4>
                                <div class="mt-6 text-base font-medium text-gray-800 grid grid-cols-2 md:grid-cols-3 gap-y-3">
                                    <template v-for="item in userDetails">
                                        <span>{{ item.label }}:</span>
                                        <span class="md:col-span-2 text-gray-500">{{ item.value }}</span>
                                    </template>
                                </div>
                            </div>
                            <div class="mt-12 mb-3">
                                <h4 class="text-lg font-semibold text-gray-800 border-b border-gray-100 pb-2">
                                    Način plaćanja
                                </h4>
                                <div class="mt-6 text-base font-medium text-gray-800">
                                    <li class="ps-2">{{ paymentMethod }}</li>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        class="w-full space-y-6 lg:max-w-xs xl:max-w-md rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
                        <CheckoutPrice :selectedPaymentMethod="checkoutStore.paymentMethod" />

                        <div class="space-y-3">
                            <button
                                type="submit"
                                class="flex w-full items-center justify-center rounded-lg bg-primary-light px-5 py-2.5 text-sm font-medium text-white active:bg-primary">
                                Pošalji narudžbinu
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import type { CartItemDTO } from '~/shared/types/CartDTO'
import { useCartStore } from '~/stores/CartStore'
import { useCheckoutStore } from '~/stores/CheckoutStore'

const cartStore = useCartStore()
const checkoutStore = useCheckoutStore()
const cartItems = computed<CartItemDTO[]>(() => cartStore.cart.cartItems)

const userDetails = computed(() => [
    { label: 'Ime i prezime', value: checkoutStore.form.fullname },
    { label: 'Email adresa', value: checkoutStore.form.email },
    { label: 'Broj telefona', value: checkoutStore.form.phone },
    { label: 'Adresa dostave', value: checkoutStore.form.address },
    { label: 'Grad', value: checkoutStore.form.city },
    { label: 'Poštanski broj', value: checkoutStore.form.zipcode },
])

const paymentMethod = computed(() => {
    switch (checkoutStore.paymentMethod) {
        case 'advance':
            return 'Uplatom na račun'
        case 'cash':
            return 'Plaćanje gotovinom pri pouzeću'
        default:
            return 'Nije izabran način plaćanja'
    }
})
</script>
