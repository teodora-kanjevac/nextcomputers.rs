<template>
    <div>
        <div class="text-center lg:hidden">
            <button
                class="text-white bg-primary-light inline-flex items-center text-sm md:text-base font-medium rounded-lg px-3 py-2.5 mb-2"
                type="button" data-drawer-target="categoryDrawer" data-drawer-show="categoryDrawer"
                aria-controls="categoryDrawer">
                <CategoryIcon class="size-5 me-1.5 md:size-6 md:me-3"/>
                Kategorije
            </button>
        </div>

        <div id="categoryDrawer"
            class="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-80"
            tabindex="-1" aria-labelledby="drawer-label">
            <h5 id="drawer-label" class="inline-flex items-center mb-4 text-lg font-semibold text-gray-800">
                <CategoryIcon class="size-6 me-3" />
                Kategorije
            </h5>
            <button type="button" data-drawer-hide="categoryDrawer" aria-controls="categoryDrawer"
                class="text-gray-800 bg-transparent rounded-lg text-sm size-10 absolute top-2.5 end-2.5 flex items-center justify-center">
                <CloseIcon class="size-6" />
            </button>

            <CategoryDrawerAccordion class="mt-4" v-if="drawerOpen" :categories="categories" />
        </div>

    </div>
</template>
<script setup>
import CloseIcon from './icons/CloseIcon.vue';
import CategoryIcon from './icons/CategoryIcon.vue';
import { useFlowbite } from '~/composables/useFlowbite';
import { Drawer } from 'flowbite';

const drawerOpen = ref(false);

const initializeDrawer = () => {
    useFlowbite(() => {
        const targetDrawer = document.getElementById('categoryDrawer');

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

        const drawerButton = document.querySelector('[data-drawer-target="categoryDrawer"]');
        if (drawerButton) {
            drawerButton.addEventListener('click', () => {
                drawer.show();
            });
        }

        const closeButton = document.querySelector('[data-drawer-hide="categoryDrawer"]');
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