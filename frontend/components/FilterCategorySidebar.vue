<template>
    <aside
        id="sidebar"
        class="bg-gray-200 z-40 lg:w-1/4 xl:w-1/5 2xl:w-1/6"
        aria-label="Sidebar za filtriranje proizvoda">
        <div class="h-[150vh] p-4 overflow-y-auto tracking-wider hidden lg:block">
            <client-only>
                <FilterCategoryTabs
                    v-model:active-tab="activeTab"
                    :aria-selected="activeTab === 'filter'"
                    aria-controls="{{ activeTab }}-tab" />

                <div id="tab">
                    <div v-if="activeTab === 'filter'" class="rounded-lg bg-gray-50">
                        <template v-if="filterCategories.length > 0">
                            <ResetFiltersButton />
                            <div class="space-y-8 p-2 pb-4">
                                <FilterCategory
                                    v-for="(filterCategory, index) in filterCategories"
                                    :key="index"
                                    :filter-category="filterCategory" />
                            </div>
                        </template>
                        <div v-else-if="!$isCategory" class="text-gray-900 text-center px-3 py-7">
                            <h2 class="text-sm font-medium">
                                Izaberite kategoriju kako biste započeli sa filtriranjem
                            </h2>
                        </div>
                        <div v-else class="text-gray-900 text-center px-3 py-7">
                            <h2 class="text-sm font-medium">Nema dostupnih filtera</h2>
                        </div>
                    </div>

                    <div v-if="activeTab === 'category'" class="px-2 py-1 rounded-lg bg-gray-50">
                        <CategoryAccordion :categories="categories" />
                    </div>
                </div>
            </client-only>
        </div>
    </aside>
</template>

<script setup lang="ts">
import type { CategoryDTO } from '~/shared/types/CategoryDTO'
import type { FilterCategoryDTO } from '~/shared/types/FilterCategoryDTO'
import { useCategoryStore } from '~/stores/CategoryStore'
import { useFilterStore } from '~/stores/FilterStore'

const { $isSearchPage, $isCategory } = useNuxtApp()

const activeTab = ref('category')

watchEffect(() => {
    if ($isCategory.value || $isSearchPage.value) {
        activeTab.value = 'filter'
    } else {
        activeTab.value = 'category'
    }
})

const categoryStore = useCategoryStore()
const filterStore = useFilterStore()

const categories = computed<CategoryDTO[]>(() => categoryStore.categories)
const filterCategories = computed<FilterCategoryDTO[]>(() => filterStore.categoryFilters)
</script>
