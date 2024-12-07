<template>
    <client-only>
        <div>
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <SearchIcon @click="onSearch" class="size-4 text-gray-700" />
            </div>
            <input
                type="text"
                v-model="searchTerm"
                @keyup.enter="onSearch"
                id="search-navbar"
                class="placeholder:italic placeholder:text-slate-400 block w-full ps-10 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-light focus:border-primary-light"
                placeholder="Pretraži proizvode..." />
        </div>
    </client-only>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import SearchIcon from '~/components/icons/SearchIcon.vue'
import { useSearchStore } from '~/stores/SearchStore'

const searchTerm = ref('')
const searchStore = useSearchStore()
const router = useRouter()
const route = useRoute()

const onSearch = () => {
    if (!searchTerm.value.trim()) {
        router.push({ name: 'proizvodi' })
    } else {
        searchStore.query = searchTerm.value
        router.push({ name: 'proizvodi-pretraga', query: { q: searchTerm.value } })
    }
}

onMounted(() => {
    if (route.query.q) {
        searchTerm.value = route.query.q as string
    }
})
</script>
