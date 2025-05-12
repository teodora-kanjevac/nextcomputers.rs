<template>
    <div>
        <Toast position="bottom-right" />
        <NavBar />
        <div v-if="pageLoading" class="min-h-screen flex flex-col items-center justify-center text-2xl">
            <Spinner class="size-10" />
        </div>
        <AccountOverview />
        <Footer />
    </div>
</template>

<script setup lang="ts">
import NavBar from '~/layouts/NavBar.vue'
import Footer from '~/layouts/Footer.vue'
import { useSharedStore } from '~/stores/SharedStore'
import { useAuthStore } from '~/stores/AuthStore'
import AccountOverview from '~/layouts/AccountOverview.vue'

const { updateTitle } = usePageTitle()
updateTitle('Vaš profil')

const sharedStore = useSharedStore()
const authStore = useAuthStore()
const nuxtApp = useNuxtApp()

const pageLoading = ref(true)

definePageMeta({
    middleware: ['profile-guard'],
})

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
        await authStore.getMe()
        pageLoading.value = false
    }
})
</script>
