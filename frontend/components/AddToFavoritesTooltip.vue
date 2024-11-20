<template>
    <div>
        <button
            :id="`tooltipAddToFavoritesButton-${productId}`"
            type="button"
            class="rounded-lg m-1 p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900">
            <HeartOutlineIcon class="size-6" />
        </button>
        <div
            :id="`tooltipAddToFavoritesContent-${productId}`"
            role="tooltip"
            class="tooltip absolute z-50 invisible inline-block px-3 py-2 text-xs font-normal text-white transition-opacity duration-300 bg-gray-700 rounded-lg shadow-sm opacity-0">
            Sačuvaj proizvod
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import HeartOutlineIcon from '~/components/icons/HeartOutlineIcon.vue'
import { useFlowbite } from '~/composables/useFlowbite'
import { initializeTooltip } from '~/composables/useTooltip'
import { destroyComponent } from '~/composables/useDestroy'
import { Tooltip } from 'flowbite'
import type { TooltipOptions } from 'flowbite'

const { productId } = defineProps<{
    productId: number
}>()

let tooltip: Tooltip | null = null

const initializeFavoritesTooltip = () => {
    useFlowbite(() => {
        const tooltipElement = `tooltipAddToFavoritesContent-${productId}`
        const tooltipTrigger = `tooltipAddToFavoritesButton-${productId}`
        const options: TooltipOptions = {
            placement: 'top',
            triggerType: 'hover',
        }

        tooltip = initializeTooltip(tooltipElement, tooltipTrigger, options)
    })
}

onMounted(() => {
    initializeFavoritesTooltip()
})

onBeforeUnmount(() => {
    destroyComponent(tooltip)
})
</script>
