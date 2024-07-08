<template>
    <div>
        <h3 class="text-center text-2xl font-medium mt-24">Preporučujemo Vam</h3>
        <div id="product-showcase"
            class="relative mx-auto my-20 max-w-screen-xl px-10 rounded-lg border-2 border-rose-100 bg-white p-6 shadow-sm"
            data-carousel="static">
            <div class="relative overflow-hidden rounded-lg height">
                <div id="carousel-item-1" data-carousel-item>
                    <ProductGrid></ProductGrid>
                </div>
                <div id="carousel-item-2" data-carousel-item>
                    <ProductGrid></ProductGrid>
                </div>
                <div id="carousel-item-3" data-carousel-item>
                    <ProductGrid></ProductGrid>
                </div>
                <div id="carousel-item-4" data-carousel-item>
                    <ProductGrid></ProductGrid>
                </div>
            </div>
            <div class="flex justify-center items-center pt-4">
                <button type="button" id="data-carousel-prev"
                    class="flex justify-center items-center me-8 h-full cursor-pointer group focus:outline-none"
                    data-carousel-prev>
                    <span class="bg-primary-light p-1 rounded-full text-white hover:bg-primary">
                        <IndicatorLeftIcon class="size-7"></IndicatorLeftIcon>
                        <span class="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" id="data-carousel-next"
                    class="flex justify-center items-center ms-8 h-full cursor-pointer group focus:outline-none"
                    data-carousel-next>
                    <span class="bg-primary-light p-1 rounded-full text-white hover:bg-primary">
                        <IndicatorRightIcon class="size-7"></IndicatorRightIcon>
                        <span class="sr-only">Next</span>
                    </span>
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import IndicatorLeftIcon from '~/components/icons/IndicatorLeftIcon.vue';
import IndicatorRightIcon from '~/components/icons/IndicatorRightIcon.vue';
import type {
    CarouselItem,
    CarouselOptions,
    CarouselInterface,
    InstanceOptions
} from 'flowbite';
import { Carousel } from 'flowbite';

onMounted(() => {
    const carouselElement = document.getElementById('product-showcase');
    const items: CarouselItem[] = [
        { position: 0, el: document.getElementById('carousel-item-1') as HTMLElement, },
        { position: 1, el: document.getElementById('carousel-item-2') as HTMLElement, },
        { position: 2, el: document.getElementById('carousel-item-3') as HTMLElement, },
        { position: 3, el: document.getElementById('carousel-item-4') as HTMLElement, },
    ];
    const options: CarouselOptions = {
        defaultPosition: 0,
        interval: 10000
    };
    const instanceOptions: InstanceOptions = {
        id: 'product-showcase',
        override: true
    };

    const carousel: CarouselInterface = new Carousel(carouselElement, items, options, instanceOptions);
    carousel.cycle();

    const prevButton = document.getElementById('data-carousel-prev') as HTMLElement;
    const nextButton = document.getElementById('data-carousel-next') as HTMLElement;
    prevButton.addEventListener('click', () => {
        carousel.prev();
    });
    nextButton.addEventListener('click', () => {
        carousel.next();
    });
});
</script>

<style scoped>
.height {
    height: 35rem;
}
</style>