<template>
    <div>
        <section class="bg-white">
            <div
                class="max-w-screen-xl px-4 py-6 pb-14 lg:pb-20 lg:pt-11 mx-auto flex flex-col lg:flex-row items-center lg:items-center justify-center">
                <div class="w-full lg:w-1/4 hidden mb-12 ps-7 pt-12 lg:flex flex-col lg:items-start">
                    <PriceTagIcon class="size-10 sm:size-14 text-primary" />
                    <h2 class="text-left lg:text-left font-semibold text-xl sm:text-3xl mt-3 sm:mt-6">
                        Najnovije
                        <br />
                        Akcije
                    </h2>
                </div>
                <div class="w-full lg:w-3/4">
                    <section class="splide">
                        <Splide :options="options">
                            <template v-for="image in heroImages" :key="image.id">
                                <SplideSlide>
                                    <NuxtLink to="/">
                                        <img
                                            class="h-full mx-auto rounded-xl"
                                            :src="getResponsiveImageUrl(image)"
                                            :alt="image.name" />
                                    </NuxtLink>
                                </SplideSlide>
                            </template>
                        </Splide>
                    </section>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import PriceTagIcon from '~/components/icons/PriceTagIcon.vue'
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import { useMediaQuery } from '@vueuse/core'
import { heroImages } from '~/assets/static/heroImages'
import 'assets/css/splide.css'

const isSmallScreen = useMediaQuery('(max-width: 640px)')

const getResponsiveImageUrl = (image: { imageSmallUrl: any; imageBigUrl: any }) => {
    return isSmallScreen.value ? image.imageSmallUrl : image.imageBigUrl
}

const options = {
    type: 'loop',
    speed: 1500,
    autoplay: true,
    interval: 5000,
    pagination: true,
    arrows: false,
}
</script>
