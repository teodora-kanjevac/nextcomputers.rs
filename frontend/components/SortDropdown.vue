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
import { useFilterStore } from '~/stores/FilterStore'
import { useProductStore } from '~/stores/ProductStore'

const options = [
    { label: 'Ceni rastuće', sortBy: 'sale_price', order: 'asc' },
    { label: 'Ceni opadajuće', sortBy: 'sale_price', order: 'desc' },
    { label: 'Popustu', sortBy: 'discountPercentage', order: '' },
    { label: 'Oceni', sortBy: 'rating', order: '' },
    { label: 'Imenu (A-Z)', sortBy: 'name', order: 'asc' },
    { label: 'Imenu (Z-A)', sortBy: 'name', order: 'desc' },
]
const selectedOption = ref({ label: 'Izaberite opciju', sortBy: '', order: '' })

let dropdown = ref<Dropdown | null>(null)

const filterStore = useFilterStore()
const productStore = useProductStore()
const route = useRoute()

const subcategoryId = parseInt(route.params.subcategoryId as string) || null

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
    if (subcategoryId) {
        filterStore.sortBy = option.sortBy
        filterStore.order = option.order
        filterStore.fetchFilteredProducts(subcategoryId, true)
    } else {
        productStore.sortBy = option.sortBy
        productStore.order = option.order
        productStore.productCards = []
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
