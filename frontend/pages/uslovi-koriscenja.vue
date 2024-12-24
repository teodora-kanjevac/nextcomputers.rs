<template>
    <div>
        <NavBar />
        <TermsOfUse />
        <Footer />
    </div>
</template>

<script setup>
import NavBar from '~/layouts/NavBar.vue'
import Footer from '~/layouts/Footer.vue'
import { usePageTitle } from '~/composables/useTitle'
import TermsOfUse from '~/layouts/TermsOfUse.vue'

const { updateTitle } = usePageTitle()
updateTitle('Uslovi Korišćenja')
</script>
