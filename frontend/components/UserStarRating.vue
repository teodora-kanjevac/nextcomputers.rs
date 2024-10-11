<template>
    <div class="flex items-center">
        <span v-for="index in 5" :key="index">
            <Star :filled="index <= rating" :half="false" />
        </span>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    rating: number
}>()
</script>
