<template>
    <div>
        <NuxtLink to="proizvodi" class="flex items-center ms-0.5 text-sm sm:text-base font-medium text-gray-900 hover:underline">
            Vidi sve kategorije
            <ArrowRightIcon class="size-4 ms-1" />
        </NuxtLink>
    </div>
</template>

<script setup>
import ArrowRightIcon from '~/components/icons/ArrowRightIcon.vue'
</script>
