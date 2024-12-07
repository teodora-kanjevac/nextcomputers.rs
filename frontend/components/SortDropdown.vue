<template>
    <div>
        <button
            id="filterDropdownButton"
            data-dropdown-toggle="filterDropdownMenu"
            class="text-gray-800 bg-gray-200 hover:bg-gray-300 border border-gray-300 font-medium rounded-lg text-sm px-2 py-1.5 w-auto text-center flex"
            type="button">
            <SortDescendingIcon class="size-5 me-2" />
            {{ selectedOption.label }}
            <IndicatorDownIcon class="size-6 ms-1 -mt-0.5" />
        </button>

        <div id="filterDropdownMenu" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
            <ul class="text-sm font-medium text-gray-800" aria-labelledby="filterDropdownButton">
                <li v-for="option in options" :key="option.label">
                    <a @click="selectOption(option)" class="block px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        {{ option.label }}
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Dropdown } from 'flowbite'
import type { DropdownOptions } from 'flowbite'
import IndicatorDownIcon from './icons/IndicatorDownIcon.vue'
import SortDescendingIcon from './icons/SortDescendingIcon.vue'
import { destroyComponent } from '~/composables/useDestroy'
import { initializeDropdown } from '~/composables/useDropdown'
import { useSharedStore } from '~/stores/SharedStore'
import { useFilterStore } from '~/stores/FilterStore'
import { useSearchStore } from '~/stores/SearchStore'
import { useProductStore } from '~/stores/ProductStore'
import { options } from '~/assets/static/sortOptions'

const { $isSearchPage, $isCategory } = useNuxtApp()

const selectedOption = ref({ label: 'Izaberite opciju', sortBy: '', order: '' })

let dropdown = ref<Dropdown | null>(null)

const sharedStore = useSharedStore()
const filterStore = useFilterStore()
const searchStore = useSearchStore()
const productStore = useProductStore()
const route = useRoute()

const subcategoryId = parseInt(route.params.subcategoryId as string)

const initializeSortDropdown = () => {
    useFlowbite(() => {
        const options: DropdownOptions = {
            placement: 'bottom',
            triggerType: 'click',
            offsetDistance: 5,
        }

        dropdown.value = initializeDropdown('filterDropdownMenu', 'filterDropdownButton', options)
    })
}

function selectOption(option: any) {
    sharedStore.setSortBy(option.sortBy)
    sharedStore.setOrder(option.order)

    if ($isSearchPage.value) {
        searchStore.fetchFilteredSearchResults(true)
    } else if ($isCategory.value) {
        filterStore.fetchFilteredProducts(subcategoryId, true)
    } else {
        productStore.fetchProductsWithRatings(true)
    }
    selectedOption.value = option
    dropdown.value?.hide()
}

onMounted(() => {
    initializeSortDropdown()
})

onBeforeUnmount(() => {
    destroyComponent(dropdown.value)
})
</script>
