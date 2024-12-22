<template>
    <div>
        <Product v-for="product in products" :key="product.id" :product="product"/>
    </div>
</template>

<script setup lang="ts">
import type { ProductCardDTO } from '~/shared/types/ProductCardDTO';

defineProps<{
    products: ProductCardDTO[]
}>()
</script>