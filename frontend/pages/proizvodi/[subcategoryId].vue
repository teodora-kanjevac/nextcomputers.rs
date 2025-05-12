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
import { useProductStore } from '~/stores/ProductStore'

const route = useRoute()
const categoryStore = useCategoryStore()
const filterStore = useFilterStore()
const productStore = useProductStore()
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
    filterStore.resetFilters()
    filterStore.fetchFilteredProducts(subcategoryId, true)
    categoryStore.fetchCategories()
    filterStore.fetchFilters(subcategoryId)
})
</script>
