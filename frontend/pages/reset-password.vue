<template>
    <div class="min-h-screen">
        <VerificationNavBar />
        <div v-if="sharedStore.loading" class="fixed inset-0 flex flex-col items-center justify-center text-2xl">
            <Spinner class="size-10" />
            <p class="mt-6">Učitavanje...</p>
        </div>
        <div v-else>
            <div v-if="verificationSuccess">
                <ResetPassword />
            </div>
            <div v-else>
                <ResetPasswordFailure :error-message="errorMessage" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/stores/AuthStore'
import { useSharedStore } from '~/stores/SharedStore'
import ResetPassword from '~/layouts/ResetPassword.vue'

const route = useRoute()
const authStore = useAuthStore()
const sharedStore = useSharedStore()
const { updateTitle } = usePageTitle()

updateTitle('Resetovanje lozinke')

definePageMeta({
    middleware: ['login-guard'],
})

const verificationSuccess = ref(false)
const errorMessage = ref('')
sharedStore.setLoading(true)

onMounted(async () => {
    try {
        const token = route.query.token as string

        if (!token) {
            navigateTo('/')
            return
        }

        const response = await authStore.verifyPassToken(token)
        verificationSuccess.value = response.success
        errorMessage.value = response.message
    } catch (error) {
        console.error(error)
    } finally {
        sharedStore.setLoading(false)
    }
})
</script>
