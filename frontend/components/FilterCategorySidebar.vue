<template>
    <aside id="sidebar" class="z-40 xl:w-1/5 2xl:w-1/6" aria-label="Sidebar">
        <div class="h-full p-4 overflow-y-auto bg-gray-200 tracking-wider hidden lg:block">
            <client-only>
                <ul class="text-sm 2xl:text-base font-medium text-center text-gray-900 rounded-lg shadow sm:flex mb-3"
                    id="default-tab" data-tabs-toggle="#tab" role="tablist">

                    <li class="w-full focus-within:z-10 rounded-s-lg" role="presentation">
                        <button :class="[
                            'inline-block w-full p-3 xl:p-4 rounded-s-lg border-r border-gray-200',
                            {
                                'text-gray-100 bg-primary-light': activeTab === 'filter',
                                'bg-white hover:text-gray-700 hover:bg-gray-100': activeTab !== 'filter'
                            }
                        ]" id="filter-tab" type="button" @click="activeTab = 'filter'">
                            Filteri
                        </button>
                    </li>

                    <li class="w-full focus-within:z-10" role="presentation">
                        <button :class="[
                            'inline-block w-full p-3 xl:p-4 rounded-e-lg border-r border-gray-200',
                            {
                                'text-gray-100 bg-primary-light': activeTab === 'category',
                                'bg-white hover:text-gray-700 hover:bg-gray-100': activeTab !== 'category'
                            }
                        ]" id="category-tab" type="button" @click="activeTab = 'category'">
                            Kategorije
                        </button>
                    </li>
                </ul>

                <div id="tab">
                    <div v-if="activeTab === 'filter'" class="px-3 py-5 xl:px-4 xl:py-7 rounded-lg bg-gray-50">
                        <div class="space-y-8">
                            <template v-for="filterCategory in filterCategories" :key="filterCategory.title">
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
<script setup>
const activeTab = ref("category");
const filterCategories = [
    {
        title: 'Brend',
        filters: [
            { name: 'AMD', amount: 25 },
            { name: 'Intel', amount: 15 },
        ],
    },
    {
        title: 'Brzina memorije',
        filters: [
            { name: '3200MHz', amount: 20 },
            { name: '4800MHz', amount: 12 },
        ],
    },
    {
        title: 'Kapacitet',
        filters: [
            { name: '8GB', amount: 30 },
            { name: '16GB', amount: 25 },
            { name: '32GB', amount: 20 },
        ],
    },
    {
        title: 'Tip memorije',
        filters: [
            { name: 'DDR4', amount: 40 },
            { name: 'DDR5', amount: 30 },
        ],
    },
];
const categories = [
    {
        name: "Electronics",
        subcategories: [
            { id: 1, name: "Mobile Phones" },
            { id: 2, name: "Laptops" },
            { id: 3, name: "Cameras" }
        ]
    },
    {
        name: "Home Appliances",
        subcategories: [
            { id: 4, name: "Refrigerators" },
            { id: 5, name: "Washing Machines" },
            { id: 6, name: "Microwaves" }
        ]
    },
    {
        name: "Fashion",
        subcategories: [
            { id: 7, name: "Men's Clothing" },
            { id: 8, name: "Women's Clothing" },
            { id: 9, name: "Accessories" }
        ]
    },
    {
        name: "Books",
        subcategories: [
            { id: 10, name: "Fiction" },
            { id: 11, name: "Non-Fiction" },
            { id: 12, name: "Children's Books" }
        ]
    },
    {
        name: "Sports",
        subcategories: [
            { id: 13, name: "Fitness Equipment" },
            { id: 14, name: "Outdoor Gear" },
            { id: 15, name: "Sportswear" }
        ]
    },
    {
        name: "Toys",
        subcategories: [
            { id: 16, name: "Action Figures" },
            { id: 17, name: "Dolls" },
            { id: 18, name: "Educational Toys" }
        ]
    },
    {
        name: "Office Supplies",
        subcategories: [
            { id: 19, name: "Printers" },
            { id: 20, name: "Stationery" },
            { id: 21, name: "Office Furniture" }
        ]
    },
    {
        name: "Garden",
        subcategories: [
            { id: 22, name: "Plants" },
            { id: 23, name: "Tools" },
            { id: 24, name: "Outdoor Furniture" }
        ]
    },
    {
        name: "Automotive",
        subcategories: [
            { id: 25, name: "Car Accessories" },
            { id: 26, name: "Motorcycle Gear" },
            { id: 27, name: "Tools & Equipment" }
        ]
    },
    {
        name: "Health & Beauty",
        subcategories: [
            { id: 28, name: "Skincare" },
            { id: 29, name: "Haircare" },
            { id: 30, name: "Health Supplements" }
        ]
    }
];
</script>