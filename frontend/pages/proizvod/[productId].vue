<template>
    <div>
        <Toast position="bottom-right" />
        <NavBar />
        <section class="py-8 bg-white md:py-16 min-h-screen">
            <div
                class="max-w-screen-xl px-4 mx-auto 2xl:px-0">
                <ProductSkeleton v-if="!sharedStore.loading" />
                <ProductDetails />
                <ProductDetailsTabs />
            </div>
        </section>
        <Footer />
    </div>
</template>

<script setup lang="ts">
import NavBar from '~/layouts/NavBar.vue'
import Footer from '~/layouts/Footer.vue'
import ProductDetails from '~/layouts/ProductDetails.vue'
import ProductDetailsTabs from '~/layouts/ProductDetailsTabs.vue'
import { useProductStore } from '~/stores/ProductStore'
import { usePageTitle } from '~/composables/useTitle'
import { useSharedStore } from '~/stores/SharedStore'

const route = useRoute()
const productStore = useProductStore()
const sharedStore = useSharedStore()
const { updateTitle } = usePageTitle()

watch(
    () => productStore.product,
    newProduct => {
        if (newProduct) {
            updateTitle(newProduct.name)
        }
    },
    { immediate: true }
)

const productId = parseInt(route.params.productId as string)

onMounted(() => {
    productStore.fetchProductDetails(productId)
    setTimeout(() => {
        sharedStore.loading = true
    }, 300)
})
</script>
