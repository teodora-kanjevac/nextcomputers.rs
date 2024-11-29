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
                <div v-if="filterStore.loading" class="text-center font-semibold text-xl text-gray-500 mt-20">
                    Ucitavanje proizvoda...
                </div>

                <div
                    v-if="!filterStore.loading && productCards.length === 0"
                    class="text-center font-semibold text-xl text-gray-500 mt-20">
                    Nema proizvoda za ovu pretragu.
                </div>

                <div v-else class="grid gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                    <Product v-for="product in productCards" :key="product.id" :product="product" />
                </div>
                <ScrollToTopButton />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { SubcategoryDTO } from '~/shared/types/CategoryDTO'
import type { ProductCardDTO } from '~/shared/types/ProductCardDTO'
import { useCategoryStore } from '~/stores/CategoryStore'
import { useFilterStore } from '~/stores/FilterStore'
import { useScroll } from '@vueuse/core'

const { subcategoryId } = defineProps<{
    subcategoryId: number
}>()

const categoryStore = useCategoryStore()
const filterStore = useFilterStore()

const subcategory = computed<SubcategoryDTO | null>(() => categoryStore.subcategory)
const productCards = computed<ProductCardDTO[]>(() => filterStore.filteredProducts)

const { y } = useScroll(window)

watch(
    () => filterStore.selectedFilters,
    async () => {
        await filterStore.fetchFilteredProducts(subcategoryId, true)
    },
    { deep: true }
)

const nearBottom = computed(() => {
    return y.value + window.innerHeight >= document.documentElement.scrollHeight - 300
})

onMounted(() => {
    categoryStore.fetchSubcategoryById(subcategoryId)
    watch(nearBottom, (isNearBottom) => {
        if (isNearBottom && !filterStore.loading && !filterStore.allProductsFetched) {
            filterStore.fetchFilteredProducts(subcategoryId)
        }
    })
})
</script>
