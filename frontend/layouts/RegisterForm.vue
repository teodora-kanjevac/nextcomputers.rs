<template>
    <div class="min-h-screen flex flex-col justify-center items-center">
        <div
            class="flex flex-col lg:flex-row justify-center items-center max-w-screen-2xl xl:p-0 lg:px-3 lg:py-0 sm:px-8 py-10 px-5 w-full gap-8">
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
                    <div class="w-full md:px-7 md:py-5 p-5 lg:space-y-4 space-y-3">
                        <div class="flex items-center pb-2">
                            <img class="rounded w-8" src="/assets/images/logo.webp" alt="logo" />
                            <h1 class="text-sm font-medium ps-3">nextcomputers.rs</h1>
                        </div>
                        <h2 class="text-2xl font-bold text-gray-800">Kreirajte svoj nalog</h2>
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
                                    :showError="!firstNameCheck().value.valid && formSubmitted"
                                    :errorMessage="firstNameCheck().value.message"
                                    :shakeTrigger="shakeTrigger" />
                                <TextInput
                                    label="Prezime"
                                    placeholder="Vaše prezime"
                                    required
                                    v-model="form.lastName"
                                    :showError="!lastNameCheck().value.valid && formSubmitted"
                                    :errorMessage="lastNameCheck().value.message"
                                    :shakeTrigger="shakeTrigger" />
                                <TextInput
                                    label="Adresa"
                                    placeholder="Vaša ulica i broj"
                                    :required="false"
                                    v-model="form.address"
                                    :showError="!addressCheck(false).value.valid && formSubmitted"
                                    :errorMessage="addressCheck(false).value.message"
                                    :shakeTrigger="shakeTrigger" />
                                <TextInput
                                    label="Grad"
                                    placeholder="Beograd, Zaječar, Niš..."
                                    :required="false"
                                    v-model="form.city"
                                    :showError="!cityCheck(false).value.valid && formSubmitted"
                                    :errorMessage="cityCheck(false).value.message"
                                    :shakeTrigger="shakeTrigger" />
                                <PhoneInput
                                    label="Broj telefona"
                                    placeholder="61 2345678"
                                    required
                                    v-model="form.phone"
                                    :showError="!phoneCheck().value.valid && formSubmitted"
                                    :errorMessage="phoneCheck().value.message"
                                    :shakeTrigger="shakeTrigger" />
                                <TextInput
                                    label="Email"
                                    placeholder="vasmail@gmail.com"
                                    required
                                    v-model="form.email"
                                    :showError="!emailCheck().value.valid && formSubmitted"
                                    :errorMessage="emailCheck().value.message"
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
                                <label class="text-xs text-left font-medium inline-flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        v-model="form.termsAccepted"
                                        :class="[
                                            'rounded size-5 text-primary focus:outline-none focus:ring-transparent cursor-pointer',
                                            { 'border-red-600': !termsAcceptedCheck.valid && formSubmitted },
                                        ]" />
                                    <p class="select-none">
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
                                    </p>
                                </label>
                                <p
                                    v-if="!termsAcceptedCheck.valid && formSubmitted"
                                    :key="'error-' + shakeTrigger"
                                    class="text-red-600 text-xs font-medium mt-2 animate-shake">
                                    {{ termsAcceptedCheck.message }}
                                </p>
                            </div>

                            <div class="flex items-center justify-center">
                                <button
                                    type="submit"
                                    class="w-full sm:w-1/2 flex items-center justify-center bg-primary-light text-white font-semibold py-2 rounded-md hover:bg-rose-800 transition duration-100">
                                    <PersonAddIcon class="size-5 me-1.5" />
                                    Registruj se
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import ArrowLeftIcon from '~/components/icons/ArrowLeftIcon.vue'
import PersonAddIcon from '~/components/icons/PersonAddIcon.vue'
import { useFormValidation } from '~/composables/useFormValidation'
import { useFormStore } from '~/stores/FormStore'

const illustrationSrc = '/assets/images/shop-illustration.webp'

const formStore = useFormStore()

const form = ref(formStore.register.form)

const formSubmitted = ref(false)
const shakeTrigger = ref(0)

const {
    firstNameCheck,
    lastNameCheck,
    phoneCheck,
    addressCheck,
    cityCheck,
    emailCheck,
    passwordCheck,
    confirmPasswordCheck,
    termsAcceptedCheck,
} = useFormValidation(form)

const isFormInvalid = computed(() => {
    return !(
        firstNameCheck().value.valid &&
        lastNameCheck().value.valid &&
        emailCheck().value.valid &&
        addressCheck(false).value.valid &&
        cityCheck(false).value.valid &&
        phoneCheck().value.valid &&
        passwordCheck.value.valid &&
        confirmPasswordCheck.value.valid &&
        termsAcceptedCheck.value.valid
    )
})

const submitForm = () => {
    formSubmitted.value = true
    if (isFormInvalid.value) {
        shakeTrigger.value++
        return
    }
    alert('Form submitted successfully!')
}
</script>
