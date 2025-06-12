<template>
    <div class="flex flex-col justify-start items-center">
        <div v-if="pageLoading" class="fixed inset-0 flex flex-col items-center justify-center text-2xl">
            <Spinner class="size-10" />
        </div>
        <div
            v-else
            class="mt-16 md:mt-40 3xl:mt-56 max-w-screen-md rounded-lg bg-white p-6 mx-5 md:mx-auto md:p-12 text-left shadow-lg font-medium">
            <h2 class="mb-6 text-xl font-bold text-gray-800 md:text-3xl">Verifikujte svoju email adresu</h2>
            <p class="mb-6 text-gray-600 sm:text-base text-sm leading-5">
                Poslali smo link za potvrdu na Vašu email adresu (<span class="text-primary">{{ email }}</span>). 
                Proverite inbox i kliknite na dugme u poruci kako biste potvrdili svoj nalog.
            </p>
            <p class="mb-5 text-gray-600 text-sm leading-5">
                Imate 24h da potvrdite svoj nalog. Ako ne potvrdite u tom roku, moraćete ponovo da se registrujete.
            </p>
            <p class="mb-5 text-xs sm:text-sm text-gray-600 leading-5">
                <span class="font-bold">Niste dobili email?</span>
                Proverite spam folder i "Promotions" tab u inbox-u, ili ponovo pošaljite email klikom na dugme ispod.
            </p>
            <button
                @click="resendVerification"
                class="mb-5 select-none rounded-md p-2.5 text-sm w-full sm:w-1/2 md:w-2/5 bg-primary-light disabled:contrast-75 enabled:hover:bg-rose-800 transition duration-100 font-medium text-white"
                :disabled="sharedStore.loading">
                <template v-if="sharedStore.loading">
                    <SubmitionSpinner class="size-5 flex items-center" />
                </template>
                <template v-else>Pošalji ponovo email za potvrdu</template>
            </button>
            <p class="mb-4 text-xs sm:text-sm text-gray-600 leading-5">
                Kada verifikujete svoj nalog, dobićete pun pristup svom profilu i svim njegovim funkcijama.
            </p>
            <p class="text-xs sm:text-sm text-gray-600">
                <span class="font-bold">Verifikovali ste nalog? </span>
                <a href="/" class="underline text-primary hover:text-primary-dark">Vrati se na početnu</a>
                ili idi na
                <a href="/profil" class="underline text-primary hover:text-primary-dark">profil</a>.
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/stores/AuthStore'
import { useSharedStore } from '~/stores/SharedStore'

const nuxtApp = useNuxtApp()
const authStore = useAuthStore()
const sharedStore = useSharedStore()
const { showNotification } = useNotification()

const pageLoading = ref(true)
const email = computed<string>(() => authStore.user?.email || '')

const resendVerification = async () => {
    try {
        sharedStore.setLoading(true)

        await authStore.requestVerificationMail(email.value)
       
        showNotification('success', 'Uspešno poslat email!', 'Novi verifikacioni email je poslat.')
    } catch (error: any) {
        if (error.message.includes('Too many verification attempts')) {
            showNotification('warn', 'Previše pokušaja!', 'Previše zahteva za verifikaciju. Pokušajte ponovo kasnije.')
        } else {
            showNotification('error', 'Greška', 'Došlo je do greške pri slanju emaila.')
        }
    } finally {
        sharedStore.setLoading(false)
    }
}

onMounted(async () => {
    if (nuxtApp._authCheckInProgress) {
        const checkStatus = async () => {
            if (nuxtApp._authCheckInProgress) {
                setTimeout(checkStatus, 100)
            } else {
                setTimeout(() => {
                    pageLoading.value = false
                }, 200)
            }
        }

        checkStatus()
    } else {
        pageLoading.value = false
    }
})
</script>
