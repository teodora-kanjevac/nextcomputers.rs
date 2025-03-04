<template>
    <div>
        <section class="py-3">
            <div class="mx-auto max-w-screen-xl px-4 min-h-screen mb-8">
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
                                    Informacije o dostavi
                                </h4>
                                <div
                                    class="mt-6 text-base font-medium text-gray-800 grid grid-cols-2 md:grid-cols-3 gap-y-3">
                                    <template v-for="item in userDetails">
                                        <span>{{ item.label }}:</span>
                                        <span class="md:col-span-2 text-gray-500 break-all">{{ item.value }}</span>
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
                                @click="handleOrder"
                                :disabled="sharedStore.loading"
                                class="flex w-full items-center justify-center rounded-lg bg-primary-light px-5 py-2.5 text-sm font-medium text-white active:bg-primary">
                                <Spinner v-if="sharedStore.loading" class="size-5" />
                                <span v-if="!sharedStore.loading">Pošalji narudžbinu</span>
                            </button>
                            <p class="text-xs mx-1 text-justify">
                                Klikom na ovo dugme potvrđujete da ste saglasni sa našom
                                <a href="#" class="text-primary hover:underline">Politikom privatnosti</a>
                                i
                                <a href="/uslovi-koriscenja" class="text-primary hover:underline">
                                    Uslovima korišćenja
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import dayjs from 'dayjs'
import type { CartItemDTO } from '~/shared/types/CartDTO'
import { useCartStore } from '~/stores/CartStore'
import { useCheckoutStore } from '~/stores/CheckoutStore'
import { useOrderStore } from '~/stores/OrderStore'
import { useMailStore } from '~/stores/MailStore'
import { useSharedStore } from '~/stores/SharedStore'
import { OrderFailed } from '~/composables/useOrder'

const router = useRouter()
const cartStore = useCartStore()
const checkoutStore = useCheckoutStore()
const orderStore = useOrderStore()
const mailStore = useMailStore()
const sharedStore = useSharedStore()

sharedStore.loading = false

const cartItems = computed<CartItemDTO[]>(() => cartStore.cart.cartItems)

const userDetails = computed(() => [
    { label: 'Ime i prezime', value: checkoutStore.form.fullname },
    { label: 'Email adresa', value: checkoutStore.form.email },
    { label: 'Broj telefona', value: `+381 ${checkoutStore.form.phone}` },
    { label: 'Adresa dostave', value: checkoutStore.form.address },
    { label: 'Grad', value: checkoutStore.form.city },
    { label: 'Poštanski broj', value: checkoutStore.form.zipcode },
])

const paymentMethod = computed(() => checkoutStore.paymentMethodText)

const handleOrder = async () => {
    sharedStore.loading = true
    try {
        orderStore.orderData = {
            orderId: '',
            orderDate: '',
            products: cartStore.cart.cartItems.map(cartItem => ({
                id: cartItem.product.id,
                name: cartItem.product.name,
                ean: cartItem.product.ean,
                quantity: cartItem.quantity,
                imageUrl: cartItem.product.thumbnail,
            })),
            form: {
                ...checkoutStore.form,
                phone: `+381 ${checkoutStore.form.phone}`,
            },
            prices: checkoutStore.prices,
            paymentMethod: checkoutStore.paymentMethod,
            paymentMethodText: checkoutStore.paymentMethodText,
        }

        await orderStore.createOrder(orderStore.orderData)

        orderStore.orderData.orderId = orderStore.order.id
        orderStore.orderData.orderDate = dayjs(orderStore.order.createdAt).format('DD.MM.YYYY. HH:mm')

        if (checkoutStore.paymentMethod === 'advance') {
            await orderStore.fetchQRCode(orderStore.orderData)
        }
        await mailStore.sendMail(orderStore.orderData)

        cartStore.clearCart()

        router.push({ path: '/potvrdjena-kupovina', query: { redirected: 'true' } })
    } catch (error) {
        cartStore.clearCart()
        router.push('/').then(() => {
            setTimeout(() => {
                OrderFailed()
            }, 10)
        })
    } finally {
        sharedStore.loading = false
    }
}
</script>
