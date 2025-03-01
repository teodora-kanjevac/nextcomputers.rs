<template>
    <div>
        <Toast position="bottom-right" />
        <NavBar />
        <ProductsBySubcategory :subcategory-id="subcategoryId" />
        <Footer />
    </div>
</template>

<script setup lang="ts">
import NavBar from '~/layouts/NavBar.vue'
import Footer from '~/layouts/Footer.vue'
import ProductsBySubcategory from '~/layouts/ProductsBySubcategory.vue'
import { useCategoryStore } from '~/stores/CategoryStore'
import { useFilterStore } from '~/stores/FilterStore'
import { usePageTitle } from '~/composables/useTitle'

const route = useRoute()
const categoryStore = useCategoryStore()
const filterStore = useFilterStore()
const { updateTitle } = usePageTitle()

const subcategoryId = parseInt(route.params.subcategoryId as string)
filterStore.subcategoryId = subcategoryId

watch(
    () => categoryStore.subcategory,
    newSubcategory => {
        if (newSubcategory) {
            updateTitle(newSubcategory.name)
        }
    },
    { immediate: true }
)

onMounted(() => {
    filterStore.fetchFilteredProducts(subcategoryId)
    categoryStore.fetchCategories()
    filterStore.fetchFilters(subcategoryId)
})
</script>
