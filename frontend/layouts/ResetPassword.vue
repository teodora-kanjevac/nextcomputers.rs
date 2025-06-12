<template>
    <div class="flex flex-col justify-start items-center mx-4 sm:mx-0">
        <div
            v-if="!success"
            class="mb-40 mt-16 sm:mt-40 3xl:mt-56 w-full sm:w-2/3 xl:w-1/2 2xl:w-1/3 3xl:w-1/4 flex flex-col gap-3 rounded-lg bg-white p-6 lg:p-10 text-left shadow-lg">
            <h2 class="mb-2 text-2xl font-bold text-gray-800 lg:text-3xl">Resetovanje lozinke</h2>
            <p class="mb-2 text-gray-600 sm:text-base text-sm leading-5">
                Unesite novu lozinku koju ćete koristiti za svoj nalog
            </p>
            <form @submit.prevent="submitForm">
                <PasswordInput
                    class="mb-6"
                    label="Nova lozinka"
                    placeholder="Unesite novu lozinku"
                    required
                    v-model="form.password"
                    :showError="!passwordCheck.valid && formSubmitted"
                    :errorMessage="passwordCheck.message"
                    :shakeTrigger="shakeTrigger" />
                <PasswordInput
                    label="Potvrda nove lozinke"
                    placeholder="Unesite ponovo novu lozinku"
                    required
                    v-model="form.confirmPassword"
                    :showError="!confirmPasswordCheck.valid && formSubmitted"
                    :errorMessage="confirmPasswordCheck.message"
                    :shakeTrigger="shakeTrigger" />
                <div class="flex items-center justify-center">
                    <button
                        type="submit"
                        class="mt-8 select-none rounded flex items-center justify-center w-full sm:w-auto px-5 py-2.5 text-sm bg-primary-light transition duration-100 font-medium text-white disabled:contrast-75 enabled:hover:bg-rose-800"
                        :disabled="sharedStore.loading">
                        <template v-if="sharedStore.loading">
                            <SubmitionSpinner class="size-5 flex items-center" />
                        </template>
                        <template v-else>
                            <LockPasswordIcon class="size-5 me-1.5" />
                            Resetuj lozinku
                        </template>
                    </button>
                </div>
            </form>
        </div>
        <div
            v-else
            class="mt-16 md:mt-40 3xl:mt-56 max-w-xl rounded-lg bg-white p-6 mx-5 md:mx-auto md:p-10 shadow-lg text-center font-medium">
            <div class="flex justify-center mb-5">
                <InfoIcon class="size-11 text-green-800" />
            </div>
            <h2 class="mb-6 text-xl font-bold text-gray-800 md:text-3xl">Uspešna promena lozinke!</h2>
            <p class="mb-6 text-gray-600 sm:text-base text-sm leading-5 text-left">
                Vaša lozinka je uspešno promenjena. Možete da se prijavite na profil koristeći Vašu novu lozinku.
            </p>
            <div class="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center">
                <NuxtLink
                    to="/login"
                    class="bg-green-700 hover:bg-green-800 text-white font-medium text-sm py-2 px-4 rounded inline-block transition-colors">
                    Prijavi se
                </NuxtLink>
                <NuxtLink
                    to="/"
                    class="border border-green-600 text-green-600 hover:bg-green-200 font-medium text-sm py-2 px-4 rounded inline-block transition-colors">
                    Vrati se na početnu
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import InfoIcon from '~/components/icons/InfoIcon.vue'
import LockPasswordIcon from '~/components/icons/LockPasswordIcon.vue'
import { useAuthStore } from '~/stores/AuthStore'
import { useFormStore } from '~/stores/FormStore'
import { useSharedStore } from '~/stores/SharedStore'

const sharedStore = useSharedStore()
const formStore = useFormStore()
const authStore = useAuthStore()
const route = useRoute()
const { showNotification } = useNotification()

const form = ref(formStore.resetPassword.form)
const formSubmitted = ref(false)
const shakeTrigger = ref(0)
const success = ref(false)

const { passwordCheck, confirmPasswordCheck } = useFormValidation(form)

const isFormInvalid = computed(() => {
    return !(passwordCheck.value.valid && confirmPasswordCheck.value.valid)
})

const token = route.query.token as string

const resetForm = () => {
    formStore.resetResetPasswordForm()
    formSubmitted.value = false
}

const submitForm = async () => {
    formSubmitted.value = true
    if (isFormInvalid.value) {
        shakeTrigger.value++
        return
    }

    try {
        sharedStore.setLoading(true)
        if (!token) {
            navigateTo('/')
            return
        }
        await authStore.changePassword(token, form.value)
        window.location.reload()
    } catch (error) {
        showNotification(
            'error',
            'Greška pri promeni lozinke!',
            'Došlo je do greške pri promeni lozinke. Probajte ponovo kasnije.'
        )
    } finally {
        sharedStore.setLoading(false)
    }
}

onBeforeRouteLeave(() => {
    resetForm()
    return true
})
</script>
