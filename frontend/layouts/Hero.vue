<template>
    <div>
        <section class="bg-white pt-5 md:xl:pt-8">
            <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div class="mr-auto place-self-center lg:col-span-7">
                    <h1 class="max-w-2xl mb-6 text-3xl font-bold leading-none md:text-4xl xl:text-5xl text-gray-800">
                        Najsavremenija tehnologija po nenadmašnim cenama</h1>
                    <p class="max-w-2xl mb-6 font-normal text-gray-600 lg:mb-8 md:text-lg lg:text-xl">
                        Istražite naš širok asortiman proizvoda i pronađite ono što najviše odgovara vašim potrebama.</p>
                    <a href="#"
                        class="inline-flex items-center justify-center px-3 py-3 text-sm sm:px-5 sm:py-3 mr-3 sm:text-base font-medium text-center text-white rounded-lg bg-gradient-to-br from-pink-500 to-orange-400 active:bg-gradient-to-bl">
                        Pretražite proizvode
                        <ArrowRightIcon class="size-5 ml-2 -mr-1"></ArrowRightIcon>
                    </a>
                </div>
                <div class="hidden lg:col-span-5 lg:flex">
                    <NuxtImg src="hero-shopping.webp" class="xl:ml-14" alt="heroimage"/>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import ArrowRightIcon from '~/components/icons/ArrowRightIcon.vue'
</script>