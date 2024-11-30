<template>
    <div>
        <button
            id="filterDropdownButton"
            data-dropdown-toggle="filterDropdownMenu"
            class="text-gray-800 bg-gray-200 hover:bg-gray-300 border border-gray-300 font-medium rounded-lg text-sm px-2 py-1.5 w-auto text-center flex"
            type="button">
            <SortDescendingIcon class="size-5 me-2" />
            {{ selectedOption }}
            <IndicatorDownIcon class="size-6 ms-1 -mt-0.5" />
        </button>

        <div id="filterDropdownMenu" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
            <ul class="text-sm font-medium text-gray-800" aria-labelledby="filterDropdownButton">
                <li v-for="option in options" :key="option">
                    <a @click="selectOption(option)" class="block px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        {{ option }}
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

const options = ['Ceni rastuće', 'Ceni opadajuće', 'Popust', 'Ocena', 'Imenu (A-Z)', 'Imenu (Z-A)']
const selectedOption = ref('Izaberite opciju')

onMounted(() => {
    useFlowbite(() => {
        const target = document.getElementById('filterDropdownMenu') as HTMLElement | null

        const trigger = document.getElementById('filterDropdownButton') as HTMLElement | null

        const options: DropdownOptions = {
            placement: 'bottom',
            triggerType: 'click',
            offsetDistance: 5,
        }

        const dropdown = new Dropdown(target, trigger, options)
    })
})

function selectOption(option: string) {
    selectedOption.value = option
}
</script>
