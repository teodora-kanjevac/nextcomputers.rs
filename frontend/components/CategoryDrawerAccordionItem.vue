<template>
    <div>
        <h2 :id="drawerHeadingId">
            <button type="button"
                class="flex items-center justify-between w-full py-1.5 px-2 mt-1 mb-2 font-medium rounded hover:bg-primary-light hover:text-gray-100"
                :data-accordion-target="drawerBodyId" aria-expanded="true" :aria-controls="drawerBodyId">
                <span class="flex items-center">{{ props.category.name }}</span>
                <IndicatorDownIcon class="size-6" />
            </button>
        </h2>
        <div :id="drawerBodyId" class="hidden" :aria-labelledby="drawerHeadingId">
            <template v-for="subcategory in props.category.subcategories" :key="subcategory.id">
                <NuxtLink to="/" @click="closeDrawer" class="p-2 ps-6 rounded block border-b border-gray-200 font-medium text-sm text-gray-800 hover:bg-gray-200">{{ subcategory.name }}
                </NuxtLink>
            </template>
        </div>
    </div>
</template>

<script setup>
import { Drawer } from 'flowbite';
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

const drawerHeadingId = computed(() => `drawer-heading-${sanitizeId(props.category.name)}`);
const drawerBodyId = computed(() => `drawer-body-${sanitizeId(props.category.name)}`);

const closeDrawer = () => {
  const drawerElement = document.getElementById('categoryDrawer');
  if (drawerElement) {
    const drawer = new Drawer(drawerElement);
    drawer.hide();
  }
};
</script>
