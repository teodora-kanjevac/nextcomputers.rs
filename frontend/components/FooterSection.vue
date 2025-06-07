<template>
    <div v-for="(section, index) in footerSections" :key="index">
        <h2 class="text-sm font-semibold tracking-wider mb-5 text-gray-200 uppercase">{{ section.title }}</h2>
        <ul class="text-gray-400">
            <li v-for="(item, index) in section.items" :key="index" class="mb-3 text-sm font-medium">
                <NuxtLink :to="{ path: item.link, hash: item.hash }" external class="hover:underline">
                    {{ item.content }}
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { getFooterSections } from '~/assets/static/footerLinks'
import { useAuthStore } from '~/stores/AuthStore'

const authStore = useAuthStore()
const footerSections = computed(() => getFooterSections(authStore.isLoggedIn))
</script>
