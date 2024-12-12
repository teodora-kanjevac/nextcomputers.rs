<template>
    <div>
        <NavBar />
        <Hero />
        <ShowcaseCategories />
        <ProductShowcase />
        <Footer />
    </div>
</template>

<script setup>
import NavBar from '~/layouts/NavBar.vue'
import Hero from '~/layouts/Hero.vue'
import Footer from '~/layouts/Footer.vue'
import ProductShowcase from '~/layouts/ProductShowcase.vue'
import ShowcaseCategories from '~/layouts/ShowcaseCategories.vue'
import { usePageTitle } from '~/composables/useTitle'

const { updateTitle } = usePageTitle()
updateTitle()
</script>
