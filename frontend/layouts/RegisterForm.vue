<template>
    <div class="min-h-screen flex flex-col justify-center items-center">
        <div class="flex flex-col lg:flex-row justify-center items-center max-w-screen-xl xl:p-0 lg:px-3 lg:py-0 sm:px-8 py-10 px-5 w-full gap-8">
            <div class="hidden lg:flex lg:w-1/2 items-center justify-center">
                <img :src="illustrationSrc" alt="Illustration" class="w-full" />
            </div>
            <div class="w-full lg:w-1/2 flex flex-col gap-3">
                <div>
                    <NuxtLink to="/" class="text-primary font-medium text-sm flex items-center hover:underline">
                        <ArrowLeftIcon class="size-4 me-1" />
                        Vrati se na naslovnu stranu
                    </NuxtLink>
                </div>
                <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div class="w-full md:px-7 md:py-6 p-5 lg:space-y-4 space-y-3">
                        <h2 class="md:text-3xl text-2xl font-bold text-gray-800">Kreirajte svoj nalog</h2>
                        <p class="text-gray-600 text-sm">
                            Već imate nalog?
                            <NuxtLink :to="`login`" class="text-primary font-medium hover:underline">
                                Prijavite se
                            </NuxtLink>
                        </p>

                        <form @submit.prevent="submitForm" class="space-y-5">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-x-4 md:gap-y-3 gap-y-3">
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
                                        :class="[
                                            'rounded size-5 text-primary focus:outline-none focus:ring-transparent',
                                            { 'border-red-600': !agreeToTermsCheck.valid && formSubmitted },
                                        ]"
                                        class="rounded size-5 text-primary focus:outline-none focus:ring-transparent" />

                                    <label class="text-xs text-left font-medium">
                                        Slažem se sa
                                        <NuxtLink
                                            to="/politika-privatnosti"
                                            class="text-primary font-medium hover:underline">
                                            Politikom privatnosti</NuxtLink>
                                        i
                                        <NuxtLink
                                            to="/uslovi-koriscenja"
                                            class="text-primary font-medium hover:underline">
                                            Uslovima korišćenja
                                        </NuxtLink>
                                    </label>
                                </div>
                                <p
                                    v-if="!agreeToTermsCheck.valid && formSubmitted"
                                    :key="'error-' + shakeTrigger"
                                    class="text-red-600 text-xs font-medium mt-2 animate-shake">
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
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import ArrowLeftIcon from '~/components/icons/ArrowLeftIcon.vue'
import { useFormValidation } from '~/composables/useFormValidation'

const illustrationSrc = '/assets/images/shop-illustration.webp'

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
