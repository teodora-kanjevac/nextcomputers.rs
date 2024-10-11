<template>
    <div id="categoryDrawerAccordion" data-accordion="open">
        <CategoryDrawerAccordionItem v-for="category in categories" :key="category.name" :category="category" />
    </div>
</template>

<script setup lang="ts">
import type { CategoryDTO } from '~/shared/types/CategoryDTO'
import { useFlowbite } from '~/composables/useFlowbite'
import { sanitizeId } from '~/composables/utils'
import { initializeAccordion } from '~/composables/useAccordion'
import { destroyComponent } from '~/composables/useDestroy'
import type { AccordionOptions, AccordionItem, Accordion } from 'flowbite'

const props = defineProps<{
    categories: CategoryDTO[]
}>()

let drawerAccordion: Accordion | null = null

const initializeAccordionItems = (): AccordionItem[] => {
    return props.categories.map(category => ({
        id: `#drawer-heading-${sanitizeId(category.name)}`,
        triggerEl: document.querySelector(`#drawer-heading-${sanitizeId(category.name)}`) as HTMLElement,
        targetEl: document.querySelector(`#drawer-body-${sanitizeId(category.name)}`) as HTMLElement,
        active: false,
    }))
}

const initializeDrawerAccordion = () => {
    useFlowbite(() => {
        const accordionItems = initializeAccordionItems()
        const options: AccordionOptions = {
            alwaysOpen: true,
            activeClasses: 'bg-primary-light rounded text-gray-100',
            inactiveClasses: 'text-gray-900',
        }

        drawerAccordion = initializeAccordion('categoryDrawerAccordion', accordionItems, options)
    })
}

onMounted(() => {
    initializeDrawerAccordion()
})

onBeforeUnmount(() => {
    destroyComponent(drawerAccordion)
})
</script>
