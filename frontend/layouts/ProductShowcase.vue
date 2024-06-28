<template>
    <div>
        <div id="custom-controls-gallery"
            class="relative mx-auto my-20 max-w-screen-xl px-10 rounded-lg border-2 border-rose-100 bg-white p-6 shadow-sm"
            data-carousel="slide">
            <div class="relative overflow-hidden rounded-lg height">
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
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                    <ProductGrid></ProductGrid>
                </div>
            </div>
            <div class="flex justify-center items-center pt-4">
                <button type="button"
                    class="flex justify-center items-center me-6 h-full cursor-pointer group focus:outline-none"
                    data-carousel-prev>
                    <span class="bg-primary-light p-1 rounded-full text-white hover:bg-primary dark:hover:text-white">
                        <svg class="size-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="m7.825 12l3.875 3.9q.275.275.288.688t-.288.712q-.275.275-.7.275t-.7-.275l-4.6-4.6q-.15-.15-.213-.325T5.426 12t.063-.375t.212-.325l4.6-4.6q.275-.275.688-.287t.712.287q.275.275.275.7t-.275.7zm6.6 0l3.875 3.9q.275.275.288.688t-.288.712q-.275.275-.7.275t-.7-.275l-4.6-4.6q-.15-.15-.213-.325T12.026 12t.063-.375t.212-.325l4.6-4.6q.275-.275.688-.287t.712.287q.275.275.275.7t-.275.7z" />
                        </svg>
                        <span class="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button"
                    class="flex justify-center items-center ms-6 h-full cursor-pointer group focus:outline-none"
                    data-carousel-next>
                    <span class="bg-primary-light p-1 rounded-full text-white hover:bg-primary dark:hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" class="size-7" viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="M9.575 12L5.7 8.1q-.275-.275-.288-.687T5.7 6.7q.275-.275.7-.275t.7.275l4.6 4.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.6 4.6q-.275.275-.687.288T5.7 17.3q-.275-.275-.275-.7t.275-.7zm6.6 0L12.3 8.1q-.275-.275-.288-.687T12.3 6.7q.275-.275.7-.275t.7.275l4.6 4.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.6 4.6q-.275.275-.687.288T12.3 17.3q-.275-.275-.275-.7t.275-.7z" />
                        </svg>
                        <span class="sr-only">Next</span>
                    </span>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
.height {
    height: 33rem;
}
</style>