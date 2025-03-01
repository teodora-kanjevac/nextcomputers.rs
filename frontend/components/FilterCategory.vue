<template>
    <div class="lg:mx-3">
        <h2 class="text-gray-900 text-base 2xl:text-lg font-medium px-2 pb-2 mb-4 border-b-2 border-primary">
            {{ filterCategory.name }}
        </h2>

        <div>
            <template v-for="filter in alwaysShownFilters" :key="filter.name">
                <FilterItem :filter-category="filterCategory" :filter="filter" />
            </template>
        </div>

        <div ref="filterRef" id="filter" class="overflow-hidden">
            <template v-for="filter in remainingFilters" :key="filter.name">
                <FilterItem :filter-category="filterCategory" :filter="filter" />
            </template>
        </div>

        <div v-if="showMoreAvailable" class="px-2 mt-2">
            <button @click="toggleShowMoreFilters" class="flex text-primary text-sm font-semibold hover:underline">
                <template v-if="!isExpanded">
                    <span>Prikaži više</span>
                    <PlusIcon class="size-4 ms-0.5 mt-0.5" />
                </template>
                <template v-else>
                    <span>Prikaži manje</span>
                    <MinusIcon class="size-4 ms-0.5 mt-0.5" />
                </template>
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { FilterCategoryDTO } from '~/shared/types/FilterCategoryDTO'
import PlusIcon from './icons/PlusIcon.vue'
import MinusIcon from './icons/MinusIcon.vue'
import { useFilterStore } from '~/stores/FilterStore'

const { filterCategory } = defineProps<{
    filterCategory: FilterCategoryDTO
}>()

const filterStore = useFilterStore()
const isExpanded = ref(false)
const filterRef = ref<HTMLElement | null>(null)

const alwaysShownFilters = computed(() => filterCategory.filters.slice(0, 4))
const remainingFilters = computed(() => filterCategory.filters.slice(4))
const showMoreAvailable = computed(() => remainingFilters.value.length > 0)

const toggleShowMoreFilters = async () => {
    isExpanded.value = !isExpanded.value

    if (filterRef.value) {
        const toHeight = isExpanded.value ? filterRef.value.scrollHeight : 0
        const fromHeight = isExpanded.value ? 0 : filterRef.value.scrollHeight
        slideFilters(filterRef.value, fromHeight, toHeight, 0.25)
    }
}

watch(
    () => filterCategory.filters,
    () => {
        isExpanded.value = true
        toggleShowMoreFilters()
    }
)
</script>

<style>
#filter {
    height: 0;
}

.no-focus-ring:focus {
    outline: none;
    box-shadow: none;
}
</style>
