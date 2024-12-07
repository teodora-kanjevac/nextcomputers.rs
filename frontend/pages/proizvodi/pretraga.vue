<template>
    <div>
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

const categoryStore = useCategoryStore()
const filterStore = useFilterStore()
const searchStore = useSearchStore()

onMounted(() => {
    categoryStore.fetchCategories()
    filterStore.fetchSearchFilters(searchStore.query)
    searchStore.fetchFilteredSearchResults(true)
})
</script>
