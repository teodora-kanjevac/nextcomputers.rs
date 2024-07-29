<template>
    <div>
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <SearchIcon class="size-4 text-gray-700"></SearchIcon>
        </div>
        <input type="text" id="search-navbar"
            class="placeholder:italic placeholder:text-slate-400 block w-full ps-10 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-light focus:border-primary-light"
            placeholder="Pretraži proizvode..." />
    </div>
</template>

<script setup>
import SearchIcon from "~/components/icons/SearchIcon.vue"
</script>