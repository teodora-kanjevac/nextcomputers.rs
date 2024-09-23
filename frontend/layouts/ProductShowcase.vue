<template>
    <div>
        <div class="mx-auto max-w-screen-xl mt-6 px-6 2xl:px-0">
            <h3 class="text-left text-xl font-semibold mb-7 mx-2 sm:text-2xl">Preporučujemo Vam</h3>
            <div
                class="relative mx-auto mb-20 max-w-screen-xl px-5 sm:px-9 pt-9 height sm:pt-2 pb-0 sm:pb-24 rounded-lg border-2 border-rose-100 bg-white shadow-sm">
                <section class="splide">
                    <Splide :options="options">
                        <template v-for="chunk in productChunks">
                            <SplideSlide>
                                <SliderProductGrid class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3" :products="chunk"/>
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

<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import 'assets/css/splide.css';

onMounted(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
});


const products = [
    { id: 1, name: 'ASUS B550-PLUS TUFASUS B550-PLUS TUF', price: '104990', image: 'ASUS B550-PLUS TUF.jpg' },
    { id: 2, name: 'Kingston 3600mhz 8gbASUS B550-PLUS TUF', price: '29990', image: 'Kingston 3600mhz 8gb.jpg' },
    { id: 3, name: 'GIGABYTE A520MASUS B550-PLUS TUF', price: '55990', image: 'GIGABYTE A520M.jpg' },
    { id: 4, name: 'Intel 14900kASUS B550-PLUS TUF', price: '15990', image: 'Intel 14900k.jpg' },
    { id: 5, name: 'R5 5500 RX 6600ASUS B550-PLUS TUF', price: '38990', image: 'R5 5500 RX 6600.jpg' },
    { id: 6, name: 'RTX 3050 VENTUS2ASUS B550-PLUS TUF', price: '77990', image: 'RTX 3050 VENTUS2.jpg' },
    { id: 7, name: 'RTX 4060 TI AEROASUS B550-PLUS TUF', price: '79990', image: 'RTX 4060 TI AERO.jpg' },
    { id: 8, name: 'RTX 4070 TUFASUS B550-PLUS TUF', price: '23990', image: 'RTX 4070 TUF.jpg' },
    { id: 9, name: 'Ryzen 5 5600xASUS B550-PLUS TUF', price: '51990', image: 'Ryzen 5 5600x.jpg' },
];


const chunkSize = ref(3);
const productChunks = ref([]);

const chunkProducts = (products, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < products.length; i += chunkSize) {
        chunks.push(products.slice(i, i + chunkSize));
    }
    return chunks;
};

const updateProductChunks = () => {
    productChunks.value = chunkProducts(products, chunkSize.value);
};

watch(chunkSize, updateProductChunks, { immediate: true });

const handleResize = () => {
    if (window.innerWidth >= 1024) {
        chunkSize.value = 3;
    } else if (window.innerWidth >= 640) {
        chunkSize.value = 2;
    } else {
        chunkSize.value = 1;
    }
};


const options = {
    type: 'loop',
    gap: '0.75em',
    breakpoints: {
        640: {
            arrows: false,
        },
    },
    speed: 700,
    autoplay: true,
    interval: 5000,
    pagination: false,
    arrows: true,
    arrowPath: 'M15.483 26.467L21.95 20 15.483 13.533a1.66 1.66 0 1 1 2.35-2.35l7.65 7.65c.65.65.65 1.7 0 2.35l-7.65 7.65a1.66 1.66 0 0 1-2.35 0c-.633-.65-.65-1.717 0-2.35z',
};
</script>

<style scoped>
@media (max-width: 640px) {
    .height {
        height: 37rem;
    }
}
</style>