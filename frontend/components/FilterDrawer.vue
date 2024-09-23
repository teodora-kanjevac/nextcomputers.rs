<template>
    <div>
        <div class="text-center xl:hidden">
            <button
                class="text-white bg-primary-light inline-flex items-center text-sm md:text-base font-medium rounded-lg px-3 py-2.5 mb-2"
                type="button" data-drawer-target="filterDrawer" data-drawer-show="filterDrawer"
                aria-controls="filterDrawer">
                <FilterIcon class="size-5 me-1.5 md:size-6 md:me-3" />
                Filteri
            </button>
        </div>

        <div id="filterDrawer"
            class="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-80"
            tabindex="-1" aria-labelledby="drawer-label">
            <h5 id="drawer-label" class="inline-flex items-center mb-4 text-lg font-semibold text-gray-800">
                <FilterIcon class="size-6 me-3" />
                Filteri
            </h5>
            <button type="button" data-drawer-hide="filterDrawer" aria-controls="filterDrawer"
                class="text-gray-800 bg-transparent rounded-lg text-sm size-10 absolute top-2.5 end-2.5 flex items-center justify-center">
                <CloseIcon class="size-6" />
            </button>

            <div class="space-y-8 mt-4">
                <template v-for="filterCategory in filterCategories" :key="filterCategory.title">
                    <FilterCategory :filter-category="filterCategory" />
                </template>
            </div>
        </div>

    </div>
</template>
<script setup>
import CloseIcon from './icons/CloseIcon.vue';
import FilterIcon from './icons/FilterIcon.vue';
import { useFlowbite } from '~/composables/useFlowbite';
import { Drawer } from 'flowbite';

const drawerOpen = ref(false);

const initializeDrawer = () => {
    useFlowbite(() => {
        const targetDrawer = document.getElementById('filterDrawer');

        if (!targetDrawer) {
            console.error('Drawer element not found!');
            return;
        }

        const options = {
            placement: 'left',
            backdrop: true,
            bodyScrolling: false,
            edge: false,
            edgeOffset: '',
            backdropClasses: 'bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-30',
            onShow: () => drawerOpen.value = true,
            onHide: () => drawerOpen.value = false,
        };

        const drawer = new Drawer(targetDrawer, options);

        const drawerButton = document.querySelector('[data-drawer-target="filterDrawer"]');
        if (drawerButton) {
            drawerButton.addEventListener('click', () => {
                drawer.show();
            });
        }

        const closeButton = document.querySelector('[data-drawer-hide="filterDrawer"]');
        if (closeButton) {
            closeButton.addEventListener('click', () => {
                drawer.hide();
            });
        }
    });
};

onMounted(() => {
    initializeDrawer();
});

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
</script>