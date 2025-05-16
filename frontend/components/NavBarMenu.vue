<template>
    <div>
        <ul class="flex flex-col p-2 mt-4 font-medium text-sm tracking-wide rounded-lg bg-gray-700">
            <li>
                <NuxtLink href="/" class="flex gap-2.5 p-2 text-gray-100 hover:bg-gray-600 rounded">
                    <HouseOutlineIcon class="size-6" />
                    <span class="pt-1">Početna</span>
                </NuxtLink>
            </li>
            <li>
                <NuxtLink :href="`/proizvodi`" class="flex gap-2.5 p-2 text-gray-100 hover:bg-gray-600 rounded">
                    <ProductsIcon class="size-6" />
                    <span class="pt-0.5">Proizvodi</span>
                </NuxtLink>
            </li>
            <template v-if="authStore.isLoggedIn">
                <li>
                    <NuxtLink to="/" class="flex gap-3 p-2 text-gray-100 hover:bg-gray-600 rounded">
                        <AccountIcon class="size-6 pb-0.5" />
                        <span class="pt-0.5">Vaš nalog</span>
                    </NuxtLink>
                </li>
            </template>
            <template v-else>
                <li>
                    <NuxtLink to="/login" class="flex gap-3.5 p-2 text-gray-100 hover:bg-gray-600 rounded">
                        <LogInIcon class="size-5" />
                        <span>Prijavite se</span>
                    </NuxtLink>
                </li>
            </template>
        </ul>
    </div>
</template>
<script setup>
import ProductsIcon from './icons/ProductsIcon.vue'
import HouseOutlineIcon from './icons/HouseOutlineIcon.vue'
import LogInIcon from './icons/LogInIcon.vue'
import AccountIcon from './icons/AccountIcon.vue'
import { useAuthStore } from '~/stores/AuthStore'

const authStore = useAuthStore()

onMounted(async () => {
    await authStore.getMe()
})
</script>
