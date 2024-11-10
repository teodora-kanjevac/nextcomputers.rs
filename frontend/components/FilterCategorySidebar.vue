<template>
    <aside id="sidebar" class="z-40 xl:w-1/5 2xl:w-1/6" aria-label="Sidebar">
        <div class="h-full p-4 overflow-y-auto bg-gray-200 tracking-wider hidden lg:block">
            <client-only>
                <FilterCategoryTabs v-model:active-tab="activeTab" />

                <div id="tab">
                    <div v-if="activeTab === 'filter'" class="px-3 py-5 xl:px-4 xl:py-7 rounded-lg bg-gray-50">
                        <div class="space-y-8">
                            <template v-for="filterCategory in filterCategories" :key="filterCategory.name">
                                <FilterCategory :filter-category="filterCategory" />
                            </template>
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
import { useCategoryStore } from '~/stores/CategoryStore';

const activeTab = ref('category')

const categoryStore = useCategoryStore()

onMounted(() => {
    categoryStore.fetchCategories()
})

const categories = computed<CategoryDTO[]>(() => categoryStore.categories)

const filterCategories: FilterCategoryDTO[] = [
    {
        name: 'Brend',
        filters: [
            { name: 'AMD', amount: 25 },
            { name: 'Intel', amount: 15 },
        ],
    },
    {
        name: 'Brzina memorije',
        filters: [
            { name: '3200MHz', amount: 20 },
            { name: '4800MHz', amount: 12 },
        ],
    },
    {
        name: 'Kapacitet',
        filters: [
            { name: '8GB', amount: 30 },
            { name: '16GB', amount: 25 },
            { name: '32GB', amount: 20 },
        ],
    },
    {
        name: 'Tip memorije',
        filters: [
            { name: 'DDR4', amount: 40 },
            { name: 'DDR5', amount: 30 },
        ],
    },
]
</script>
