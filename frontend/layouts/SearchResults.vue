<template>
    <div class="flex flex-col min-h-screen">
        <div class="flex flex-1">
            <FilterCategorySidebar />
            <div class="flex-1 px-5 lg:px-8 pt-8 pb-11 lg:py-11">
                <h2 class="font-semibold text-2xl ps-2 lg:ps-0.5 pb-4">Najprodavaniji proizvodi</h2>
                <div class="flex mx-1.5 mb-1 mt-3 gap-2">
                    <CategoryDrawer />
                    <FilterDrawer />
                </div>
                <div class="grid gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                    <Product v-for="product in productCards" :key="product.id" :product="product" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { ProductCardDTO } from '~/shared/types/ProductCardDTO'
import { useProductStore } from '~/stores/ProductStore'

const productStore = useProductStore()
const productCards = computed<ProductCardDTO[]>(() => productStore.productCards)

const handleScroll = () => {
    const nearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 500

    if (nearBottom && !productStore.loading) {
        productStore.fetchProductsWithRatings()
    }
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    productStore.fetchProductsWithRatings()
})

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>
