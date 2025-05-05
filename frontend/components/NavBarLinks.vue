<template>
    <div>
        <ul
            class="flex flex-row text-sm font-medium ps-5 xl:ps-0 xl:text-sm space-x-4 tracking-wide justify-center items-center">
            <a
                :href="`/proizvodi`"
                class="py-2 px-3 text-gray-50 hover:text-gray-300 flex flex-col items-center"
                aria-current="page">
                <ProductsIcon class="size-8 mb-1" />
                <h1>Proizvodi</h1>
            </a>
            <a
                :href="`/korpa`"
                class="py-2 px-3 text-gray-50 hover:text-gray-300 flex flex-col items-center"
                aria-current="page">
                <CartWithBadge class="size-7 mb-1" />
                Vaša korpa
            </a>
            <NuxtLink
                to="/login"
                class="py-2 px-3 text-gray-50 hover:text-gray-300 flex flex-col items-center"
                aria-current="page">
                <LogInIcon class="size-7 mb-1" />
                Prijavite se
            </NuxtLink>
            <a
                :href="`/`"
                class="py-2 px-3 text-gray-50 hover:text-gray-300 flex flex-col items-center"
                aria-current="page">
                <PersonIcon class="size-7 mb-1" />
                Vaš nalog
            </a>
        </ul>
    </div>
</template>
<script setup>
import LogInIcon from '~/components/icons/LogInIcon.vue'
import ProductsIcon from '~/components/icons/ProductsIcon.vue'
import PersonIcon from './icons/PersonIcon.vue'
</script>
