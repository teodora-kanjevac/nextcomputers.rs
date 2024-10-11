<template>
    <div class="flex mt-7 space-x-4 justify-center sm:mt-0">
        <a
            v-for="(icon, index) in socialIcons"
            :key="index"
            :href="icon.link"
            target="_blank"
            rel="noopener noreferrer">
            <component
                :is="icon.componentIcon"
                class="size-5 sm:size-6 text-gray-300 hover:text-primary-dark" />
        </a>
    </div>
</template>

<script setup lang="ts">
import { socialIcons } from '~/assets/static/footerLinks';
</script>
