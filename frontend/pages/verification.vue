<template>
    <div class="min-h-screen">
        <VerificationNavBar />
        <div v-if="sharedStore.loading" class="fixed inset-0 flex flex-col items-center justify-center text-2xl">
            <Spinner class="size-10" />
            <p class="mt-6">Verifikacija u toku...</p>
        </div>
        <div v-else>
            <div v-if="verificationSuccess">
                <VerifySuccess />
            </div>
            <div v-else>
                <VerifyFailure :error-message="errorMessage" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/stores/AuthStore'
import { useNotification } from '~/composables/useNotification'
import { useSharedStore } from '~/stores/SharedStore'

const route = useRoute()
const router = useRouter()
const authStore = useAuthStore()
const sharedStore = useSharedStore()
const { showNotification } = useNotification()
const { updateTitle } = usePageTitle()

updateTitle('Verifikacija profila')
const verificationSuccess = ref(false)
const errorMessage = ref('')
sharedStore.setLoading(true)

onMounted(async () => {
    try {
        await authStore.getMe()
        const token = route.query.token as string

        if (!token) {
            router.push('/register')
            return
        }

        const response = await authStore.verifyEmailToken(token)
        verificationSuccess.value = response.success
        errorMessage.value = response.message
    } catch (error) {
        showNotification(
            'error',
            'Greška pri verifikaciji',
            'Došlo je do greške pri verifikaciji. Molimo pokušajte ponovo.'
        )
    } finally {
        sharedStore.setLoading(false)
    }
})
</script>
