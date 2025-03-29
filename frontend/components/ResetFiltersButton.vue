<template>
    <div class="flex">
        <button
            class="w-full p-2 m-3 text-gray-50 font-medium border border-zinc-300 bg-primary-light hover:bg-primary-dark rounded-lg"
            @click="resetFilters"
            aria-label="Resetuj filtere">
            Resetuj filtere
        </button>
    </div>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useFilterStore } from '~/stores/FilterStore'

const filterStore = useFilterStore()
const route = useRoute()

const resetFilters = () => {
    filterStore.resetFilters(route.query.q as string | undefined)
}
</script>
