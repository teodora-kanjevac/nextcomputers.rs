<template>
    <div class="flex">
        <button
            class="w-full p-2 m-3 text-gray-50 font-medium bg-primary-light hover:bg-primary-dark rounded-lg"
            @click="resetFilters">
            Resetuj filtere
        </button>
    </div>
</template>
<script setup lang="ts">
import { useFilterStore } from '~/stores/FilterStore'

const filterStore = useFilterStore()

const resetFilters = () => {
    filterStore.resetFilters()
}
</script>
