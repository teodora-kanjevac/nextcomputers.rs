<template>
    <div class="min-h-screen flex flex-col md:justify-center justify-start items-center">
        <div class="flex flex-row justify-center items-center max-w-screen-lg lg:p-0 px-5 pt-10 w-full gap-8">
            <div class="w-full sm:w-2/3 lg:w-1/2 flex flex-col gap-3">
                <div>
                    <NuxtLink to="/" class="text-primary font-medium text-sm flex items-center hover:underline">
                        <ArrowLeftIcon class="size-4 me-1" />
                        Vrati se na naslovnu stranu
                    </NuxtLink>
                </div>
                <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div class="w-full md:px-8 md:py-7 p-5 space-y-4">
                        <div class="flex items-center pb-2">
                            <img class="rounded w-8" src="/assets/images/logo.webp" alt="logo" />
                            <h1 class="text-sm font-medium ps-3">nextcomputers.rs</h1>
                        </div>
                        <h2 class="text-2xl font-bold text-gray-800">Prijavite se na nalog</h2>
                        <p class="text-gray-600 text-sm">
                            Nemate nalog?
                            <NuxtLink :to="`register`" class="text-primary font-medium hover:underline">
                                Registrujte se
                            </NuxtLink>
                        </p>

                        <form @submit.prevent="submitForm">
                            <TextInput
                                class="mb-4"
                                label="Korisničko ime"
                                placeholder="email@gmail.com"
                                :required="false"
                                v-model="form.email"
                                :showError="!emailLoginCheck.valid && formSubmitted"
                                :errorMessage="emailLoginCheck.message"
                                :shakeTrigger="shakeTrigger" />
                            <PasswordInput
                                class="mb-4"
                                label="Lozinka"
                                placeholder="••••••••"
                                :required="false"
                                v-model="form.password"
                                :showError="!passwordLoginCheck.valid && formSubmitted"
                                :errorMessage="passwordLoginCheck.message"
                                :shakeTrigger="shakeTrigger" />

                            <div class="text-gray-600 flex items-center justify-between my-5">
                                <label
                                    class="text-xs text-left font-medium flex items-center gap-2 cursor-pointer select-none">
                                    <input
                                        type="checkbox"
                                        v-model="form.rememberMe"
                                        class="rounded size-4 text-primary cursor-pointer focus:outline-none focus:ring-transparent" />
                                    Zapamti me
                                </label>
                                <div>
                                    <NuxtLink
                                        to="/forgot-password"
                                        class="text-primary font-medium text-xs flex items-center hover:underline">
                                        Zaboravili ste lozinku?
                                    </NuxtLink>
                                </div>
                            </div>

                            <div
                                v-if="loginError"
                                :key="'error-' + shakeTriggerInvalidData"
                                class="p-3 mb-4 text-xs font-medium text-red-800 rounded-md bg-red-100 flex items-center animate-shake">
                                <ErrorFillIcon class="size-5 me-1.5" />
                                Korisničko ime ili lozinka nisu ispravni. Pokušajte ponovo.
                            </div>

                            <div class="flex items-center justify-center">
                                <button
                                    type="submit"
                                    class="w-full sm:w-1/2 flex items-center justify-center bg-primary-light text-white font-semibold py-2 rounded-md enabled:hover:bg-rose-800 transition duration-100">
                                    <LogInIcon class="size-5 me-1.5" />
                                    Prijavi se
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
import ErrorFillIcon from '~/components/icons/ErrorFillIcon.vue'
import LogInIcon from '~/components/icons/LogInIcon.vue'
import { useFormValidation } from '~/composables/useFormValidation'
import { useAuthStore } from '~/stores/AuthStore'
import { useFormStore } from '~/stores/FormStore'

const formStore = useFormStore()
const authStore = useAuthStore()

const form = ref(formStore.login.form)
const formSubmitted = ref(false)
const loginError = ref(false)
const shakeTrigger = ref(0)
const shakeTriggerInvalidData = ref(0)

const { emailLoginCheck, passwordLoginCheck } = useFormValidation(form)

const isFormInvalid = computed(() => {
    return !(emailLoginCheck.value.valid && passwordLoginCheck.value.valid)
})

const resetForm = () => {
    formStore.resetLoginForm()
    formSubmitted.value = false
}

const submitForm = async () => {
    formSubmitted.value = true
    if (isFormInvalid.value) {
        loginError.value = false
        shakeTrigger.value++
        return
    }

    try {
        formStore.login.form = form.value
        await authStore.loginUser(formStore.login.form)
        resetForm()
        useRouter()
            .replace('/')
            .then(() => {
                window.location.reload()
            })
    } catch (error: any) {
        if (error.message.includes('Invalid email or password')) {
            loginError.value = true
            shakeTriggerInvalidData.value++
        } else {
            console.error('Failed to log in user:', error)
        }
    }
}

onBeforeRouteLeave(() => {
    resetForm()
    return true
})
</script>
