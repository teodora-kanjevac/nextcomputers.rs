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

const { declaration } = defineProps<{
    declaration: DeclarationDTO
}>()

const row = [
    { label: 'Naziv Artikla', value: declaration.productName },
    { label: 'Uvoznik', value: declaration.supplier },
    { label: 'Zemlja porekla', value: declaration.originCountry },
    { label: 'EAN', value: declaration.ean },
]
</script>
