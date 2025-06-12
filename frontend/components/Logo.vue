<template>
    <div>
        <NuxtLink to="/" class="flex items-center">
            <LogoIcon class="w-14" :class="{ 'md:xl:w-16': !isScrolled }" />
            <h1 class="self-center text-base hidden lg:flex xl:text-lg pl-5">nextcomputers.rs</h1>
        </NuxtLink>
    </div>
</template>

<script setup>
import LogoIcon from './icons/LogoIcon.vue'
const { isScrolled } = useScroll()
</script>
