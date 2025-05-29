<template>
    <div class="space-y-3">
        <OrderHistory />
    </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/stores/AuthStore'

const authStore = useAuthStore()

onMounted(async () => {
    await authStore.getMe()
})
</script>
