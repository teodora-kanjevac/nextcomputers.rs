<template>
    <div>
        <ul class="flex flex-row text-sm font-medium ps-5 xl:ps-0 xl:text-base space-x-3 justify-center items-center">
            <a
                :href="`/proizvodi`"
                class="py-2 px-3 text-gray-50 hover:text-gray-300 flex flex-col items-center"
                aria-current="page">
                <ProductsIcon class="size-7" />
                Proizvodi
            </a>
            <a
                href="#"
                class="py-2 px-3 text-gray-50 hover:text-gray-300 flex flex-col items-center"
                aria-current="page">
                <CartIcon class="size-6 mb-0.5" />
                Vaša korpa
            </a>
            <a
                href="#"
                class="py-1.5 px-3 text-gray-50 rounded-md bg-primary-light active:bg-primary flex flex-col items-center"
                aria-current="page">
                <LogInIcon class="size-6 mb-0.5" />
                Prijavite se
            </a>
        </ul>
    </div>
</template>
<script setup>
import LogInIcon from '~/components/icons/LogInIcon.vue'
import CartIcon from '~/components/icons/CartIcon.vue'
import ProductsIcon from '~/components/icons/ProductsIcon.vue'
</script>
