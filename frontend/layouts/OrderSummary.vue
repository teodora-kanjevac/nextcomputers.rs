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
                        <CheckoutPrice :selectedPaymentMethod="formStore.checkout.meta.paymentMethod" />

                        <div class="space-y-3">
                            <button
                                @click="handleOrder"
                                :disabled="isLoading"
                                class="flex w-full items-center justify-center rounded-md bg-primary-light enabled:hover:bg-rose-800 transition duration-75 px-5 py-2.5 text-sm font-medium text-white disabled:contrast-75 enabled:active:bg-primary">
                                <template v-if="isLoading">
                                    <SubmitionSpinner class="size-5 px-5" />
                                </template>
                                <template v-else>
                                    <span>Pošalji narudžbinu</span>
                                </template>
                            </button>
                            <p class="text-xs mx-1 text-justify">
                                Klikom na ovo dugme potvrđujete da ste saglasni sa našom
                                <a href="/politika-privatnosti" class="text-primary hover:underline">
                                    Politikom privatnosti
                                </a>
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
import { useOrderStore } from '~/stores/OrderStore'
import { useMailStore } from '~/stores/MailStore'
import { OrderFailed } from '~/composables/useOrder'
import { useFormStore } from '~/stores/FormStore'

const router = useRouter()
const cartStore = useCartStore()
const formStore = useFormStore()
const orderStore = useOrderStore()
const mailStore = useMailStore()

const isLoading = ref(false)

const cartItems = computed<CartItemDTO[]>(() => cartStore.cart.cartItems)

const userDetails = computed(() => [
    { label: 'Ime i prezime', value: formStore.checkout.form.fullname },
    { label: 'Email adresa', value: formStore.checkout.form.email },
    { label: 'Broj telefona', value: `+381 ${formStore.checkout.form.phone}` },
    { label: 'Adresa dostave', value: formStore.checkout.form.address },
    { label: 'Grad', value: formStore.checkout.form.city },
    { label: 'Poštanski broj', value: formStore.checkout.form.zipcode },
])

const paymentMethod = computed(() => formStore.checkout.meta.paymentMethodText)

const handleOrder = async () => {
    isLoading.value = true
    try {
        orderStore.orderData = {
            orderId: '',
            orderDate: '',
            products: cartStore.cart.cartItems.map(cartItem => ({
                id: cartItem.product.id,
                name: cartItem.product.name,
                ean: cartItem.product.ean,
                price: cartItem.product.discountPrice || cartItem.product.price,
                quantity: cartItem.quantity,
                imageUrl: cartItem.product.thumbnail,
            })),
            form: {
                ...formStore.checkout.form,
                phone: `+381 ${formStore.checkout.form.phone}`,
            },
            prices: formStore.checkout.meta.prices,
            paymentMethod: formStore.checkout.meta.paymentMethod,
            paymentMethodText: formStore.checkout.meta.paymentMethodText,
        }

        await orderStore.createOrder(orderStore.orderData)

        orderStore.orderData.orderId = orderStore.order.id
        orderStore.orderData.orderDate = dayjs(orderStore.order.createdAt).format('DD.MM.YYYY. HH:mm')

        if (formStore.checkout.meta.paymentMethod === 'advance') {
            await orderStore.fetchQRCode(orderStore.orderData)
        }
        await mailStore.sendMail(orderStore.orderData)

        cartStore.clearCart()

        router.push({ path: '/potvrdjena-kupovina', query: { redirected: 'true' } })
    } catch (error) {
        cartStore.cart.cartItems.forEach(cartItem => {
            if (cartItem.product.stock === 0) {
                cartStore.removeFromCart(cartItem.id)
            }
        })
        router.push('/').then(() => {
            setTimeout(() => {
                OrderFailed()
            }, 10)
        })
    } finally {
        isLoading.value = false
    }
}
</script>
