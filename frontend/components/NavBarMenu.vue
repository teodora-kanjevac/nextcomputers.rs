<template>
    <div>
        <ul class="flex flex-col p-2 mt-4 font-medium text-sm tracking-wide rounded-lg bg-gray-700">
            <li>
                <a href="/" class="flex gap-3 p-2 text-gray-100 hover:bg-gray-600 rounded">
                    <HouseOutlineIcon class="size-6" />
                    <span class="pt-1">Početna</span>
                </a>
            </li>
            <li>
                <a :href="`/proizvodi`" class="flex gap-3 p-2 text-gray-100 hover:bg-gray-600 rounded">
                    <ProductsIcon class="size-6" />
                    <span class="pt-0.5">Proizvodi</span>
                </a>
            </li>
            <li>
                <NuxtLink to="/login" class="flex gap-3 p-2 text-gray-100 hover:bg-gray-600 rounded">
                    <LogInIcon class="size-5" />
                    <span>Prijavite se</span>
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>
<script setup>
import ProductsIcon from './icons/ProductsIcon.vue'
import HouseOutlineIcon from './icons/HouseOutlineIcon.vue'
import LogInIcon from './icons/LogInIcon.vue'
</script>
