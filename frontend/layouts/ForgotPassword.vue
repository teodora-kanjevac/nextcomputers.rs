<template>
    <div class="flex flex-col justify-start items-center mx-4 sm:mx-0">
        <div
            class="mb-40 mt-16 md:mt-40 3xl:mt-56 w-full sm:w-2/3 xl:w-1/2 2xl:w-1/3 3xl:w-1/4 flex flex-col gap-3 rounded-lg bg-white p-6 lg:p-10 text-left shadow-lg">
            <h2 class="mb-2 lg:mb-4 text-2xl font-bold text-gray-800 lg:text-3xl">Zaboravili ste lozinku?</h2>
            <p class="mb-2 lg:mb-4 text-gray-600 sm:text-base text-sm leading-5">
                Unesite svoju email adresu i poslaćemo vam link za resetovanje lozinke.
            </p>
            <form @submit.prevent="submitForm">
                <TextInput
                    class="mb-4"
                    label="Email adresa"
                    placeholder="Unesite svoj email"
                    required
                    v-model="form.email"
                    :showError="!emailCheck().value.valid && formSubmitted"
                    :errorMessage="emailCheck().value.message"
                    :shakeTrigger="shakeTrigger" />
                <button
                    type="submit"
                    class="mb-1 select-none rounded w-full px-2 py-2.5 text-sm bg-primary-light transition duration-100 font-medium text-white disabled:contrast-75 enabled:hover:bg-rose-800"
                    :disabled="sharedStore.loading">
                    <template v-if="sharedStore.loading">
                        <SubmitionSpinner class="size-5 flex items-center" />
                    </template>
                    <template v-else>Pošalji mail</template>
                </button>
            </form>
            <div
                v-if="registerError"
                :key="'error-' + shakeTriggerInvalidEmail"
                class="p-3 mb-2 text-xs font-medium text-red-800 rounded-md bg-red-100 flex items-center animate-shake">
                <ErrorFillIcon class="size-4 me-2 shrink-0" />
                Ne postoji nalog povezan sa email-om koji ste uneli.
            </div>
            <p class="text-xs sm:text-sm text-gray-600 leading-5">
                <span class="font-bold">Niste dobili email?</span>
                Proverite spam folder i "Promotions" tab u inbox-u, ili ponovo pošaljite email klikom na dugme iznad.
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import ErrorFillIcon from '~/components/icons/ErrorFillIcon.vue'
import { useAuthStore } from '~/stores/AuthStore'
import { useSharedStore } from '~/stores/SharedStore'

const authStore = useAuthStore()
const sharedStore = useSharedStore()
const { showNotification } = useNotification()

const form = ref({ email: '' })
const formSubmitted = ref(false)
const shakeTrigger = ref(0)
const shakeTriggerInvalidEmail = ref(0)
const registerError = ref(false)

const { emailCheck } = useFormValidation(form)

const isFormInvalid = computed(() => {
    return !emailCheck().value.valid
})

const resetForm = () => {
    form.value = { email: '' }
    registerError.value = false
    formSubmitted.value = false
}

const submitForm = async () => {
    formSubmitted.value = true
    if (isFormInvalid.value) {
        registerError.value = false
        shakeTrigger.value++
        return
    }

    try {
        sharedStore.setLoading(true)

        const response = await authStore.checkIfUserExists(form.value.email)

        if (response.success) {
            await authStore.generateResetPasswordToken(form.value.email)
        } else {
            throw new Error('User not found')
        }

        resetForm()
        showNotification(
            'success',
            'Email uspešno poslat!',
            'Email za promenu lozinke Vam je poslat. Možete da proverite email.'
        )
    } catch (error: any) {
        if (error.message.includes('User not found')) {
            registerError.value = true
            shakeTriggerInvalidEmail.value++
        } else if (error.message.includes('Too many password reset')) {
            showNotification(
                'warn',
                'Previše pokušaja!',
                'Previše zahteva za resetovanje lozinke. Pokušajte ponovo kasnije.'
            )
        } else {
            showNotification(
                'error',
                'Greška pri slanju email-a!',
                'Došlo je do greške pri slanju email-a za promenu lozinke. Probajte ponovo kasnije.'
            )
        }
    } finally {
        sharedStore.setLoading(false)
    }
}

onBeforeRouteLeave(() => {
    resetForm()
    return true
})
</script>
