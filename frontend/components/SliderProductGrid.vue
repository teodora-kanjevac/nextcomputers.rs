<template>
    <div>
        <SliderProduct v-for="product in products" :key="product.id" :product="product"/>
    </div>
</template>

<script setup lang="ts">
import type { ProductDTO } from '~/shared/types/ProductDTO';

defineProps<{
    products: ProductDTO[]
}>()
</script>