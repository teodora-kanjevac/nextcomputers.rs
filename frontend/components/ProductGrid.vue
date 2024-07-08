<template>
    <div>
        <div class="mb-8 grid gap-16 sm:gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <Product v-for="index in 3" :key="index"></Product>
        </div>
    </div>
</template>

<script setup>
</script>