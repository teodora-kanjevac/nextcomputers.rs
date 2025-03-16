<template>
    <div>
        <NavBar />
        <HowToBuy />
        <Footer />
    </div>
</template>

<script setup>
import NavBar from '~/layouts/NavBar.vue'
import Footer from '~/layouts/Footer.vue'
import HowToBuy from '~/layouts/HowToBuy.vue'
import { usePageTitle } from '~/composables/useTitle'

const { updateTitle } = usePageTitle()
updateTitle('Kako kupiti proizvod')
</script>
