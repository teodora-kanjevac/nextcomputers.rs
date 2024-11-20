<template>
    <div>
        <div class="text-center lg:hidden">
            <button
                class="text-white bg-primary-light inline-flex items-center text-sm md:text-base font-medium rounded-lg px-3 py-2.5 mb-2"
                type="button"
                data-drawer-target="categoryDrawer"
                data-drawer-show="categoryDrawer"
                aria-controls="categoryDrawer">
                <CategoryIcon class="size-5 me-1.5 md:size-6 md:me-3" />
                Kategorije
            </button>
        </div>

        <div
            id="categoryDrawer"
            class="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-80"
            tabindex="-1"
            aria-labelledby="drawer-label">
            <h5 id="drawer-label" class="inline-flex items-center mb-4 text-lg font-semibold text-gray-800">
                <CategoryIcon class="size-6 me-3" />
                Kategorije
            </h5>
            <button
                type="button"
                data-drawer-hide="categoryDrawer"
                aria-controls="categoryDrawer"
                class="text-gray-800 bg-transparent rounded-lg text-sm size-10 absolute top-2.5 end-2.5 flex items-center justify-center">
                <CloseIcon class="size-6" />
            </button>

            <CategoryDrawerAccordion class="mt-4" v-if="isDrawerOpen" :categories="categories" />
        </div>
    </div>
</template>

<script setup lang="ts">
import CloseIcon from './icons/CloseIcon.vue'
import CategoryIcon from './icons/CategoryIcon.vue'
import { destroyComponent } from '~/composables/useDestroy'
import { initializeDrawer } from '~/composables/useDrawer'
import { useFlowbite } from '~/composables/useFlowbite'
import { Drawer } from 'flowbite'
import type { DrawerOptions } from 'flowbite'
import { useCategoryStore } from '~/stores/CategoryStore'
import type { CategoryDTO } from '~/shared/types/CategoryDTO'

let drawer = ref<Drawer | null>(null)
const isDrawerOpen = ref(false)

const initializeCategoryDrawer = () => {
    useFlowbite(() => {
        const options: DrawerOptions = {
            placement: 'left',
            backdrop: true,
            bodyScrolling: false,
            edge: false,
            edgeOffset: '',
            backdropClasses: 'bg-gray-900/50 fixed inset-0 z-30',
        }

        drawer.value = initializeDrawer('categoryDrawer', options, isDrawerOpen)
    })
}

const categoryStore = useCategoryStore()
const categories = computed<CategoryDTO[]>(() => categoryStore.categories)

onMounted(() => {
    initializeCategoryDrawer()
})

onBeforeUnmount(() => {
    destroyComponent(drawer.value)
})
</script>
