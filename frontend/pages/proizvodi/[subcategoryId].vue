<template>
    <div>
        <NavBar />
        <SearchResultsSubcategories :subcategory-id="subcategoryId" />
        <Footer />
    </div>
</template>

<script setup>
import NavBar from '~/layouts/NavBar.vue'
import Footer from '~/layouts/Footer.vue'
import SearchResultsSubcategories from '~/layouts/SearchResultsSubcategories.vue'
import { useProductStore } from '~/stores/ProductStore'
import { useCategoryStore } from '~/stores/CategoryStore';
import { useFilterStore } from '~/stores/FilterStore';

const route = useRoute()
const categoryStore = useCategoryStore()
const filterStore = useFilterStore()
const productStore = useProductStore()

const subcategoryId = parseInt(route.params.subcategoryId)

onMounted(() => {
    filterStore.fetchFilteredProducts(subcategoryId)
    categoryStore.fetchCategories()
    filterStore.fetchFilters(subcategoryId)
})
</script>
