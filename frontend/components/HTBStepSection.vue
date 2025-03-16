<template>
    <section class="bg-white mt-5 rounded-md">
        <div class="gap-16 items-center p-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:p-6">
            <div class="text-gray-700 lg:ps-6 sm:text-lg">
                <p v-for="(paragraph, index) in text" :key="index" class="mb-4">
                    <span v-html="paragraph"></span>
                </p>
            </div>
            <div>
                <img :src="imagePath" alt="korak" class="cursor-pointer rounded-lg shadow-md" @click="openModal" />
                <SingleImageModal :is-open="isModalOpen" :image-url="image" @close="isModalOpen = false" />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import type { ImageDTO } from '~/shared/types/ImageDTO'

const { text, imagePath } = defineProps<{
    text: string[]
    imagePath: string
}>()

const isModalOpen = ref(false)

const image = computed<ImageDTO>(() => ({ image: imagePath, thumbnail: imagePath }))

const openModal = () => {
    isModalOpen.value = true
}
</script>
