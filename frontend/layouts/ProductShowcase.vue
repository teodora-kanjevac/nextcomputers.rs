<template>
    <div>
        <div id="custom-controls-gallery"
            class="relative mx-auto my-20 max-w-screen-xl px-10 rounded-lg border-2 border-rose-100 bg-white p-6 shadow-sm"
            data-carousel="static">
            <div class="relative overflow-hidden rounded-lg height">
                <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
                    <ProductGrid></ProductGrid>
                </div>
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                    <ProductGrid></ProductGrid>
                </div>
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                    <ProductGrid></ProductGrid>
                </div>
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                    <ProductGrid></ProductGrid>
                </div>
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                    <ProductGrid></ProductGrid>
                </div>
            </div>
            <div class="flex justify-center items-center pt-4">
                <button type="button"
                    class="flex justify-center items-center me-8 h-full cursor-pointer group focus:outline-none"
                    data-carousel-prev>
                    <span class="bg-primary-light p-1 rounded-full text-white hover:bg-primary">
                        <IndicatorLeftIcon class="size-7"></IndicatorLeftIcon>
                        <span class="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button"
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

<script setup>
import IndicatorLeftIcon from '~/components/icons/IndicatorLeftIcon.vue';
import IndicatorRightIcon from '~/components/icons/IndicatorRightIcon.vue';
</script>

<style scoped>
.height {
    height: 33rem;
}
</style>