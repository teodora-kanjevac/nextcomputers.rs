<template>
    <div class="h-1.5 w-80 rounded-full bg-gray-200">
        <div
            class="h-1.5 rounded-full"
            :class="star.percentage > 0 ? 'bg-yellow-300' : 'bg-gray-200'"
            :style="{ width: star.percentage + '%' }"></div>
    </div>
</template>

<script setup lang="ts">
const { star } = defineProps<{
    star: {
        percentage: number
        star: number
        amount: number
    }
}>()
</script>
