<template>
    <div>
        <section class="pt-3 pb-8 sm:h-screen">
            <form @submit.prevent="submitForm" class="mx-auto max-w-screen-xl px-4">
                <div class="lg:flex lg:items-start sm:gap-4 xl:gap-8">
                    <div
                        class="min-w-0 flex-1 space-y-6 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-8 mb-5">
                        <div class="space-y-4">
                            <p class="font-semibold text-xl lg:text-2xl ps-0.5 pb-2 sm:pb-4">Informacije o dostavi</p>
                            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <TextInput
                                        label="Ime i prezime"
                                        placeholder="Unesite ime i prezime"
                                        required
                                        v-model="form.fullname"
                                        :showError="!fullNameCheck().value.valid && formSubmitted"
                                        :errorMessage="fullNameCheck().value.message"
                                        :shakeTrigger="shakeTrigger" />
                                </div>
                                <div>
                                    <TextInput
                                        label="Email"
                                        placeholder="vas.email@gmail.com"
                                        required
                                        v-model="form.email"
                                        :showError="!emailCheck().value.valid && formSubmitted"
                                        :errorMessage="emailCheck().value.message"
                                        :shakeTrigger="shakeTrigger" />
                                </div>
                                <div>
                                    <PhoneInput
                                        label="Broj telefona"
                                        placeholder="61 2345678"
                                        required
                                        v-model="form.phone"
                                        :showError="!phoneCheck().value.valid && formSubmitted"
                                        :errorMessage="phoneCheck().value.message"
                                        :shakeTrigger="shakeTrigger" />
                                </div>
                                <div>
                                    <TextInput
                                        label="Adresa"
                                        placeholder="Unesite ulicu i broj"
                                        required
                                        v-model="form.address"
                                        :showError="!addressCheck().value.valid && formSubmitted"
                                        :errorMessage="addressCheck().value.message"
                                        :shakeTrigger="shakeTrigger" />
                                </div>
                                <div>
                                    <TextInput
                                        label="Grad"
                                        placeholder="Beograd, Zaječar, Niš..."
                                        required
                                        v-model="form.city"
                                        :showError="!cityCheck().value.valid && formSubmitted"
                                        :errorMessage="cityCheck().value.message"
                                        :shakeTrigger="shakeTrigger" />
                                </div>

                                <div>
                                    <TextInput
                                        label="Poštanski broj"
                                        placeholder="11000"
                                        required
                                        v-model="form.zipcode"
                                        :showError="!zipcodeCheck().value.valid && formSubmitted"
                                        :errorMessage="zipcodeCheck().value.message"
                                        :shakeTrigger="shakeTrigger" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        class="w-full space-y-6 lg:max-w-xs xl:max-w-md rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
                        <CheckoutPrice :selectedPaymentMethod="formStore.checkout.form.paymentMethod" />

                        <div class="space-y-3">
                            <button
                                type="submit"
                                class="flex w-full items-center justify-center rounded-md bg-primary-light hover:bg-primary-dark transition duration-75 px-5 py-2.5 text-sm font-medium text-white active:bg-primary">
                                Nastavi ka plaćanju
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    </div>
</template>

<script setup lang="ts">
import { useFormValidation } from '~/composables/useFormValidation'
import { useFormStore } from '~/stores/FormStore'

const formStore = useFormStore()

const emit = defineEmits(['nextStep'])

function goToNextStep() {
    emit('nextStep')
}

const form = ref(formStore.checkout.form)

const formSubmitted = ref(false)
const shakeTrigger = ref(0)

const { fullNameCheck, emailCheck, phoneCheck, addressCheck, cityCheck, zipcodeCheck } = useFormValidation(form)

const isFormInvalid = computed(() => {
    return !(
        fullNameCheck().value.valid &&
        emailCheck().value.valid &&
        addressCheck().value.valid &&
        cityCheck().value.valid &&
        phoneCheck().value.valid &&
        zipcodeCheck().value.valid
    )
})

const submitForm = () => {
    formSubmitted.value = true
    if (isFormInvalid.value) {
        shakeTrigger.value++
        return
    }
    formStore.checkout.form = form.value
    goToNextStep()
}
</script>
