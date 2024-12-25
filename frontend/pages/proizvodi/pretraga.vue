<template>
    <div>
        <Toast position="bottom-right" />
        <NavBar />
        <SearchResults />
        <Footer />
    </div>
</template>

<script setup>
import NavBar from '~/layouts/NavBar.vue'
import Footer from '~/layouts/Footer.vue'
import SearchResults from '~/layouts/SearchResults.vue'
import { useCategoryStore } from '~/stores/CategoryStore'
import { useFilterStore } from '~/stores/FilterStore'
import { useSearchStore } from '~/stores/SearchStore'
import { usePageTitle } from '~/composables/useTitle'

const route = useRoute()
const categoryStore = useCategoryStore()
const filterStore = useFilterStore()
const searchStore = useSearchStore()
const { updateTitle } = usePageTitle()

watch(
    () => route.query.q,
    query => {
        if (query) {
            updateTitle(`Rezultati pretrage: '${query}'`)
        }
    },
    { immediate: true }
)

onMounted(() => {
    categoryStore.fetchCategories()
    filterStore.fetchSearchFilters(searchStore.query)
    searchStore.fetchFilteredSearchResults(true)
})
</script>
