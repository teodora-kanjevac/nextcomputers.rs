<template>
    <div>
        <h2 class="mb-6 text-sm font-medium tracking-wider text-gray-200 uppercase">{{ title }}</h2>
        <ul class="text-gray-400">
            <li v-for="(item, index) in items" :key="index" class="mb-4">
                <NuxtLink :to="item.link" class="hover:underline">{{ item.content }}</NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    items: {
        type: Array,
        required: true,
        validator(value) {
            return value.every(item => 'link' in item && 'content' in item);
        }
    }
});
</script>