<template>
    <div class="gallery md:max-w-xl lg:max-w-lg xl:max-w-[620px] mx-auto">
        <Splide
            :options="mainOptions"
            ref="mainSplide"
            aria-label="Glavna slika"
            class="cursor-pointer"
            @click="openModal(activeIndex)">
            <SplideSlide v-for="(imageUrl, index) in galleryImages" :key="index">
                <img
                    :src="imageUrl.image"
                    :alt="imageUrl.image"
                    class="w-full h-full aspect-[7/6] object-contain rounded-lg" />
            </SplideSlide>
            <div class="gallery-arrows">
                <button class="gallery-arrow gallery-arrow-next" @click.stop="goPrev">
                    <IndicatorLeftIcon />
                </button>
                <button class="gallery-arrow gallery-arrow-prev" @click.stop="goNext">
                    <IndicatorRightIcon />
                </button>
            </div>
        </Splide>

        <Splide :options="thumbnailOptions" ref="thumbnailSplide" aria-label="Thumbnail Slika" class="mt-3">
            <SplideSlide
                v-for="(imageUrl, index) in galleryImages"
                :key="index"
                class="rounded-md cursor-pointer transition-opacity duration-100"
                :class="{
                    'outline outline-2 outline-primary -outline-offset-2 opacity-100': isThumbnailActive(index),
                    'opacity-50 hover:opacity-80': !isThumbnailActive(index),
                }">
                <img :src="imageUrl.thumbnail" :alt="imageUrl.thumbnail" class="w-full h-full object-cover" />
            </SplideSlide>
        </Splide>
    </div>
    <ImagesModal :is-open="isModalOpen" :gallery-images="galleryImages" :initial-index="activeIndex" @close="closeModal" />
</template>

<script setup lang="ts">
import type { ImageDTO } from '~/shared/types/ImageDTO'
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import 'assets/css/splide.css'
import IndicatorLeftIcon from './icons/IndicatorLeftIcon.vue'
import IndicatorRightIcon from './icons/IndicatorRightIcon.vue'

const { galleryImages } = defineProps<{
    galleryImages: ImageDTO[]
}>()

const mainOptions = {
    type: 'fade',
    rewind: true,
    pagination: false,
    arrows: false,
}

const thumbnailOptions = {
    gap: 8,
    fixedWidth: 80,
    fixedHeight: 80,
    rewind: true,
    pagination: false,
    cover: true,
    isNavigation: true,
    arrows: false,
}

const mainSplide = ref<typeof Splide | null>(null)
const thumbnailSplide = ref<typeof Splide | null>(null)
const activeIndex = ref(0)
const isModalOpen = ref(false)

const openModal = (index: number) => {
    activeIndex.value = index
    isModalOpen.value = true
}

const closeModal = () => {
    isModalOpen.value = false
}

const isThumbnailActive = (index: number) => {
    return index === activeIndex.value
}

const updateActiveThumbnail = () => {
    if (mainSplide.value) {
        activeIndex.value = mainSplide.value.splide.index
    }
}

const goPrev = () => {
    if (mainSplide.value) {
        mainSplide.value.splide.go('<')
    }
}

const goNext = () => {
    if (mainSplide.value) {
        mainSplide.value.splide.go('>')
    }
}

onMounted(() => {
    if (mainSplide.value && thumbnailSplide.value) {
        const mainInstance = mainSplide.value.splide
        const thumbnailInstance = thumbnailSplide.value.splide

        mainInstance.sync(thumbnailInstance)

        mainInstance.on('move', updateActiveThumbnail)
    }
})
</script>
