<template>
    <div>
        <h2 :id="headingId">
            <button type="button"
                class="flex items-center justify-between w-full p-3 font-medium rounded hover:bg-primary-light hover:text-gray-100"
                :data-accordion-target="bodyId" aria-expanded="true" :aria-controls="bodyId">
                <span class="flex items-center">{{ props.category.name }}</span>
                <IndicatorDownIcon class="size-6" />
            </button>
        </h2>
        <div :id="bodyId" class="hidden" :aria-labelledby="headingId">
            <template v-for="subcategory in props.category.subcategories" :key="subcategory.id">
                <NuxtLink to="/" class="p-3 ps-6 rounded block text-gray-800 hover:bg-gray-200">{{ subcategory.name }}
                </NuxtLink>
            </template>
        </div>
    </div>
</template>

<script setup>
import IndicatorDownIcon from './icons/IndicatorDownIcon.vue';
import { sanitizeId } from '~/composables/utils';

const props = defineProps({
    category: {
        type: Object,
        required: true,
        validator(value) {
            return typeof value.name === 'string' &&
                Array.isArray(value.subcategories) &&
                value.subcategories.every(item => typeof item.name === 'string' && typeof item.id === 'number');
        }
    }
});

const headingId = computed(() => `heading-${sanitizeId(props.category.name)}`);
const bodyId = computed(() => `body-${sanitizeId(props.category.name)}`);
</script>
