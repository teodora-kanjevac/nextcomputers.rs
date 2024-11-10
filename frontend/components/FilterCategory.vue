<template>
    <div class="mx-3">
        <h2 class="text-gray-900 text-base 2xl:text-lg font-medium px-2 pb-2 mb-4 border-b-2 border-primary">
            {{ filterCategory.name }}
        </h2>
        <template v-for="filter in filterCategory.filters" :key="filter.name">
            <div class="flex items-center mb-2 px-2">
                <input
                    :id="filter.name"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 flex-shrink-0 text-primary no-focus-ring bg-gray-100 rounded" />
                <label :for="filter.name" class="flex-1 ms-2 text-sm font-semibold text-gray-900">
                    {{ filter.name }}
                </label>
                <span class="inline-flex items-center justify-center ms-3 text-xs font-semibold text-gray-900">
                    {{ filter.amount }}
                </span>
            </div>
        </template>
    </div>
</template>

<script setup lang="ts">
import type { FilterCategoryDTO } from '~/shared/types/FilterCategoryDTO'

defineProps<{
    filterCategory: FilterCategoryDTO
}>()
</script>

<style>
.no-focus-ring:focus {
    outline: none;
    box-shadow: none;
}
</style>
