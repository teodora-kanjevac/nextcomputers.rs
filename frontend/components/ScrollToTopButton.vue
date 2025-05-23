<template>
    <Transition name="fade">
        <button
            v-show="showButton"
            ref="scrollButton"
            class="fixed bottom-5 right-5 p-2 bg-primary-light text-gray-100 border-2 border-primary hover:bg-primary rounded-full cursor-pointer"
            @click="scrollToTop">
            <ArrowUpIcon class="size-6" />
        </button>
    </Transition>
</template>

<script setup lang="ts">
import ArrowUpIcon from './icons/ArrowUpIcon.vue'
import { useScroll } from '@vueuse/core'

const { y } = useScroll(window)
const showButton = computed(() => y.value > 300)

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
