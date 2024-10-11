<template>
    <div class="flex flex-col h-full">
        <NuxtLink
            to="/"
            class="flex flex-col flex-grow p-4 sm:py-6 items-center text-center rounded-lg border border-gray-300 bg-white hover:bg-gray-50">
            <component :is="category.icon" class="mb-3 size-10 shrink-0 text-gray-700"></component>
            <span class="text-base font-semibold text-gray-900">{{ category.name }}</span>
        </NuxtLink>
    </div>
</template>

<script setup lang="ts">
import type { DefineComponent } from 'vue'

defineProps<{
    category: {
        name: string
        icon: DefineComponent
    }
}>()
</script>
