<template>
    <div class="flex flex-col min-h-screen">
        <div class="flex flex-1">
            <FilterCategorySidebar />
            <div class="flex-1 px-5 lg:px-8 pt-8 pb-11 lg:py-11">
                <h2 class="font-semibold text-xl sm:text-2xl ps-0.5 pb-4">
                    Rezultati pretrage za kategoriju "{{ subcategory?.name }}"
                </h2>
                <div class="flex mx-0.5 mb-1 mt-3 gap-2">
                    <CategoryDrawer />
                    <FilterDrawer />
                </div>
                <div v-if="productStore.loading" class="text-center font-semibold text-xl text-gray-500 mt-20">
                    Ucitavanje proizvoda...
                </div>

                <div
                    v-if="!productStore.loading && productCards.length === 0"
                    class="text-center font-semibold text-xl text-gray-500 mt-20">
                    Nema proizvoda za ovu pretragu.
                </div>

                <div v-else class="grid gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                    <Product v-for="product in productCards" :key="product.id" :product="product" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { SubcategoryDTO } from '~/shared/types/CategoryDTO'
import type { ProductCardDTO } from '~/shared/types/ProductCardDTO'
import { useCategoryStore } from '~/stores/CategoryStore'
import { useProductStore } from '~/stores/ProductStore'

const { subcategoryId } = defineProps<{
    subcategoryId: number
}>()

const productStore = useProductStore()
const categoryStore = useCategoryStore()

const subcategory = computed<SubcategoryDTO | null>(() => categoryStore.subcategory)
const productCards = computed<ProductCardDTO[]>(() => productStore.productCards)

const handleScroll = () => {
    const nearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 200

    if (nearBottom && !productStore.loading && !productStore.allProductsFetched) {
        productStore.fetchProductsWithRatingsForCategories(subcategoryId)
    } else if (productStore.allProductsFetched) {
        window.removeEventListener('scroll', handleScroll)
    }
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    categoryStore.fetchSubcategoryById(subcategoryId)
})

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>
