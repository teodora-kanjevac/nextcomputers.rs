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

const products: ProductCardDTO[] = [
    {
        id: 1,
        name: 'ASUS B550-PLUS TUF',
        price: 104990,
        discountPrice: 99990,
        thumbnail: '/assets/images/ASUS B550-PLUS TUF.jpg',
        ratings: {
            totalReviews: 120,
            starRatings: [
                { star: 5, amount: 60 },
                { star: 4, amount: 40 },
                { star: 3, amount: 10 },
                { star: 2, amount: 7 },
                { star: 1, amount: 3 },
            ],
        },
    },
    {
        id: 2,
        name: 'Kingston 3600mhz 8gb',
        price: 29990,
        discountPrice: 27990,
        thumbnail: '/assets/images/Kingston 3600mhz 8gb.jpg',
        ratings: {
            totalReviews: 95,
            starRatings: [
                { star: 5, amount: 55 },
                { star: 4, amount: 20 },
                { star: 3, amount: 10 },
                { star: 2, amount: 5 },
                { star: 1, amount: 5 },
            ],
        },
    },
    {
        id: 3,
        name: 'GIGABYTE A520M',
        price: 55990,
        discountPrice: 49990,
        thumbnail: '/assets/images/GIGABYTE A520M.jpg',
        ratings: {
            totalReviews: 85,
            starRatings: [
                { star: 5, amount: 40 },
                { star: 4, amount: 30 },
                { star: 3, amount: 10 },
                { star: 2, amount: 3 },
                { star: 1, amount: 2 },
            ],
        },
    },
    {
        id: 4,
        name: 'Intel 14900k',
        price: 15990,
        discountPrice: 0,
        thumbnail: '/assets/images/Intel 14900k.jpg',
        ratings: {
            totalReviews: 150,
            starRatings: [
                { star: 5, amount: 90 },
                { star: 4, amount: 30 },
                { star: 3, amount: 20 },
                { star: 2, amount: 5 },
                { star: 1, amount: 5 },
            ],
        },
    },
    {
        id: 5,
        name: 'R5 5500 RX 6600',
        price: 38990,
        discountPrice: 35990,
        thumbnail: '/assets/images/R5 5500 RX 6600.jpg',
        ratings: {
            totalReviews: 110,
            starRatings: [
                { star: 5, amount: 65 },
                { star: 4, amount: 25 },
                { star: 3, amount: 10 },
                { star: 2, amount: 5 },
                { star: 1, amount: 5 },
            ],
        },
    },
    {
        id: 6,
        name: 'RTX 3050 VENTUS2',
        price: 77990,
        discountPrice: 74990,
        thumbnail: '/assets/images/RTX 3050 VENTUS2.jpg',
        ratings: {
            totalReviews: 140,
            starRatings: [
                { star: 5, amount: 75 },
                { star: 4, amount: 40 },
                { star: 3, amount: 15 },
                { star: 2, amount: 5 },
                { star: 1, amount: 5 },
            ],
        },
    },
    {
        id: 7,
        name: 'RTX 4060 TI AERO',
        price: 79990,
        discountPrice: 0,
        thumbnail: '/assets/images/RTX 4060 TI AERO.jpg',
        ratings: {
            totalReviews: 105,
            starRatings: [
                { star: 5, amount: 50 },
                { star: 4, amount: 30 },
                { star: 3, amount: 15 },
                { star: 2, amount: 5 },
                { star: 1, amount: 5 },
            ],
        },
    },
    {
        id: 8,
        name: 'RTX 4070 TUF',
        price: 23990,
        discountPrice: 21990,
        thumbnail: '/assets/images/RTX 4070 TUF.jpg',
        ratings: {
            totalReviews: 80,
            starRatings: [
                { star: 5, amount: 30 },
                { star: 4, amount: 25 },
                { star: 3, amount: 15 },
                { star: 2, amount: 5 },
                { star: 1, amount: 5 },
            ],
        },
    },
    {
        id: 9,
        name: 'Ryzen 5 5600x',
        price: 51990,
        discountPrice: 48990,
        thumbnail: '/assets/images/Ryzen 5 5600x.jpg',
        ratings: {
            totalReviews: 110,
            starRatings: [
                { star: 5, amount: 30 },
                { star: 4, amount: 25 },
                { star: 3, amount: 20 },
                { star: 2, amount: 25 },
                { star: 1, amount: 10 },
            ],
        },
    },
]

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
    productChunks.value = chunkProducts(products, chunkSize.value)
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

watch(chunkSize, updateProductChunks, { immediate: true })

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
