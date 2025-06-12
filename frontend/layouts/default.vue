<template>
    <div>
        <Toast position="bottom-right" />
        <NuxtPage />
        <CookieNotice />
    </div>
</template>

<script setup lang="ts">
import { useToast } from 'primevue/usetoast'
import Toast from 'primevue/toast'

const toast = useToast()
provide('primevue-toast', toast)
</script>
