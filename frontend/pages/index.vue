<template>
    <div>
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
            'Proizvod više nije dostupan',
            'Neki proizvodi iz vaše korpe više nisu dostupni, pa su uklonjeni. Hvala na razumevanju.',
            7000
        )
    })
})

onBeforeMount(() => {
    nuxtApp.hook('order:failed' as any, () => {
        showNotification('error', 'Greška pri slanju narudžbine!', 'Došlo je do problema pri slanju narudžbine.')
    })
})
</script>
