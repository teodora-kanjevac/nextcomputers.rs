<template>
    <div>
        <section class="py-8 md:py-20" :class="{ 'h-screen': order.paymentMethod === 'CASH' }">
            <div class="mx-auto max-w-2xl px-4 2xl:px-0">
                <h2 class="text-xl font-semibold text-gray-900 sm:text-2xl mb-4">Hvala Vam na kupovini!</h2>
                <p class="text-gray-700 text-sm mb-3 mx-0.5 text-justify">
                    Vaša narudžbina
                    <span class="text-gray-900 font-semibold">{{ order.orderId }}</span>
                    će biti obrađena u roku od 24 sata. Ukoliko plaćate avansno, uplatnicu možete pronaći ispod ili u
                    e-mailu koji smo Vam poslali. Ukoliko plaćate gotovinom, bićete kontaktirani radi potvrde
                    porudžbine.
                </p>
                <div
                    class="space-y-4 sm:space-y-2 rounded-lg border border-gray-300 bg-gray-200 p-4 sm:p-6 mb-8 md:mb-10">
                    <dl class="sm:flex items-center justify-between gap-4">
                        <dt class="font-normal mb-1 sm:mb-0 text-gray-700">Datum narudžbine</dt>
                        <dd class="font-medium text-gray-900 sm:text-end">{{ order.orderDate }}</dd>
                    </dl>
                    <dl class="sm:flex items-center justify-between gap-4">
                        <dt class="font-normal mb-1 sm:mb-0 text-gray-700">Način plaćanja</dt>
                        <dd class="font-medium text-gray-900 sm:text-end">
                            {{ order.paymentMethodText }}
                        </dd>
                    </dl>
                    <dl class="sm:flex items-center justify-between gap-4">
                        <dt class="font-normal mb-1 sm:mb-0 text-gray-700">Ime kupca</dt>
                        <dd class="font-medium text-gray-900 sm:text-end">{{ order.form.fullname }}</dd>
                    </dl>
                    <dl class="sm:flex items-center justify-between gap-4">
                        <dt class="font-normal mb-1 sm:mb-0 text-gray-700">Adresa kupca</dt>
                        <dd class="font-medium text-gray-900 sm:text-end">{{ order.form.address }}</dd>
                    </dl>
                    <dl class="sm:flex items-center justify-between gap-4">
                        <dt class="font-normal mb-1 sm:mb-0 text-gray-700">Broj telefona</dt>
                        <dd class="font-medium text-gray-900 sm:text-end">{{ order.form.phone }}</dd>
                    </dl>
                    <dl v-if="order.form.pib" class="sm:flex items-center justify-between gap-4">
                        <dt class="font-normal mb-1 sm:mb-0 text-gray-700">PIB firme</dt>
                        <dd class="font-medium text-gray-900 sm:text-end">{{ order.form.pib }}</dd>
                    </dl>
                </div>
                <div v-if="order.paymentMethod === 'ADVANCE'">
                    <div class="flex items-center justify-center pb-14">
                        <img :src="qrCode" alt="QR kod za plaćanje" />
                    </div>
                    <h2 class="font-medium text-lg">Instrukcije za uplatu:</h2>
                    <p class="mx-0.5 my-3 text-sm text-gray-700 text-justify">
                        Ukoliko niste u mogućnosti da izvršite uplatu putem NBS IPS QR koda, molimo Vas da iskoristite
                        sledeće podatke za uplatu:
                    </p>
                    <div
                        class="space-y-4 sm:space-y-2 rounded-lg border border-gray-300 bg-gray-200 p-4 sm:p-6 mb-8 md:mb-10">
                        <dl class="sm:flex items-center justify-between gap-4">
                            <dt class="font-normal mb-1 sm:mb-0 text-gray-700">Ime primaoca</dt>
                            <dd class="font-medium text-gray-900 sm:text-end">
                                NEMANJA STOJANOVIĆ PREDUZETNIK NIŠ (PALILULA)
                            </dd>
                        </dl>
                        <dl class="sm:flex items-center justify-between gap-4">
                            <dt class="font-normal mb-1 sm:mb-0 text-gray-700">Račun za uplatu</dt>
                            <dd class="font-medium text-gray-900 sm:text-end">265-4010310005681-78</dd>
                        </dl>
                        <dl class="sm:flex items-center justify-between gap-4">
                            <dt class="font-normal mb-1 sm:mb-0 text-gray-700">Svrha uplate</dt>
                            <dd class="font-medium text-gray-900 sm:text-end">{{ order.orderId }}</dd>
                        </dl>
                        <dl class="sm:flex items-center justify-between gap-4">
                            <dt class="font-normal mb-1 sm:mb-0 text-gray-700">Ukupno za uplatu</dt>
                            <dd class="font-medium text-gray-900 sm:text-end">
                                {{ formatPrice(order.prices.totalPrice) }} RSD
                            </dd>
                        </dl>
                    </div>
                </div>
                <div class="flex items-center justify-center gap-2">
                    <a
                        href="/"
                        class="inline-flex items-center gap-1 text-sm font-medium text-primary-light underline hover:no-underline">
                        Vrati se na početnu stranu
                        <ArrowRightIcon class="size-4 mt-0.5" />
                    </a>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { useOrderStore } from '~/stores/OrderStore'
import ArrowRightIcon from '~/components/icons/ArrowRightIcon.vue'

const orderStore = useOrderStore()
const router = useRouter()

const qrCode = computed(() => orderStore.qrCode)
const order = computed(() => orderStore.orderData)

onMounted(() => {
    if (router.currentRoute.value.query.redirected !== 'true' || !sessionStorage.getItem('order-data')) {
        router.push('/')
    }
})
</script>
