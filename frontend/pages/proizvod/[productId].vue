<template>
    <div>
        <Toast position="bottom-right" />
        <NavBar />
        <section class="py-8 bg-white md:py-16 min-h-screen">
            <div class="max-w-screen-xl px-4 mx-auto 2xl:px-0">
                <template v-if="sharedStore.loading">
                    <ProductSkeleton />
                </template>
                <template v-else>
                    <ProductDetails />
                    <ProductDetailsTabs />
                </template>
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
import { useReviewStore } from '~/stores/ReviewStore'

const route = useRoute()
const productStore = useProductStore()
const reviewStore = useReviewStore()
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

onMounted(async () => {
    await productStore.fetchProductDetails(productId)
    await reviewStore.fetchReviewsForProduct(productId)
})
</script>
