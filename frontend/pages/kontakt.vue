<template>
    <div>
        <NavBar />
        <Contact />
        <Footer />
    </div>
</template>

<script setup>
import NavBar from '~/layouts/NavBar.vue'
import Footer from '~/layouts/Footer.vue'
import Contact from '~/layouts/Contact.vue'
import { usePageTitle } from '~/composables/useTitle'

const { updateTitle } = usePageTitle()
updateTitle('Kontakt')
</script>
