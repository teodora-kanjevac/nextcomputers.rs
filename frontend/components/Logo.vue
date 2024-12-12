<template>
    <div>
        <a :href="`/`" class="flex items-center">
            <LogoIcon class="w-14 md:xl:w-16" />
            <h1 class="self-center text-base hidden lg:flex xl:text-lg pl-5">nextcomputers.rs</h1>
        </a>
    </div>
</template>

<script setup>
import LogoIcon from './icons/LogoIcon.vue'
</script>
