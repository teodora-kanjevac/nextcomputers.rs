<template>
    <div>
        <section class="py-3 min-h-screen">
            <form @submit.prevent="handleSubmit" class="mx-auto max-w-screen-xl px-4">
                <div class="lg:flex lg:items-start lg:gap-8">
                    <div class="min-w-0 flex-1 rounded-lg border border-gray-200 bg-white p-6 shadow-sm sm:p-8 mb-5">
                        <div>
                            <p class="font-semibold text-xl lg:text-2xl ps-0.5 pb-6 sm:pb-8">Način plaćanja</p>
                            <div>
                                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <PaymentRadio v-model="selectedPaymentMethod" />
                                </div>
                                <p
                                    v-if="!isPaymentMethodValid && formSubmitted"
                                    class="text-center text-red-600 text-xs font-medium mt-3 ms-0.5">
                                    Molimo izaberite način plaćanja
                                </p>
                            </div>
                            <div class="text-sm">
                                <div class="space-y-3 mt-8" v-if="selectedPaymentMethod === 'ADVANCE'">
                                    <p>
                                        Uplatom na račun
                                        <span class="font-semibold">dobijate</span>
                                        1% popusta na ukupnu cenu proizvoda.
                                    </p>
                                    <p>
                                        Nakon potvrđene narudžbine ce Vam se pojaviti uplatnica sa NBS IPS QR kodom,
                                        kopiju ćete takođe dobiti na email adresu.
                                    </p>
                                    <p>
                                        Uplatom na račun takođe ubrzavate obradu i dostavu vase narudžbine, štedite
                                        novac, i čuvate prirodu.
                                    </p>
                                </div>
                                <div class="space-y-3 mt-8" v-else-if="selectedPaymentMethod === 'CASH'">
                                    <p>
                                        Plaćanje gotovinom pri pouzeću
                                        <span class="font-semibold">ne dobijate</span>
                                        dodatan popust od 1% na ukupnu cenu proizvoda.
                                    </p>
                                    <p>Nakon slanja narudžbine ćete biti kontaktirani radi potvrde kupovine.</p>
                                    <p>
                                        Plaćanje gotovinom povećava šansu za greškom, usporava obradu narudžbine, ne
                                        daje Vam dodatne popuste i povećava zagađenje prirode.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        class="w-full space-y-6 lg:max-w-xs xl:max-w-md rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
                        <CheckoutPrice :selectedPaymentMethod="selectedPaymentMethod" />

                        <div class="space-y-3">
                            <button
                                type="submit"
                                class="flex w-full items-center justify-center rounded-md bg-primary-light hover:bg-rose-800 transition duration-75 px-5 py-2.5 text-sm font-medium text-white active:bg-primary">
                                Nastavi na pregled narudžbine
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    </div>
</template>

<script setup lang="ts">
import { useFormStore } from '~/stores/FormStore'
import { paymentMethodMap } from '~/assets/static/paymentMethodMap'

const formStore = useFormStore()

const emit = defineEmits(['nextStep'])

const selectedPaymentMethod = ref<'CASH' | 'CARD' | 'ADVANCE' | undefined>(formStore.checkout.meta.paymentMethod)
const formSubmitted = ref(false)

function handleSubmit() {
    formSubmitted.value = true
    if (selectedPaymentMethod.value) {
        formStore.checkout.meta.paymentMethod = selectedPaymentMethod.value
        formStore.checkout.meta.paymentMethodText =
            paymentMethodMap[selectedPaymentMethod.value] || 'Nije izabran način plaćanja'
        goToNextStep()
    }
}

function goToNextStep() {
    emit('nextStep')
}

const isPaymentMethodValid = computed(() => !!selectedPaymentMethod.value)
</script>
