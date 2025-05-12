<template>
    <div class="min-h-screen">
        <VerificationNavBar />
        <ForgotPassword />
    </div>
</template>

<script setup>
import ForgotPassword from '~/layouts/ForgotPassword.vue'

const { updateTitle } = usePageTitle()
updateTitle('Zaboravljena lozinka')
</script>
