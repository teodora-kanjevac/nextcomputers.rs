<template>
    <div class="w-full bg-white md:w-64 border font-medium rounded-lg shadow-sm py-4 px-3 space-y-4 h-fit">
        <div class="flex items-center">
            <div class="ms-3">
                <p class="font-medium text-lg mb-0.5">{{ userFullName }}</p>
                <p class="text-gray-500 text-sm">{{ authStore.user?.email }}</p>
            </div>
        </div>
        <div class="grid border-t pt-4">
            <NuxtLink
                to="/profil"
                class="flex items-center w-full px-3 py-1.5 rounded-md hover:bg-gray-100 text-primary font-medium">
                <AccountIcon class="size-5 absolute ms-0.5 mb-0.5" />
                <span class="ps-8">Nalog</span>
            </NuxtLink>
            <NuxtLink
                to="/"
                class="flex items-center w-full px-3 py-1.5 rounded-md hover:bg-gray-100 text-gray-600 hover:text-primary">
                <ReceiptIcon class="size-5 absolute mb-0.5" />
                <span class="ps-8">Moje porudžbine</span>
            </NuxtLink>
            <NuxtLink
                to="/"
                class="flex items-center w-full px-3 py-1.5 rounded-md hover:bg-gray-100 text-gray-600 hover:text-primary">
                <StarOutlinedIcon class="size-5 absolute mb-0.5" />
                <span class="ps-8">Moje ocene</span>
            </NuxtLink>
            <NuxtLink
                to="/"
                class="flex items-center w-full px-3 py-1.5 rounded-md hover:bg-gray-100 text-gray-600 hover:text-primary">
                <HeartOutlineIcon class="size-5 absolute" />
                <span class="ps-8">Lista želja</span>
            </NuxtLink>
            <NuxtLink
                to="/"
                class="flex items-center w-full px-3 py-1.5 rounded-md hover:bg-gray-100 text-gray-600 hover:text-primary">
                <PinHomeIcon class="size-6 absolute -ms-0.5 mb-0.5" />
                <span class="ps-8">Moje adrese</span>
            </NuxtLink>
        </div>
        <div class="grid mt-4 pt-4 border-t">
            <NuxtLink
                to="/"
                class="flex items-center w-full px-3 py-1.5 rounded-md hover:bg-gray-100 text-gray-600 hover:text-primary">
                <SettingsIcon class="size-5 absolute mb-0.5" />
                <span class="ps-8">Podešavanja</span>
            </NuxtLink>
            <button
                @click="handleLogout"
                class="flex items-center w-full px-3 py-1.5 rounded-md hover:bg-red-100 text-red-600">
                <LogInIcon class="size-5 absolute -ms-0.5 mb-0.5 text-red-600" />
                <span class="ps-8 text-red-600">Odjavi se</span>
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import HeartOutlineIcon from '~/components/icons/HeartOutlineIcon.vue'
import LogInIcon from '~/components/icons/LogInIcon.vue'
import StarOutlinedIcon from '~/components/icons/StarOutlinedIcon.vue'
import { useAuthStore } from '~/stores/AuthStore'
import ReceiptIcon from '~/components/icons/ReceiptIcon.vue'
import SettingsIcon from '~/components/icons/SettingsIcon.vue'
import PinHomeIcon from '~/components/icons/PinHomeIcon.vue'
import AccountIcon from '~/components/icons/AccountIcon.vue'
import { useUserStore } from '~/stores/UserStore'

const authStore = useAuthStore()
const userStore = useUserStore()

const userFullName = computed<string>(() => {
    const firstName = userStore.user?.firstName?.trim() || ''
    const lastName = userStore.user?.lastName?.trim() || ''
    return `${firstName} ${lastName}`.trim()
})

const handleLogout = async () => {
    try {
        await authStore.logoutUser()
        useRouter()
            .replace('/')
            .then(() => {
                window.location.reload()
            })
    } catch (error) {
        console.error('Logout error:', error)
    }
}

onMounted(async () => {
    await authStore.getMe()
    await userStore.fetchUserFullName()
})
</script>
