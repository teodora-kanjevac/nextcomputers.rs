<template>
    <div class="flex flex-col min-h-screen">
        <div class="flex flex-1">
            <FilterCategorySidebar />
            <div class="flex-1 px-5 lg:px-8 pt-8 pb-11 lg:py-11">
                <h2 class="font-semibold text-xl sm:text-2xl uppercase ps-0.5 pb-2 sm:pb-4 border-b-2 border-gray-200">
                    Svi proizvodi
                </h2>
                <div class="flex lg:hidden mx-0.5 py-3 mb-1 gap-2 border-b-2 border-gray-200">
                    <CategoryDrawer />
                    <FilterDrawer />
                </div>
                <div class="flex justify-start my-5 mx-0.5">
                    <span class="font-medium flex items-center me-3">Sortiraj po</span>
                    <SortDropdown />
                </div>
                <div>
                    <Spinner class="mt-32" v-if="!sharedStore.loading && productCards.length === 0" />
                    <div
                        class="grid gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 min-[2000px]:grid-cols-6">
                        <Product v-for="product in productCards" :key="product.id" :product="product" />
                    </div>
                </div>
                <ScrollToTopButton />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { ProductCardDTO } from '~/shared/types/ProductCardDTO'
import { useProductStore } from '~/stores/ProductStore'
import { useScroll } from '@vueuse/core'
import { useSharedStore } from '~/stores/SharedStore'

const sharedStore = useSharedStore()
const productStore = useProductStore()
const productCards = computed<ProductCardDTO[]>(() => productStore.productCards)

const { y } = useScroll(window)

const nearBottom = computed(() => {
    return y.value + window.innerHeight >= document.documentElement.scrollHeight - 300
})

onMounted(() => {
    watch(nearBottom, isNearBottom => {
        if (isNearBottom && !sharedStore.loading && !sharedStore.allProductsFetched) {
            productStore.fetchProductsWithRatings()
        }
    })
})
</script>
