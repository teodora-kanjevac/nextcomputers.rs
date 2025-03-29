<template>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <SearchIcon class="size-5 text-gray-700" />
        </div>
        <div class="flex w-full h-12">
            <input
                type="text"
                v-model="searchTerm"
                @keyup.enter="onSearch"
                class="placeholder:italic placeholder:text-slate-400 block w-full ps-12 pr-12 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-light focus:border-primary-light"
                placeholder="Pretraži proizvode..."
                autocomplete="off" />

            <button
                v-if="searchTerm.trim() !== ''"
                @click="onSearch"
                class="absolute inset-y-2 end-3 px-4 py-1 bg-primary-light text-white rounded-md transition duration-100 hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-light">
                Pretraži
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import SearchIcon from '~/components/icons/SearchIcon.vue'
import { useFilterStore } from '~/stores/FilterStore'
import { useSearchStore } from '~/stores/SearchStore'

const searchTerm = ref('')
const searchStore = useSearchStore()
const filterStore = useFilterStore()
const router = useRouter()
const route = useRoute()

const onSearch = () => {
    if (!searchTerm.value.trim()) {
        router.replace({ name: 'proizvodi' }).then(() => {
            window.location.reload()
        })
    } else {
        searchStore.query = searchTerm.value
        searchStore.searchResults = []
        searchStore.selectedFilters = {}
        filterStore.selectedFilters = {}
        router.replace({ name: 'proizvodi-pretraga', query: { q: searchTerm.value } }).then(() => {
            window.location.reload()
        })
    }
}

watch(
    () => route.query.q,
    newQuery => {
        searchTerm.value = (newQuery as string) || ''
    },
    { immediate: true }
)
</script>
