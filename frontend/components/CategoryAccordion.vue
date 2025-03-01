<template>
    <div id="categoryAccordion" data-accordion="open">
        <CategoryAccordionItem v-for="category in categories" :key="category.name" :category="category" />
    </div>
</template>

<script setup lang="ts">
import type { CategoryDTO } from '~/shared/types/CategoryDTO'
import { useFlowbite } from '~/composables/useFlowbite'
import { sanitizeId } from '~/composables/utils'
import { initializeAccordion } from '~/composables/useAccordion'
import { destroyComponent } from '~/composables/useDestroy'
import type { AccordionOptions, AccordionItem, Accordion } from 'flowbite'

const { categories } = defineProps<{
    categories: CategoryDTO[]
}>()

let accordion: Accordion | null = null

const initializeAccordionItems = (): AccordionItem[] => {
    return categories.map(category => ({
        id: `#heading-${sanitizeId(category.name)}`,
        triggerEl: document.querySelector(`#heading-${sanitizeId(category.name)}`) as HTMLElement,
        targetEl: document.querySelector(`#body-${sanitizeId(category.name)}`) as HTMLElement,
        active: false,
    }))
}

const initializeCategoryAccordion = () => {
    useFlowbite(() => {
        const accordionItems = initializeAccordionItems()
        const options: AccordionOptions = {
            alwaysOpen: false,
            activeClasses: 'bg-primary-light rounded text-gray-100',
            inactiveClasses: 'text-gray-900',
        }

        accordion = initializeAccordion('categoryAccordion', accordionItems, options)
    })
}

const categoriesRef = ref<CategoryDTO[]>(categories)

watch(
    () => categories,
    newCategories => {
        categoriesRef.value = newCategories
        nextTick(() => {
            initializeCategoryAccordion()
        })
    }
)

onMounted(() => {
    initializeCategoryAccordion()
})

onBeforeUnmount(() => {
    destroyComponent(accordion)
})
</script>
