<template>
    <div>
        <ul class="flex flex-col p-3 mt-4 font-medium text-base rounded-lg bg-gray-700">
            <li>
                <NuxtLink to="/" class="flex gap-3 p-2 text-gray-100 rounded">
                    <HouseOutlineIcon class="size-6" />
                    <span class="pt-0.5">Početna</span>
                </NuxtLink>
            </li>
            <li>
                <a :href="`/proizvodi`" class="flex gap-3 p-2 text-gray-100 hover:bg-gray-600 rounded">
                    <ProductsIcon class="size-6" />
                    <span class="pt-0.5">Proizvodi</span>
                </a>
            </li>
            <li>
                <NuxtLink to="/" class="flex gap-3 p-2 text-gray-100 rounded active:bg-primary bg-primary-light">
                    <LogInIcon class="size-6" />
                    Prijavite se
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
