<template>
    <div>
        <ul
            class="flex flex-row text-sm font-medium ps-5 xl:ps-0 xl:text-sm space-x-4 tracking-wide justify-center items-center">
            <NuxtLink
                to="/proizvodi"
                class="py-2 px-3 text-gray-50 hover:text-gray-300 flex flex-col items-center"
                aria-current="page">
                <ProductsIcon class="size-8 mb-1" />
                <h1>Proizvodi</h1>
            </NuxtLink>
            <NuxtLink
                to="/korpa"
                class="py-2 px-3 text-gray-50 hover:text-gray-300 flex flex-col items-center"
                aria-current="page">
                <CartWithBadge class="size-7 mb-1" />
                Vaša korpa
            </NuxtLink>
            <template v-if="authStore.isLoggedIn">
                <button
                    @click="handleLogout"
                    class="py-2 px-3 text-gray-50 hover:text-gray-300 flex flex-col items-center"
                    aria-current="page">
                    <LogInIcon class="size-7 mb-1" />
                    Odjavi se
                </button>
                <NuxtLink
                    to="/profil"
                    class="py-2 px-3 text-gray-50 hover:text-gray-300 flex flex-col items-center"
                    aria-current="page">
                    <PersonIcon class="size-7 mb-1" />
                    Vaš nalog
                </NuxtLink>
            </template>
            <template v-else>
                <NuxtLink
                    to="/login"
                    class="py-2 px-3 text-gray-50 hover:text-gray-300 flex flex-col items-center"
                    aria-current="page">
                    <LogInIcon class="size-7 mb-1" />
                    Prijavite se
                </NuxtLink>
            </template>
        </ul>
    </div>
</template>

<script setup lang="ts">
import LogInIcon from '~/components/icons/LogInIcon.vue'
import ProductsIcon from '~/components/icons/ProductsIcon.vue'
import PersonIcon from './icons/PersonIcon.vue'
import { useAuthStore } from '~/stores/AuthStore'

const authStore = useAuthStore()

const handleLogout = async () => {
    try {
        await authStore.logoutUser()
        window.location.reload()
    } catch (error) {
        console.error('Logout error:', error)
    }
}

onMounted(() => {
    authStore.getMe()
})
</script>
