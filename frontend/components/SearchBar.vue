<template>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-4 md:ps-5 pointer-events-none">
            <SearchIcon class="size-4 md:size-5 text-gray-700" />
        </div>
        <div class="flex w-full" :class="{ 'h-11': isScrolled, 'h-10 md:h-12': !isScrolled }">
            <input
                type="text"
                v-model="searchTerm"
                @keyup.enter="onSearch"
                class="placeholder:italic md:placeholder:text-base placeholder:text-sm md:text-base text-sm placeholder:text-slate-400 block w-full ps-11 md:ps-14 pr-12 text-gray-900 rounded-full border-none bg-gray-100 focus:ring-primary-light focus:border-primary-light"
                placeholder="Pretraži proizvode..."
                autocomplete="off" />

            <button
                v-if="searchTerm.trim() !== ''"
                @click="onSearch"
                class="absolute inset-y-1 md:inset-y-1.5 end-1.5 px-3 md:px-4 text-sm font-semibold bg-primary-light text-white rounded-full transition duration-100 hover:bg-rose-800 focus:ring-primary-light">
                <div class="flex justify-center items-center">
                    <SearchIcon class="size-4 md:size-3.5 md:me-2" />
                    <span class="hidden md:flex">Pretraži</span>
                </div>
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
const { isScrolled, isMobile } = useScroll()

const onSearch = () => {
    if (!searchTerm.value.trim()) {
        router.push({ name: 'proizvodi' }).then(() => {
            window.location.reload()
        })
    } else {
        searchStore.query = searchTerm.value
        searchStore.searchResults = []
        searchStore.selectedFilters = {}
        filterStore.selectedFilters = {}
        router.push({ name: 'proizvodi-pretraga', query: { q: searchTerm.value } }).then(() => {
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
