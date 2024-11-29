<template>
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
            class="flex-1 ms-2 text-sm font-medium text-gray-900"
            :aria-label="`Filtriraj po ${filter.name}`">
            {{ filter.name }}
        </label>
        <span class="inline-flex items-center justify-center ms-3 text-xs font-medium text-gray-900">
            {{ filter.amount }}
        </span>
    </div>
</template>
<script setup lang="ts">
import type { FilterCategoryDTO, FilterDTO } from '~/shared/types/FilterCategoryDTO';
import { useFilterStore } from '~/stores/FilterStore'

const { filterCategory, filter } = defineProps<{
    filterCategory: FilterCategoryDTO
    filter: FilterDTO
}>()

const filterStore = useFilterStore()

const isChecked = (category: string, value: string): boolean => {
    return filterStore.selectedFilters[category]?.includes(value) || false
}

const onFilterChange = (category: string, value: string): void => {
    filterStore.updateFilter(category, value)
}
</script>
