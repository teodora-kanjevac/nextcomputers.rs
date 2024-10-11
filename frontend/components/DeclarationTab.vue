<template>
    <div>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left">
                <tbody>
                    <DetailTabRow v-for="(item, index) in row" :key="index" :label="item.label" :value="item.value" />
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { DeclarationDTO } from '~/shared/types/ProductDTO'

const props = defineProps<{
    declaration: DeclarationDTO
}>()

const { productName, supplier, originCountry, ean } = props.declaration

const row = [
    { label: 'Naziv Artikla', value: productName },
    { label: 'Uvoznik', value: supplier },
    { label: 'Zemlja porekla', value: originCountry },
    { label: 'EAN', value: ean },
]
</script>
