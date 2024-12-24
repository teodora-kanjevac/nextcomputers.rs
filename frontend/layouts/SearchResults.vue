<template>
    <div class="flex flex-col min-h-screen">
        <div class="flex flex-1">
            <FilterCategorySidebar />
            <div class="flex-1 px-5 lg:px-8 pt-8 pb-11 lg:py-11">
                <h2 class="font-semibold text-xl sm:text-2xl ps-0.5 pb-2 sm:pb-4 border-b-2 border-gray-200">
                    Pregled proizvoda za pretragu: "{{ searchStore.query }}"
                </h2>
                <div class="flex lg:hidden mx-0.5 py-3 mb-1 gap-2 border-b-2 border-gray-200">
                    <CategoryDrawer />
                    <FilterDrawer />
                </div>
                <div class="flex justify-start my-5 mx-0.5">
                    <span class="font-medium flex items-center me-3">Sortiraj po</span>
                    <SortDropdown />
                </div>
                <div v-if="sharedStore.loading" class="text-center font-semibold text-xl text-gray-500 mt-20">
                    <Spinner class="mt-32" />
                </div>
                <div
                    v-if="!sharedStore.loading && productCards.length === 0"
                    class="text-center font-semibold text-xl text-gray-500 mt-32">
                    Nema proizvoda za ovu pretragu.
                </div>
                <div
                    v-if="productCards.length > 0"
                    class="grid gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 min-[2000px]:grid-cols-6">
                    <Product v-for="product in productCards" :key="product.id" :product="product" />
                </div>
                <ScrollToTopButton />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { ProductCardDTO } from '~/shared/types/ProductCardDTO'
import { useSearchStore } from '~/stores/SearchStore'
import { useFilterStore } from '~/stores/FilterStore'
import { useScroll } from '@vueuse/core'
import { useSharedStore } from '~/stores/SharedStore'

const sharedStore = useSharedStore()
const searchStore = useSearchStore()
const filterStore = useFilterStore()

const route = useRoute()
const router = useRouter()
const productCards = computed<ProductCardDTO[]>(() => searchStore.searchResults)

const { y } = useScroll(window)

watch(
    () => route.query.q,
    query => {
        if (!String(query).trim()) {
            router.push({ name: 'proizvodi' })
        }
        searchStore.query = query as string
        filterStore.fetchSearchFilters(query as string)
        searchStore.fetchFilteredSearchResults(true)
    },
    { immediate: true }
)

watch(
    () => filterStore.selectedFilters,
    async () => {
        searchStore.selectedFilters = filterStore.selectedFilters
        await searchStore.fetchFilteredSearchResults(true)
    },
    { deep: true }
)

const nearBottom = computed(() => {
    return y.value + window.innerHeight >= document.documentElement.scrollHeight - 300
})

onMounted(() => {
    watch(nearBottom, isNearBottom => {
        if (isNearBottom && !sharedStore.loading && !sharedStore.allProductsFetched) {
            searchStore.fetchFilteredSearchResults()
        }
    })
})
</script>
