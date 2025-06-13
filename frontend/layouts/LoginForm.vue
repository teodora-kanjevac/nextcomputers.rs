<template>
    <div class="min-h-screen flex flex-col md:justify-center justify-start items-center">
        <div class="flex flex-row justify-center items-center max-w-screen-lg lg:p-0 px-5 py-28 w-full gap-8">
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
                                :shakeTrigger="errors.generic.shake" />
                            <PasswordInput
                                class="mb-4"
                                label="Lozinka"
                                placeholder="••••••••"
                                :required="false"
                                v-model="form.password"
                                :showError="!passwordLoginCheck.valid && formSubmitted"
                                :errorMessage="passwordLoginCheck.message"
                                :shakeTrigger="errors.generic.shake" />

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
                                v-if="errors.invalidCredentials.active"
                                :key="'error-' + errors.invalidCredentials.shake"
                                class="p-3 mb-4 text-xs font-medium text-red-800 rounded-md bg-red-100 flex items-center animate-shake">
                                <ErrorFillIcon class="size-4 me-2 shrink-0" />
                                Korisničko ime ili lozinka nisu ispravni. Pokušajte ponovo.
                            </div>
                            <div
                                v-if="errors.rateLimited.active"
                                :key="'error-' + errors.rateLimited.shake"
                                class="p-3 mb-4 text-xs font-medium text-amber-800 rounded-md bg-amber-100 flex items-center animate-shake">
                                <TriangleDangerIcon class="size-4 me-2 shrink-0" />
                                Previše pokušaja. Pokušajte ponovo za par minuta.
                            </div>
                            <div
                                v-if="errors.expiredAccount.active"
                                :key="'error-' + errors.expiredAccount.shake"
                                class="p-3 mb-4 text-xs font-medium text-red-800 rounded-md bg-red-100 flex items-center animate-shake">
                                <ErrorFillIcon class="size-4 me-2 shrink-0" />
                                Vaš nalog je istekao jer se niste verifikovali na vreme. Možete da se registrujte se sa
                                istim mejlom ponovo za par sati.
                            </div>

                            <div class="flex items-center justify-center">
                                <button
                                    type="submit"
                                    class="w-full sm:w-2/5 flex items-center justify-center bg-primary-light text-white font-semibold py-2 rounded-md disabled:contrast-75 enabled:hover:bg-rose-800 transition duration-100"
                                    :disabled="sharedStore.loading">
                                    <template v-if="sharedStore.loading">
                                        <SubmitionSpinner class="size-6 px-5" />
                                    </template>
                                    <template v-else>
                                        <LogInIcon class="size-5 me-1.5" />
                                        Prijavi se
                                    </template>
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
import TriangleDangerIcon from '~/components/icons/TriangleDangerIcon.vue'
import { useFormValidation } from '~/composables/useFormValidation'
import { useAuthStore } from '~/stores/AuthStore'
import { useFormStore } from '~/stores/FormStore'
import { useSharedStore } from '~/stores/SharedStore'

const formStore = useFormStore()
const authStore = useAuthStore()
const sharedStore = useSharedStore()
const router = useRouter()

const form = ref(formStore.login.form)
const formSubmitted = ref(false)

const errors = ref({
    generic: { active: false, shake: 0 },
    invalidCredentials: { active: false, shake: 0 },
    expiredAccount: { active: false, shake: 0 },
    rateLimited: { active: false, shake: 0, retryAfter: 0 },
})

const { emailLoginCheck, passwordLoginCheck } = useFormValidation(form)
const isFormInvalid = computed(() => {
    return !(emailLoginCheck.value.valid && passwordLoginCheck.value.valid)
})

const resetForm = () => {
    formStore.resetLoginForm()
    formSubmitted.value = false
}

const triggerError = (errorType: keyof typeof errors.value) => {
    ;(Object.keys(errors.value) as Array<keyof typeof errors.value>).forEach(key => {
        errors.value[key].active = false
    })
    errors.value[errorType].active = true
    errors.value[errorType].shake++
}

const handleSuccessfulLogin = () => {
    resetForm()
    router.replace('/').then(() => window.location.reload())
}

const submitForm = async () => {
    formSubmitted.value = true

    if (isFormInvalid.value) {
        triggerError('generic')
        return
    }

    try {
        sharedStore.setLoading(true)
        formStore.login.form = form.value

        await authStore.loginUser(formStore.login.form)
        handleSuccessfulLogin()
    } catch (error: any) {
        if (error.message.includes('Invalid email or password')) {
            triggerError('invalidCredentials')
        } else if (error.message.includes('User account has expired')) {
            triggerError('expiredAccount')
        } else if (error.message.includes('Too many attempts')) {
            triggerError('rateLimited')
            return
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
