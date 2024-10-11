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
                    <div v-if="activeTab === 'category'" class="p-3 rounded-lg bg-gray-50">
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

const activeTab = ref('category')

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
const categories: CategoryDTO[] = [
    {
        name: 'Electronics',
        subcategories: [
            { id: 1, name: 'Mobile Phones' },
            { id: 2, name: 'Laptops' },
            { id: 3, name: 'Cameras' },
        ],
    },
    {
        name: 'Home Appliances',
        subcategories: [
            { id: 4, name: 'Refrigerators' },
            { id: 5, name: 'Washing Machines' },
            { id: 6, name: 'Microwaves' },
        ],
    },
    {
        name: 'Fashion',
        subcategories: [
            { id: 7, name: "Men's Clothing" },
            { id: 8, name: "Women's Clothing" },
            { id: 9, name: 'Accessories' },
        ],
    },
    {
        name: 'Books',
        subcategories: [
            { id: 10, name: 'Fiction' },
            { id: 11, name: 'Non-Fiction' },
            { id: 12, name: "Children's Books" },
        ],
    },
    {
        name: 'Sports',
        subcategories: [
            { id: 13, name: 'Fitness Equipment' },
            { id: 14, name: 'Outdoor Gear' },
            { id: 15, name: 'Sportswear' },
        ],
    },
    {
        name: 'Toys',
        subcategories: [
            { id: 16, name: 'Action Figures' },
            { id: 17, name: 'Dolls' },
            { id: 18, name: 'Educational Toys' },
        ],
    },
    {
        name: 'Office Supplies',
        subcategories: [
            { id: 19, name: 'Printers' },
            { id: 20, name: 'Stationery' },
            { id: 21, name: 'Office Furniture' },
        ],
    },
    {
        name: 'Garden',
        subcategories: [
            { id: 22, name: 'Plants' },
            { id: 23, name: 'Tools' },
            { id: 24, name: 'Outdoor Furniture' },
        ],
    },
    {
        name: 'Automotive',
        subcategories: [
            { id: 25, name: 'Car Accessories' },
            { id: 26, name: 'Motorcycle Gear' },
            { id: 27, name: 'Tools & Equipment' },
        ],
    },
    {
        name: 'Health & Beauty',
        subcategories: [
            { id: 28, name: 'Skincare' },
            { id: 29, name: 'Haircare' },
            { id: 30, name: 'Health Supplements' },
        ],
    },
]
</script>
