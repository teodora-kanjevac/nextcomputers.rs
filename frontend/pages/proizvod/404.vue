<template>
    <div>
        <NavBar />
        <section class="flex justify-center items-center min-h-screen">
            <div class="text-center">
                <h2 class="text-8xl font-extrabold text-gray-800">404</h2>
                <p class="text-xl mt-8 text-gray-700 font-medium">Ups! Proizvod koji ste tražili više ne postoji.</p>
                <NuxtLink
                    to="/"
                    class="mt-6 inline-block text-lg text-primary underline font-medium">
                    Vrati se na početnu
                </NuxtLink>
            </div>
        </section>
        <Footer />
    </div>
</template>

<script setup lang="ts">
import NavBar from '~/layouts/NavBar.vue'
import Footer from '~/layouts/Footer.vue'
import { usePageTitle } from '~/composables/useTitle'

const { updateTitle } = usePageTitle()

updateTitle('Nepostojeći proizvod')
</script>
