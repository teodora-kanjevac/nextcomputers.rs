<template>
    <Dialog
        v-model:visible="showBanner"
        :position="'bottomleft'"
        :closable="false"
        :draggable="false"
        :modal="false"
        :style="{ padding: 0 }"
        :pt="{
            root: 'w-full max-w-md rounded-lg overflow-hidden border-2 border-rose-400 m-3 lg:mx-10 lg:my-8 z-50',
            content: 'p-0',
            header: 'hidden',
        }">
        <div class="relative py-4 px-4 bg-white rounded-lg shadow-md">
            <div class="flex items-center gap-3 lg:gap-4 mb-2">
                <CookieIcon class="size-6 lg:size-8 text-yellow-600" />
                <h2 class="text-base lg:text-lg font-semibold text-gray-800">Obaveštenje o kolačićima</h2>
            </div>
            <p class="text-xs lg:text-sm text-gray-900 mt-3">
                Ova veb stranica koristi isključivo neophodne kolačiće koji omogućavaju osnovne funkcionalnosti sajta,
                kao što su čuvanje proizvoda u korpi i autentifikacija korisnika. Ne koristimo kolačiće za praćenje ili
                marketinške svrhe.
            </p>
            <div class="flex items-center text-sm lg:text-base justify-end gap-4 mt-1 lg:mt-4">
                <NuxtLink
                    :to="{ path: '/politika-privatnosti', hash: '#kolacici' }"
                    external
                    class="text-primary-light underline">
                    Saznaj više
                </NuxtLink>
                <button
                    @click="dismissBanner"
                    class="bg-primary-light lg:hover:bg-rose-800 text-white px-4 py-1 rounded transition-colors">
                    U redu
                </button>
            </div>
        </div>
    </Dialog>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Dialog from 'primevue/dialog'
import CookieIcon from './icons/CookieIcon.vue'

const showBanner = ref(false)

onMounted(() => {
    const dismissed = localStorage.getItem('cookieNoticeDismissed')
    if (!dismissed) {
        showBanner.value = true
    }
})

function dismissBanner() {
    localStorage.setItem('cookieNoticeDismissed', 'true')
    showBanner.value = false
}
</script>
