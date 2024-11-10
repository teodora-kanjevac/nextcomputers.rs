<template>
    <div>
        <h2 :id="headingId">
            <button
                type="button"
                class="flex items-center justify-between gap-2 w-full py-1.5 px-2 mt-1 mb-2 font-medium text-sm text-left rounded hover:bg-primary-light hover:text-gray-100"
                :data-accordion-target="bodyId"
                aria-expanded="true"
                :aria-controls="bodyId">
                <span class="flex items-start">{{ category.name }}</span>
                <IndicatorDownIcon class="size-6 shrink-0" />
            </button>
        </h2>
        <div :id="bodyId" class="hidden" :aria-labelledby="headingId">
            <template v-for="subcategory in category.subcategories" :key="subcategory.id">
                <NuxtLink to="/" class="p-2 ps-6 rounded block border-b border-gray-200 font-medium text-xs xl:text-sm text-gray-800 hover:bg-gray-200">
                    {{ subcategory.name }}
                </NuxtLink>
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import IndicatorDownIcon from './icons/IndicatorDownIcon.vue'
import type { CategoryDTO } from '~/shared/types/CategoryDTO'
import { sanitizeId } from '~/composables/utils'

const props = defineProps<{
    category: CategoryDTO
}>()

const headingId = computed(() => `heading-${sanitizeId(props.category.name)}`)
const bodyId = computed(() => `body-${sanitizeId(props.category.name)}`)
</script>
