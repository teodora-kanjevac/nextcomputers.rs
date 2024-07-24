<template>
    <div>
        <Product v-for="product in products" :key="product.id" :product="product"></Product>
    </div>
</template>

<script setup>
const props = defineProps({
    products: {
        type: Array,
        required: true,
    },
});
</script>