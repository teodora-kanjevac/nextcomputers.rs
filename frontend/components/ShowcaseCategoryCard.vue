<template>
    <div class="flex flex-col h-full">
        <NuxtLink
            :to="category.link"
            class="flex flex-col flex-grow p-3 sm:p-4 sm:py-6 items-center text-center rounded-lg border border-gray-300 bg-white hover:bg-gray-50">
            <component :is="category.icon" class="mb-3 size-8 sm:size-10 shrink-0 text-gray-700"></component>
            <span class="text-sm font-medium sm:text-base sm:font-semibold text-gray-900">{{ category.name }}</span>
        </NuxtLink>
    </div>
</template>

<script setup lang="ts">
import { NuxtLink } from '#components';
import type { DefineComponent } from 'vue'

defineProps<{
    category: {
        name: string
        icon: DefineComponent
        link: string
    }
}>()
</script>
