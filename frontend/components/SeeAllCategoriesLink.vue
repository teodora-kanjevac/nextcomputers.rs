<template>
    <div>
        <NuxtLink to="proizvodi" class="flex items-center text-base font-medium text-gray-900 hover:underline">
            Vidi sve kategorije
            <ArrowRightIcon class="size-4 ml-1" />
        </NuxtLink>
    </div>
</template>

<script setup>
import ArrowRightIcon from '~/components/icons/ArrowRightIcon.vue'
</script>
