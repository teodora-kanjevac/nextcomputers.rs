<template>
    <div>
        <Toast position="bottom-right" />
        <NavBar />
        <Hero />
        <ShowcaseCategories />
        <ProductShowcase />
        <Footer />
    </div>
</template>

<script setup lang="ts">
import NavBar from '~/layouts/NavBar.vue'
import Hero from '~/layouts/Hero.vue'
import Footer from '~/layouts/Footer.vue'
import ProductShowcase from '~/layouts/ProductShowcase.vue'
import ShowcaseCategories from '~/layouts/ShowcaseCategories.vue'
import { useProductStore } from '~/stores/ProductStore'
import { usePageTitle } from '~/composables/useTitle'
import { useNotification } from '~/composables/useNotification'

const productStore = useProductStore()
const { updateTitle } = usePageTitle()
updateTitle()

const { showNotification } = useNotification()
const nuxtApp = useNuxtApp()

onMounted(() => {
    productStore.fetchShowcaseProducts()
    nuxtApp.hook('cart:unavailableItems' as any, () => {
        showNotification(
            'warn',
            'Proizvod obrisan!',
            'Neki proizvodi iz vaše korpe su obrisani jer su postali nedostupni.',
            7000
        )
    })
})
</script>
