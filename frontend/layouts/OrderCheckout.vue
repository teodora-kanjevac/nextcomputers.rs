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
                                    <label for="fullname" class="block mb-2 ms-0.5 text-sm font-medium text-gray-900">
                                        Ime i prezime
                                        <span class="text-red-600">*</span>
                                    </label>
                                    <input
                                        v-model="form.fullname"
                                        type="text"
                                        name="fullname"
                                        id="fullname"
                                        :class="{
                                            'bg-gray-50 border-gray-300': fullNameCheck.valid && formSubmitted,
                                            'border-red-600': !fullNameCheck.valid && formSubmitted,
                                        }"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:ring-primary-light focus:border-primary-light"
                                        placeholder="Vaše ime i prezime" />
                                    <p
                                        v-if="!fullNameCheck.valid && formSubmitted"
                                        class="text-red-600 text-xs font-medium mt-1 ms-0.5">
                                        {{ fullNameCheck.message }}
                                    </p>
                                </div>

                                <div>
                                    <label for="email" class="block mb-2 ms-0.5 text-sm font-medium text-gray-900">
                                        Email adresa
                                        <span class="text-red-600">*</span>
                                    </label>
                                    <input
                                        v-model="form.email"
                                        type="text"
                                        name="email"
                                        id="email"
                                        :class="{
                                            'bg-gray-50 border-gray-300': emailCheck.valid && formSubmitted,
                                            'border-red-600': !emailCheck.valid && formSubmitted,
                                        }"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:ring-primary-light focus:border-primary-light"
                                        placeholder="vasmail@gmail.com" />
                                    <p
                                        v-if="!emailCheck.valid && formSubmitted"
                                        class="text-red-600 text-xs font-medium mt-1 ms-0.5">
                                        {{ emailCheck.message }}
                                    </p>
                                </div>

                                <div>
                                    <label for="phone" class="block mb-2 ms-0.5 text-sm font-medium text-gray-900">
                                        Broj telefona
                                        <span class="text-red-600">*</span>
                                    </label>
                                    <div class="relative">
                                        <div
                                            class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                            <span class="text-gray-700 text-sm">+381</span>
                                        </div>
                                        <input
                                            v-model="form.phone"
                                            type="tel"
                                            name="phone"
                                            id="phone"
                                            :class="{
                                                'bg-gray-50 border-gray-300': phoneCheck.valid && formSubmitted,
                                                'border-red-600': !phoneCheck.valid && formSubmitted,
                                            }"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-12 p-2.5 focus:ring-primary-light focus:border-primary-light"
                                            placeholder="61 2345678" />
                                    </div>
                                    <p
                                        v-if="!phoneCheck.valid && formSubmitted"
                                        class="text-red-600 text-xs font-medium mt-1 ms-0.5">
                                        {{ phoneCheck.message }}
                                    </p>
                                </div>

                                <div>
                                    <label for="address" class="block mb-2 ms-0.5 text-sm font-medium text-gray-900">
                                        Adresa
                                        <span class="text-red-600">*</span>
                                    </label>
                                    <input
                                        v-model="form.address"
                                        type="text"
                                        name="address"
                                        id="address"
                                        :class="{
                                            'bg-gray-50 border-gray-300': addressCheck.valid && formSubmitted,
                                            'border-red-600': !addressCheck.valid && formSubmitted,
                                        }"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:ring-primary-light focus:border-primary-light"
                                        placeholder="Ulica i broj" />
                                    <p
                                        v-if="!addressCheck.valid && formSubmitted"
                                        class="text-red-600 text-xs font-medium mt-1 ms-0.5">
                                        {{ addressCheck.message }}
                                    </p>
                                </div>

                                <div>
                                    <label for="city" class="block mb-2 ms-0.5 text-sm font-medium text-gray-900">
                                        Grad
                                        <span class="text-red-600">*</span>
                                    </label>
                                    <input
                                        v-model="form.city"
                                        type="text"
                                        name="city"
                                        id="city"
                                        :class="{
                                            'bg-gray-50 border-gray-300': cityCheck.valid && formSubmitted,
                                            'border-red-600': !cityCheck.valid && formSubmitted,
                                        }"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:ring-primary-light focus:border-primary-light"
                                        placeholder="Beograd, Zaječar, Niš..." />
                                    <p
                                        v-if="!cityCheck.valid && formSubmitted"
                                        class="text-red-600 text-xs font-medium mt-1 ms-0.5">
                                        {{ cityCheck.message }}
                                    </p>
                                </div>

                                <div>
                                    <label for="zipcode" class="block mb-2 ms-0.5 text-sm font-medium text-gray-900">
                                        Poštanski broj
                                        <span class="text-red-600">*</span>
                                    </label>
                                    <input
                                        v-model="form.zipcode"
                                        type="text"
                                        name="zipcode"
                                        id="zipcode"
                                        :class="{
                                            'bg-gray-50 border-gray-300': zipcodeCheck.valid && formSubmitted,
                                            'border-red-600': !zipcodeCheck.valid && formSubmitted,
                                        }"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:ring-primary-light focus:border-primary-light"
                                        placeholder="11000" />
                                    <p
                                        v-if="!zipcodeCheck.valid && formSubmitted"
                                        class="text-red-600 text-xs font-medium mt-1 ms-0.5">
                                        {{ zipcodeCheck.message }}
                                    </p>
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
import { useCheckoutStore } from '~/stores/CheckoutStore'

const checkoutStore = useCheckoutStore()

const emit = defineEmits(['nextStep'])

function goToNextStep() {
    emit('nextStep')
}

const form = ref(checkoutStore.form)

const formSubmitted = ref(false)

const fullNameCheck = computed(() => {
    const fullnameRegex = /^[\p{L} ]+$/u
    if (!form.value.fullname) {
        return { valid: false, message: 'Ime i prezime su obavezni' }
    }
    if (!fullnameRegex.test(form.value.fullname)) {
        return { valid: false, message: 'Dozvoljena su samo slova i razmaci' }
    }
    return { valid: true, message: '' }
})

const addressCheck = computed(() => {
    if (!form.value.address) {
        return { valid: false, message: 'Adresa je obavezna' }
    }
    return { valid: true, message: '' }
})

const cityCheck = computed(() => {
    const cityRegex = /^[\p{L} ]+$/u
    if (!form.value.city) {
        return { valid: false, message: 'Grad je obavezan' }
    }
    if (!cityRegex.test(form.value.city)) {
        return { valid: false, message: 'Dozvoljena su samo slova i razmaci' }
    }
    return { valid: true, message: '' }
})

const emailCheck = computed(() => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (!form.value.email) {
        return { valid: false, message: 'Email adresa je obavezna' }
    }
    if (!emailRegex.test(form.value.email)) {
        return { valid: false, message: 'Unesite validnu email adresu' }
    }
    return { valid: true, message: '' }
})

const zipcodeCheck = computed(() => {
    const zipcodeRegex = /^\d{5}$/
    if (!form.value.zipcode) {
        return { valid: false, message: 'Poštanski broj je obavezan' }
    }
    if (!zipcodeRegex.test(form.value.zipcode)) {
        return { valid: false, message: 'Poštanski broj treba da sadrži 5 cifara' }
    }
    return { valid: true, message: '' }
})

const phoneCheck = computed(() => {
    if (!form.value.phone) {
        return { valid: false, message: 'Broj telefona je obavezan' }
    }
    const phoneRegex = /^\d{6,15}$/
    const cleanPhone = form.value.phone.replace(/\s+/g, '')
    if (!phoneRegex.test(cleanPhone)) {
        return { valid: false, message: 'Broj telefona treba da ima 6-15 cifara' }
    }
    return { valid: true, message: '' }
})

const submitForm = () => {
    formSubmitted.value = true
    if (
        fullNameCheck.value.valid &&
        emailCheck.value.valid &&
        addressCheck.value.valid &&
        cityCheck.value.valid &&
        zipcodeCheck.value.valid &&
        phoneCheck.value.valid
    ) {
        checkoutStore.form = form.value
        goToNextStep()
    }
}
</script>
