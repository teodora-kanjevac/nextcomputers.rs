<template>
    <div class="w-full bg-white lg:w-64 border font-medium rounded-lg shadow-sm pt-4 pb-3 px-3 space-y-3 h-fit">
        <div class="flex items-center">
            <div class="ms-3">
                <p class="font-medium text-lg mb-0.5">{{ userFullName }}</p>
                <p class="text-gray-500 text-sm">{{ authStore.user?.email }}</p>
            </div>
        </div>
        <div class="grid border-t pt-3 font-medium">
            <NuxtLink
                to="/profil"
                class="flex items-center w-full px-3 py-1.5 rounded-md hover:bg-gray-100"
                :class="{
                    'text-primary': activeSection === 'profile',
                    'text-gray-600 hover:text-primary': activeSection !== 'profile',
                }">
                <AccountIcon class="size-5 absolute ms-0.5 mb-0.5" />
                <span class="ps-8">Nalog</span>
            </NuxtLink>
            <NuxtLink
                to="/profil/istorija-kupovine"
                class="flex items-center w-full px-3 py-1.5 rounded-md hover:bg-gray-100"
                :class="{
                    'text-primary': activeSection === 'order-history',
                    'text-gray-600 hover:text-primary': activeSection !== 'order-history',
                }">
                <ReceiptIcon class="size-5 absolute mb-0.5" />
                <span class="ps-8">Moje porudžbine</span>
            </NuxtLink>
            <NuxtLink
                to="/profil/ocene"
                class="flex items-center w-full px-3 py-1.5 rounded-md hover:bg-gray-100"
                :class="{
                    'text-primary': activeSection === 'reviews',
                    'text-gray-600 hover:text-primary': activeSection !== 'reviews',
                }">
                <StarOutlinedIcon class="size-5 absolute mb-0.5" />
                <span class="ps-8">Moje recenzije</span>
            </NuxtLink>
            <NuxtLink
                to="/profil/lista-zelja"
                class="flex items-center w-full px-3 py-1.5 rounded-md hover:bg-gray-100"
                :class="{
                    'text-primary': activeSection === 'wishlist',
                    'text-gray-600 hover:text-primary': activeSection !== 'wishlist',
                }">
                <HeartOutlineIcon class="size-5 absolute" />
                <span class="ps-8">Lista želja</span>
            </NuxtLink>
            <!-- <NuxtLink DODAVANJE ADRESA
                to="/"
                class="flex items-center w-full px-3 py-1.5 rounded-md hover:bg-gray-100 text-gray-600 hover:text-primary">
                <PinHomeIcon class="size-6 absolute -ms-0.5 mb-0.5" />
                <span class="ps-8">Moje adrese</span>
            </NuxtLink> -->
            <!-- Prethodno pregledani proizvodi -->
        </div>
        <div class="grid pt-3 border-t">
            <!-- <NuxtLink PODESAVANJA
                to="/"
                class="flex items-center w-full px-3 py-1.5 rounded-md hover:bg-gray-100 text-gray-600 hover:text-primary">
                <SettingsIcon class="size-5 absolute mb-0.5" />
                <span class="ps-8">Podešavanja</span>
            </NuxtLink> -->
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
const route = useRoute()

const userFullName = computed<string>(() => {
    const firstName = userStore.user?.firstName?.trim() || ''
    const lastName = userStore.user?.lastName?.trim() || ''
    return `${firstName} ${lastName}`.trim()
})

const activeSection = computed(() => route.meta.section)

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
    await userStore.fetchUserFullName()
})
</script>
