<template>
    <div class="mx-3">
        <h2 class="text-gray-900 text-base 2xl:text-lg font-medium px-2 pb-2 mb-4 border-b-2 border-primary">
            {{ filterCategory.name }}
        </h2>
        <template v-for="filter in filterCategory.filters" :key="filter.name">
            <div class="flex items-center mb-2 px-2">
                <input
                    :id="`${filterCategory.name}-${filter.name}`"
                    type="checkbox"
                    :value="filter.name"
                    class="w-4 h-4 flex-shrink-0 text-primary-light no-focus-ring bg-gray-100 rounded"
                    :checked="isChecked(filterCategory.name, filter.name)"
                    @change="onFilterChange(filterCategory.name, filter.name)" />
                <label
                    :for="`${filterCategory.name}-${filter.name}`"
                    class="flex-1 ms-2 text-sm font-medium text-gray-900">
                    {{ filter.name }}
                </label>
                <span class="inline-flex items-center justify-center ms-3 text-xs font-medium text-gray-900">
                    {{ filter.amount }}
                </span>
            </div>
        </template>
    </div>
</template>

<script setup lang="ts">
import type { FilterCategoryDTO } from '~/shared/types/FilterCategoryDTO'
import { useFilterStore } from '~/stores/FilterStore';

const { filterCategory } = defineProps<{
    filterCategory: FilterCategoryDTO
}>()

const filterStore = useFilterStore()

const isChecked = (category: string, value: string): boolean => {
    return filterStore.selectedFilters[category]?.includes(value) || false
}

const onFilterChange = (category: string, value: string): void => {
    filterStore.updateFilter(category, value)
}
</script>

<style>
.no-focus-ring:focus {
    outline: none;
    box-shadow: none;
}
</style>
