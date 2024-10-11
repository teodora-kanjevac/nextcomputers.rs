<template>
    <div>
        <svg v-if="filled" xmlns="http://www.w3.org/2000/svg" class="size-5 text-yellow-300" viewBox="0 0 24 24">
            <path
                fill="currentColor"
                d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08z" />
        </svg>

        <svg
            v-else-if="half"
            class="size-5"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="133"
            height="133"
            viewBox="0 0 133 133">
            <image
                x="19"
                y="19"
                width="95"
                height="92"
                xlink:href="data:img/png;base64,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" />
        </svg>

        <svg v-else xmlns="http://www.w3.org/2000/svg" class="size-5 text-gray-300" viewBox="0 0 24 24">
            <path
                fill="currentColor"
                d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08z" />
        </svg>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    filled: Boolean
    half: Boolean
}>()
</script>
