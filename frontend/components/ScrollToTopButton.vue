<template>
    <button
        ref="scrollButton"
        class="fixed bottom-5 right-5 p-2 bg-primary-light text-gray-100 border-2 border-primary hover:bg-primary rounded-full cursor-pointer"
        @click="scrollToTop">
        <ArrowUpIcon class="size-6" />
    </button>
</template>

<script setup lang="ts">
import ArrowUpIcon from './icons/ArrowUpIcon.vue'
import { useScroll } from '@vueuse/core'

const { y } = useScroll(window)

const scrollButton = ref<HTMLElement | null>(null)
const showButton = computed(() => y.value > 300)

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
}

watch(showButton, newValue => {
    if (newValue) {
        nextTick(() => {
            fadeIn(scrollButton.value)
        })
    } else {
        fadeOut(scrollButton.value)
    }
})
</script>

<style scoped>
button {
    opacity: 0;
}
</style>
