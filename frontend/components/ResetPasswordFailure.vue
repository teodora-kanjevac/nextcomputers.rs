<template>
    <div class="flex flex-col items-center justify-start">
        <div
            class="mx-5 mt-16 max-w-xl rounded-lg bg-white p-6 text-center font-medium shadow-lg md:mx-auto md:mt-40 md:p-10 3xl:mt-56">
            <div class="mb-5 flex justify-center">
                <CircleDangerIcon class="size-12 text-red-800" />
            </div>
            <template v-if="isTokenExpired">
                <div class="space-y-6">
                    <h2 class="text-xl font-bold text-gray-800 md:text-3xl">Link za promenu lozinke je istekao</h2>
                    <p class="text-center text-sm leading-5 text-gray-600 sm:text-base">
                        Ovaj link više nije validan. Molimo Vas da ponovo pošaljete zahtev za promenu lozinke da biste
                        dobili novi link.
                    </p>
                    <div class="flex flex-col gap-2 sm:flex-row sm:gap-4 sm:justify-center">
                        <NuxtLink
                            to="/forgot-password"
                            class="inline-block rounded bg-red-700 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-800">
                            Pošalji zahtev ponovo
                        </NuxtLink>
                        <NuxtLink
                            to="/kontakt"
                            class="inline-block rounded border border-red-600 px-4 py-2 text-sm font-medium text-red-600 transition-colors hover:bg-red-200">
                            Kontaktirajte podršku
                        </NuxtLink>
                    </div>
                </div>
            </template>
            <template v-else-if="isPassChanged">
                <div class="space-y-6">
                    <h2 class="text-xl font-bold text-gray-800 md:text-3xl">Lozinka je promenjena</h2>
                    <p class="text-center text-sm leading-5 text-gray-600 sm:text-base">
                        Vaša lozinka je promenjena. Možete se prijaviti na profil koristeći novu lozinku.
                    </p>
                    <div class="flex flex-col gap-2 sm:flex-row sm:gap-4 sm:justify-center">
                        <NuxtLink
                            to="/login"
                            class="inline-block rounded bg-primary-light px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-rose-800">
                            Prijavi se
                        </NuxtLink>
                        <NuxtLink
                            to="/"
                            class="inline-block rounded border border-primary-light px-4 py-2 text-sm font-medium text-primary-light transition-colors hover:bg-rose-100">
                            Vrati se na početnu
                        </NuxtLink>
                    </div>
                </div>
            </template>
            <template v-else>
                <div class="space-y-6">
                    <h2 class="text-xl font-bold text-gray-800 md:text-3xl">Greška u verifikaciji</h2>
                    <p class="text-center text-sm leading-5 text-gray-600 sm:text-base">Uneli ste nepostojeći token.</p>
                    <div class="flex justify-center">
                        <NuxtLink
                            to="/"
                            class="inline-block rounded bg-primary-light px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-rose-800">
                            Vrati se na početnu
                        </NuxtLink>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import CircleDangerIcon from './icons/CircleDangerIcon.vue'

const props = defineProps<{
    errorMessage: string
}>()

const isTokenExpired = computed(() => props.errorMessage.includes('Token expired'))
const isPassChanged = computed(() => props.errorMessage.includes('Password already changed'))
</script>
