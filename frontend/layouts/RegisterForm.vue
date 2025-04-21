<template>
    <div class="min-h-screen flex flex-col justify-center items-center">
        <div class="w-full max-w-screen-xl mb-2 ms-1">
            <NuxtLink to="/" class="text-primary font-medium text-sm inline-flex items-center hover:underline">
                <ArrowLeftIcon class="size-4 me-1" />
                Vrati se na naslovnu stranu
            </NuxtLink>
        </div>
        <div class="flex justify-center items-center max-w-screen-xl xl:p-0 px-3">
            <div class="bg-white rounded-lg shadow-lg overflow-hidden w-full">
                <div class="w-full md:px-7 md:py-6 p-5 space-y-4">
                    <h2 class="md:text-3xl text-2xl font-bold text-gray-800">Kreirajte svoj nalog</h2>
                    <p class="text-gray-600 text-sm">
                        Već imate nalog?
                        <NuxtLink :to="`login`" class="text-primary font-medium hover:underline">Prijavite se</NuxtLink>
                    </p>

                    <form @submit.prevent="submitForm" class="space-y-5">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-4 md:gap-y-3 gap-y-2">
                            <TextInput
                                label="Ime"
                                placeholder="Vaše ime"
                                required
                                v-model="form.firstName"
                                :showError="!firstNameCheck.valid && formSubmitted"
                                :errorMessage="firstNameCheck.message"
                                :shakeTrigger="shakeTrigger" />
                            <TextInput
                                label="Prezime"
                                placeholder="Vaše prezime"
                                required
                                v-model="form.lastName"
                                :showError="!lastNameCheck.valid && formSubmitted"
                                :errorMessage="lastNameCheck.message"
                                :shakeTrigger="shakeTrigger" />
                            <TextInput
                                label="Adresa"
                                placeholder="Ulica i broj"
                                :required="false"
                                v-model="form.address"
                                :showError="false"
                                :errorMessage="''"
                                :shakeTrigger="shakeTrigger" />
                            <TextInput
                                label="Grad"
                                placeholder="Beograd, Zaječar, Niš..."
                                :required="false"
                                v-model="form.city"
                                :showError="false"
                                :errorMessage="''"
                                :shakeTrigger="shakeTrigger" />
                            <PhoneInput
                                label="Broj telefona"
                                placeholder="61 2345678"
                                required
                                v-model="form.phone"
                                :showError="!phoneCheck.valid && formSubmitted"
                                :errorMessage="phoneCheck.message"
                                :shakeTrigger="shakeTrigger" />
                            <TextInput
                                label="Email"
                                placeholder="vasmail@gmail.com"
                                required
                                v-model="form.email"
                                :showError="!emailCheck.valid && formSubmitted"
                                :errorMessage="emailCheck.message"
                                :shakeTrigger="shakeTrigger" />
                            <PasswordInput
                                label="Lozinka"
                                placeholder="Unesite Vašu lozinku"
                                required
                                v-model="form.password"
                                :showError="!passwordCheck.valid && formSubmitted"
                                :errorMessage="passwordCheck.message"
                                :shakeTrigger="shakeTrigger" />
                            <PasswordInput
                                label="Potvrdite lozinku"
                                placeholder="Unesite ponovo lozinku"
                                required
                                v-model="form.confirmPassword"
                                :showError="!confirmPasswordCheck.valid && formSubmitted"
                                :errorMessage="confirmPasswordCheck.message"
                                :shakeTrigger="shakeTrigger" />
                        </div>

                        <div class="font-medium">
                            <h3 class="text-sm">Lozinka mora da ispuni ove uslove:</h3>
                            <ul class="text-xs text-gray-800 mt-2 ms-0.5 list-disc list-inside">
                                <li>Minimum 6 karaktera</li>
                                <li>Najmanje jedan broj</li>
                                <li>Najmanje jedan specijalan karakter (!@#$...)</li>
                            </ul>
                        </div>

                        <div class="text-gray-600">
                            <div class="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    v-model="form.agreeToTerms"
                                    class="rounded size-5 text-primary focus:outline-none focus:ring-transparent" />
                                <label class="text-xs text-left font-medium">
                                    Slažem se sa
                                    <NuxtLink
                                        to="/politika-privatnosti"
                                        class="text-primary font-medium hover:underline">
                                        Politikom privatnosti
                                    </NuxtLink>
                                    i
                                    <NuxtLink to="/uslovi-koriscenja" class="text-primary font-medium hover:underline">
                                        Uslovima korišćenja
                                    </NuxtLink>
                                </label>
                            </div>
                            <p
                                v-if="!agreeToTermsCheck.valid && formSubmitted"
                                :key="'error-' + shakeTrigger"
                                class="text-red-600 text-xs font-medium mt-2 ms-0.5 animate-shake">
                                {{ agreeToTermsCheck.message }}
                            </p>
                        </div>

                        <button
                            type="submit"
                            class="w-full bg-primary-light text-white font-semibold py-2 rounded-md hover:bg-primary-dark transition duration-100">
                            Registruj se
                        </button>
                    </form>
                </div>
            </div>
            <div class="hidden lg:flex w-full items-center justify-center px-8">
                <img src="/assets/images/shop-illustration.png" alt="Illustration" class="w-full" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import ArrowLeftIcon from '~/components/icons/ArrowLeftIcon.vue'
import { useFormValidation } from '~/composables/useFormValidation'

const form = ref({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
})

const formSubmitted = ref(false)
const shakeTrigger = ref(0)

const {
    firstNameCheck,
    lastNameCheck,
    phoneCheck,
    emailCheck,
    passwordCheck,
    confirmPasswordCheck,
    agreeToTermsCheck,
} = useFormValidation(form)

const isFormInvalid = computed(() => {
    return !(
        firstNameCheck.value.valid &&
        lastNameCheck.value.valid &&
        emailCheck.value.valid &&
        phoneCheck.value.valid &&
        passwordCheck.value.valid &&
        confirmPasswordCheck.value.valid &&
        agreeToTermsCheck.value.valid
    )
})

const submitForm = () => {
    formSubmitted.value = true
    if (!isFormInvalid.value) {
        alert('Form submitted successfully!')
    } else {
        shakeTrigger.value++
    }
}
</script>
