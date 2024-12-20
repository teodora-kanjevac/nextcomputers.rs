<template>
    <div>
        <div class="mx-auto max-w-screen-xl mt-6 px-3 2xl:px-0">
            <p class="text-left text-xl font-semibold mb-7 mx-2 sm:text-2xl">Preporučujemo Vam</p>
            <div
                class="relative mx-auto mb-20 max-w-screen-xl px-6 sm:px-9 pt-7 height sm:pt-2 pb-0 sm:pb-24 rounded-lg border-2 border-rose-100 bg-white shadow-sm">
                <section class="splide">
                    <Splide :options="options">
                        <template v-for="chunk in productChunks" :key="chunk[0]?.id">
                            <SplideSlide>
                                <SliderProductGrid class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3" :products="chunk" />
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
import { useProductStore } from '~/stores/ProductStore';

const productStore = useProductStore()
const productCards = computed<ProductCardDTO[]>(() => productStore.showcaseProductCards)

const chunkSize = ref(3)
const productChunks = ref<ProductCardDTO[][]>([])

const chunkProducts = (products: ProductCardDTO[], chunkSize: number): ProductCardDTO[][] => {
    const chunks: ProductCardDTO[][] = []
    for (let i = 0; i < products.length; i += chunkSize) {
        chunks.push(products.slice(i, i + chunkSize))
    }
    return chunks
}

const updateProductChunks = () => {
    productChunks.value = chunkProducts(productCards.value, chunkSize.value)
}

const { width } = useWindowSize()

watch(
    width,
    newWidth => {
        if (newWidth >= 1024) {
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
    updateProductChunks()
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
    speed: 1500,
    autoplay: true,
    interval: 5000,
    pagination: false,
    arrows: true,
    arrowPath:
        'M15.483 26.467L21.95 20 15.483 13.533a1.66 1.66 0 1 1 2.35-2.35l7.65 7.65c.65.65.65 1.7 0 2.35l-7.65 7.65a1.66 1.66 0 0 1-2.35 0c-.633-.65-.65-1.717 0-2.35z',
}
</script>

<style scoped>
@media (max-width: 640px) {
    .height {
        height: 35rem;
    }
}
</style>
