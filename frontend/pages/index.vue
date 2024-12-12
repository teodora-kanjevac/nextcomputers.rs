<template>
    <div>
        <InfoBanner/>
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
import { useProductStore } from '~/stores/ProductStore'
import { usePageTitle } from '~/composables/useTitle'

const productStore = useProductStore()
const { updateTitle } = usePageTitle()
updateTitle()

onMounted(() => {
    productStore.fetchShowcaseProducts()
})
</script>
