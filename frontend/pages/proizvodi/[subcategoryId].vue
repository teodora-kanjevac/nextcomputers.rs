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

const route = useRoute()
const categoryStore = useCategoryStore()
const productStore = useProductStore()

const subcategoryId = parseInt(route.params.subcategoryId)

onMounted(() => {
    productStore.fetchProductsWithRatingsForCategories(subcategoryId)
    categoryStore.fetchCategories()
})
</script>
