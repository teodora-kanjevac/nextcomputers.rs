<template>
    <div class="flex flex-col justify-start items-center">
        <div
            class="mt-16 md:mt-40 w-1/3 rounded-lg bg-white p-6 mx-5 md:mx-auto md:p-12 text-left shadow-lg font-medium">
            <h2 class="mb-6 text-xl font-bold text-gray-800 md:text-3xl">Zaboravili ste lozinku?</h2>
            <p class="mb-6 text-gray-600 sm:text-base text-sm leading-5">
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
                    class="mb-6 select-none rounded w-full py-2.5 text-sm bg-primary-light transition duration-100 font-medium text-white disabled:contrast-75 enabled:hover:bg-rose-800"
                    :disabled="sharedStore.loading">
                    <template v-if="sharedStore.loading">
                        <SubmitionSpinner class="size-5 flex items-center" />
                    </template>
                    <template v-else>
                        Pošalji mail za resetovanje lozinke
                    </template>
                </button>
            </form>
            <p class="text-xs sm:text-sm text-gray-600 leading-5">
                <span class="font-bold">Niste dobili email?</span>
                Proverite spam folder i "Promotions" tab u inbox-u, ili ponovo pošaljite email klikom na dugme iznad.
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/stores/AuthStore'
import { useSharedStore } from '~/stores/SharedStore'

const authStore = useAuthStore()
const sharedStore = useSharedStore()

const form = ref({ email: '' })
const formSubmitted = ref(false)
const shakeTrigger = ref(0)

const { emailCheck } = useFormValidation(form)

const isFormInvalid = computed(() => {
    return !emailCheck().value.valid
})

const resetForm = () => {
    form.value = { email: '' }
    formSubmitted.value = false
}

const submitForm = async () => {
    formSubmitted.value = true
    if (isFormInvalid.value) {
        shakeTrigger.value++
        return
    }

    try {
        // await authStore.loginUser(form.value)
        resetForm()
        useRouter()
            .replace('/')
            .then(() => {
                window.location.reload()
            })
    } catch (error) {
        console.error('Error sending password reset email:', error)
    }
}

onBeforeRouteLeave(() => {
    resetForm()
    return true
})
</script>
