<template>
    <div>
        <Toast position="bottom-right" />
        <NavBar />
        <div v-if="pageLoading" class="min-h-screen flex flex-col items-center justify-center text-2xl">
            <Spinner class="size-10" />
        </div>
        <div v-else class="min-h-screen py-6 md:py-10">
            <div class="max-w-screen-2xl mx-auto px-3 sm:px-6 2xl:px-0">
                <h2 class="font-semibold text-xl sm:text-2xl mx-2 sm:mx-0 pb-2 sm:pb-4 border-b-2 border-gray-200">
                    Vaš nalog
                </h2>
                <div class="flex flex-col lg:flex-row gap-4 mt-5">
                    <AccountActionsSidebar />
                    <main class="flex-1">
                        <slot />
                    </main>
                </div>
            </div>
            <ScrollToTopButton />
        </div>
        <Footer />
    </div>
</template>

<script setup lang="ts">
import NavBar from '~/layouts/NavBar.vue'
import Footer from '~/layouts/Footer.vue'
import AccountActionsSidebar from '~/layouts/AccountActionsSidebar.vue'
import { useAuthStore } from '~/stores/AuthStore'

const pageLoading = ref(true)
const nuxtApp = useNuxtApp()
const authStore = useAuthStore()

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
