<template>
    <div class="min-h-screen">
        <VerificationNavBar />
        <EmailVerification />
    </div>
</template>

<script setup>
import EmailVerification from '~/layouts/EmailVerification.vue'

const { updateTitle } = usePageTitle()
updateTitle('Verifikacija profila')

definePageMeta({
    middleware: ['verify-email-guard'],
})
</script>
