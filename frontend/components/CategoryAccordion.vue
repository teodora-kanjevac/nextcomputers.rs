<template>
    <div id="categoryAccordion" data-accordion="open">
        <CategoryAccordionItem v-for="category in categories" :key="category.name" :category="category" />
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { Accordion } from 'flowbite';
import { useFlowbite } from '~/composables/useFlowbite';
import { sanitizeId } from '~/composables/utils';
import CategoryAccordionItem from './CategoryAccordionItem.vue';

const props = defineProps({
    categories: {
        type: Array,
        required: true,
        validator(value) {
            return Array.isArray(value) && value.every(category =>
                typeof category.name === 'string' &&
                Array.isArray(category.subcategories) &&
                category.subcategories.every(subcategory =>
                    typeof subcategory.name === 'string' && typeof subcategory.id === 'number'
                )
            );
        }
    }
});

const initializeAccordion = () => {
    useFlowbite(() => {
        const accordionElement = document.getElementById('categoryAccordion');
        const accordionItems = props.categories.map(category => ({
            id: `heading-${sanitizeId(category.name)}`,
            triggerEl: document.querySelector(`#heading-${sanitizeId(category.name)}`),
            targetEl: document.querySelector(`#body-${sanitizeId(category.name)}`),
            active: false
        }));

        if (accordionElement) {
            const options = {
                alwaysOpen: true,
                activeClasses: 'bg-primary-light rounded text-gray-100',
                inactiveClasses: 'text-gray-900',
            };

            const accordion = new Accordion(accordionElement, accordionItems, options);
        }
    });
};

onMounted(() => {
    initializeAccordion();
});
</script>
