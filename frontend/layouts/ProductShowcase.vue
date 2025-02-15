<template>
    <div>
        <div class="mx-auto max-w-screen-xl mt-6 px-3 2xl:px-0">
            <p class="text-left text-xl font-semibold mb-5 sm:mb-7 mx-2 sm:text-2xl">Preporučujemo Vam</p>
            <div
                class="mx-auto mb-20 max-w-screen-xl p-4 sm:pt-0 sm:px-6 sm:pb-20 rounded-lg border-2 border-rose-100 bg-white shadow-sm">
                <section class="splide">
                    <Splide :options="options">
                        <template v-for="chunk in productChunks" :key="chunk[0]?.id">
                            <SplideSlide>
                                <SliderProductGrid
                                    class="grid gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                                    :products="chunk" />
                            </SplideSlide>
                        </template>
                    </Splide>
                    <div class="splide__arrows">
                        <button class="splide__arrow splide__arrow--prev"></button>
                        <button class="splide__arrow splide__arrow--next"></button>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import 'assets/css/splide.css'
import type { ProductCardDTO } from '~/shared/types/ProductCardDTO'
import { useProductStore } from '~/stores/ProductStore'
import { updateProductChunks, productChunks, chunkSize } from '~/composables/useSliderChunks'

const productStore = useProductStore()
const productCards = computed<ProductCardDTO[]>(() => productStore.showcaseProductCards)

const { width } = useWindowSize()

watch(
    width,
    newWidth => {
        if (newWidth >= 1280) {
            chunkSize.value = 4
        } else if (newWidth >= 1024) {
            chunkSize.value = 3
        } else if (newWidth >= 640) {
            chunkSize.value = 2
        } else {
            chunkSize.value = 1
        }
    },
    { immediate: true }
)

onMounted(() => {
    updateProductChunks(productCards.value)
    watch(productCards, updateProductChunks, { immediate: true })
})

const options = {
    type: 'loop',
    gap: '0.75em',
    breakpoints: {
        640: {
            arrows: false,
        },
    },
    speed: 1200,
    autoplay: true,
    interval: 5000,
    pagination: false,
    arrows: true,
    arrowPath:
        'M15.483 26.467L21.95 20 15.483 13.533a1.66 1.66 0 1 1 2.35-2.35l7.65 7.65c.65.65.65 1.7 0 2.35l-7.65 7.65a1.66 1.66 0 0 1-2.35 0c-.633-.65-.65-1.717 0-2.35z',
}
</script>
