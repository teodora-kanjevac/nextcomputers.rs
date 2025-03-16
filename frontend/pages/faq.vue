<template>
    <div>
        <NavBar />
        <FAQ />
        <Footer />
    </div>
</template>

<script setup>
import NavBar from '~/layouts/NavBar.vue'
import Footer from '~/layouts/Footer.vue'
import FAQ from '~/layouts/FAQ.vue'
import { usePageTitle } from '~/composables/useTitle'

const { updateTitle } = usePageTitle()
updateTitle('Često postavljena pitanja')
</script>
