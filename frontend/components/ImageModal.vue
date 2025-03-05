<template>
    <div
        v-if="isOpen"
        class="modal fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.8)]"
        @click="handleBackgroundClick">
        <div class="relative w-full max-w-5xl h-[85vh] flex items-center justify-center">
            <Splide :key="initialIndex" :options="modalOptions" ref="modalSplide" aria-label="Galerija">
                <SplideSlide v-for="(imageUrl, index) in galleryImages" :key="index">
                    <img
                        :src="imageUrl.image"
                        :alt="imageUrl.image"
                        class="w-full h-full object-contain aspect-[5/4] rounded-md" />
                </SplideSlide>
                <div class="modal-arrows md:flex hidden">
                    <button class="modal-arrow modal-arrow-next" @click="goPrev">
                        <IndicatorLeftIcon />
                    </button>
                    <button class="modal-arrow modal-arrow-prev" @click="goNext">
                        <IndicatorRightIcon />
                    </button>
                </div>
            </Splide>

            <button
                @click.stop="closeModal"
                class="z-50 absolute top-4 right-5 p-1 bg-zinc-300 rounded-lg shadow-sm transition-transform duration-200 hover:bg-opacity-70 hover:scale-110">
                <CloseIcon class="size-7" />
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { ImageDTO } from '~/shared/types/ImageDTO'
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import 'assets/css/splide.css'
import IndicatorLeftIcon from './icons/IndicatorLeftIcon.vue'
import IndicatorRightIcon from './icons/IndicatorRightIcon.vue'
import CloseIcon from './icons/CloseIcon.vue'

const { isOpen, galleryImages, initialIndex } = defineProps<{
    galleryImages: ImageDTO[]
    isOpen: boolean
    initialIndex: number
}>()

const emit = defineEmits(['close'])

const modalSplide = ref<typeof Splide | null>(null)

const modalOptions = computed(() => ({
    type: 'fade',
    rewind: true,
    pagination: false,
    arrows: false,
    start: initialIndex,
}))

const goPrev = () => {
    if (modalSplide.value) {
        modalSplide.value.splide.go('<')
    }
}

const goNext = () => {
    if (modalSplide.value) {
        modalSplide.value.splide.go('>')
    }
}

const closeModal = () => {
    emit('close')
}

const handleBackgroundClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement
    if (target && target.classList.contains('modal')) {
        closeModal()
    }
}

watch(
    () => isOpen,
    isOpen => {
        if (isOpen) {
            document.body.classList.add('no-scroll')
        } else {
            document.body.classList.remove('no-scroll')
        }
    }
)

onUnmounted(() => {
    document.body.classList.remove('no-scroll')
})
</script>

<style>
.no-scroll {
    overflow: hidden;
}
</style>
