<template>
    <div>
        <NuxtLink :to="path">
            {{ title }}
        </NuxtLink>
    </div>
</template>

<script setup>
const props = defineProps({
    title: {
        title: String,
        required: false,
    },
    path: {
        path: String,
        required: true,
    },
});
</script>