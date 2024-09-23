<template>
    <div id="categoryDrawerAccordion" data-accordion="open">
        <CategoryDrawerAccordionItem v-for="category in categories" :key="category.name" :category="category" />
    </div>
</template>

<script setup>
import { Accordion } from 'flowbite';
import { useFlowbite } from '~/composables/useFlowbite';
import { sanitizeId } from '~/composables/utils';

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
        const accordionElement = document.getElementById('categoryDrawerAccordion');
        const accordionItems = props.categories.map(category => ({
            id: `drawer-heading-${sanitizeId(category.name)}`,
            triggerEl: document.querySelector(`#drawer-heading-${sanitizeId(category.name)}`),
            targetEl: document.querySelector(`#drawer-body-${sanitizeId(category.name)}`),
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
