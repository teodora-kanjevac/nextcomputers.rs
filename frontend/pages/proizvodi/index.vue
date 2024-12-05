<template>
    <div>
        <NavBar />
        <MostPopularProducts />
        <Footer />
    </div>
</template>

<script setup>
import NavBar from '~/layouts/NavBar.vue'
import Footer from '~/layouts/Footer.vue'
import MostPopularProducts from '~/layouts/MostPopularProducts.vue'
import { useProductStore } from '~/stores/ProductStore'
import { useCategoryStore } from '~/stores/CategoryStore';

const categoryStore = useCategoryStore()
const productStore = useProductStore()

onMounted(() => {
    productStore.fetchProductsWithRatings()
    categoryStore.fetchCategories()
})
</script>
