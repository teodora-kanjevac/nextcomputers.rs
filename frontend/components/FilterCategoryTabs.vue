<template>
    <ul
        class="text-sm 2xl:text-base font-medium text-center text-gray-900 rounded-lg shadow sm:flex mb-3"
        id="default-tab"
        data-tabs-toggle="#tab"
        role="tablist">
        <li class="w-full focus-within:z-10 rounded-s-lg" role="presentation">
            <button
                :class="[
                    'inline-block w-full p-3 xl:p-4 rounded-s-lg border-r border-gray-200',
                    {
                        'text-gray-100 bg-primary-light': activeTab === 'filter',
                        'bg-white hover:text-gray-700 hover:bg-gray-100': activeTab !== 'filter',
                    },
                ]"
                :id="'filter-tab'"
                :aria-selected="activeTab === 'filter'"
                :aria-controls="'filter-tab'"
                type="button"
                @click="() => emit('update:activeTab', 'filter')">
                Filteri
            </button>
        </li>

        <li class="w-full focus-within:z-10" role="presentation">
            <button
                :class="[
                    'inline-block w-full p-3 xl:p-4 rounded-e-lg border-r border-gray-200',
                    {
                        'text-gray-100 bg-primary-light': activeTab === 'category',
                        'bg-white hover:text-gray-700 hover:bg-gray-100': activeTab !== 'category',
                    },
                ]"
                :id="'category-tab'"
                type="button"
                :aria-selected="activeTab === 'category'"
                :aria-controls="'category-tab'"
                @click="() => emit('update:activeTab', 'category')">
                Kategorije
            </button>
        </li>
    </ul>
</template>

<script setup lang="ts">
defineProps<{
    activeTab: string
}>()

const emit = defineEmits<{
    (e: 'update:activeTab', value: string): void
}>()
</script>
