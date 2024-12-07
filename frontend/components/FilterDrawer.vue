<template>
    <div>
        <div class="text-center lg:hidden">
            <button
                class="text-white bg-primary-light inline-flex items-center text-sm md:text-base font-medium rounded-lg px-3 py-2.5"
                type="button"
                data-drawer-target="filterDrawer"
                data-drawer-show="filterDrawer"
                aria-controls="filterDrawer">
                <FilterIcon class="size-5 me-1.5 md:size-6 md:me-3" />
                Filteri
            </button>
        </div>

        <div
            id="filterDrawer"
            class="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-80"
            tabindex="-1"
            aria-labelledby="drawer-label">
            <h5 id="drawer-label" class="inline-flex items-center mb-4 text-lg font-semibold text-gray-800">
                <FilterIcon class="size-6 me-3" />
                Filteri
            </h5>
            <button
                type="button"
                data-drawer-hide="filterDrawer"
                aria-controls="filterDrawer"
                class="text-gray-800 bg-transparent rounded-lg text-sm size-10 absolute top-2.5 end-2.5 flex items-center justify-center">
                <CloseIcon class="size-6" />
            </button>

            <div>
                <template v-if="filterCategories.length > 0">
                    <ResetFiltersButton />
                    <div class="space-y-8 p-2 pb-4">
                        <FilterCategory
                            v-for="filterCategory in filterCategories"
                            :key="filterCategory.name"
                            :filter-category="filterCategory"
                            v-model:selected-filters="selectedFilters[filterCategory.name]" />
                    </div>
                </template>
                <div v-else class="text-gray-900 text-center mt-3 px-3 py-7 border-2 border-rose-300 bg-rose-100 rounded-lg">
                    <h2 class="text-sm font-medium">
                        {{ filterErrorMessage }}
                    </h2>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import CloseIcon from './icons/CloseIcon.vue'
import FilterIcon from './icons/FilterIcon.vue'
import { useFlowbite } from '~/composables/useFlowbite'
import { destroyComponent } from '~/composables/useDestroy'
import { Drawer } from 'flowbite'
import type { DrawerOptions } from 'flowbite'
import type { FilterCategoryDTO } from '~/shared/types/FilterCategoryDTO'
import { useFilterStore } from '~/stores/FilterStore'

const { $isCategory } = useNuxtApp()

let drawer = ref<Drawer | null>(null)
const isDrawerOpen = ref(false)

const initializeFilterDrawer = () => {
    useFlowbite(() => {
        const options: DrawerOptions = {
            placement: 'left',
            backdrop: true,
            bodyScrolling: false,
            edge: false,
            edgeOffset: '',
            backdropClasses: 'bg-gray-900/50 fixed inset-0 z-30',
        }

        drawer.value = initializeDrawer('filterDrawer', options, isDrawerOpen)
    })
}

const filterStore = useFilterStore()
const filterCategories = computed<FilterCategoryDTO[]>(() => filterStore.categoryFilters)

const selectedFilters = reactive<Record<string, string[]>>({})

const filterErrorMessage = computed(() => {
    return $isCategory.value ? 'Nema dostupnih filtera' : 'Izaberite kategoriju kako biste započeli sa filtriranjem'
})

onMounted(() => {
    initializeFilterDrawer()
})

onBeforeUnmount(() => {
    destroyComponent(drawer.value)
})
</script>
