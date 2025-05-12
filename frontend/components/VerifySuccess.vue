<template>
    <div class="flex flex-col justify-start items-center">
        <div
            class="mt-16 md:mt-40 3xl:mt-56 max-w-xl rounded-lg bg-white p-6 mx-5 md:mx-auto md:p-10 shadow-lg text-center font-medium">
            <div class="flex justify-center mb-5">
                <InfoIcon class="size-11 text-green-800" />
            </div>
            <h2 class="mb-6 text-xl font-bold text-gray-800 md:text-3xl">Uspešna verifikacija!</h2>
            <p class="mb-6 text-gray-600 sm:text-base text-sm leading-5 text-left">
                Vaš nalog je uspešno verifikovan. Sada možete da pristupite vašem profilu.
            </p>
            <div class="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center">
                <NuxtLink
                    to="/profil"
                    class="bg-green-700 hover:bg-green-800 text-white font-medium text-sm py-2 px-4 rounded inline-block transition-colors">
                    Pregledajte profil
                </NuxtLink>
                <NuxtLink
                    to="/"
                    class="border border-green-600 text-green-600 hover:bg-green-200 font-medium text-sm py-2 px-4 rounded inline-block transition-colors">
                    Vratite se na početnu
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import InfoIcon from './icons/InfoIcon.vue'
</script>
