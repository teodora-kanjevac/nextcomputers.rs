<template>
    <div>
        <div class="mb-4 grid gap-6 sm:grid-cols-2 md:mb-8 lg:grid-cols-3">
            <Product v-for="index in 3" :key="index"></Product>
        </div>
    </div>
</template>

<script setup>
</script>