<template>
    <div>
        <NavBar />
        <PrivacyPolicy />
        <Footer />
    </div>
</template>

<script setup>
import NavBar from '~/layouts/NavBar.vue'
import Footer from '~/layouts/Footer.vue'
import PrivacyPolicy from '~/layouts/PrivacyPolicy.vue'
import { usePageTitle } from '~/composables/useTitle'

const { updateTitle } = usePageTitle()
updateTitle('Politika privatnosti')
</script>
