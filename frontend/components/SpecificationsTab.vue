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
import type { SpecificationsDTO } from '~/shared/types/ProductDTO'

const { specs } = defineProps<{
    specs: SpecificationsDTO
}>()

const row = Object.keys(specs).map(key => ({
    label: key,
    value: specs[key],
}))
</script>
