<template>
    <div>
        <SliderProduct v-for="product in products" :key="product.id" :product="product"/>
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