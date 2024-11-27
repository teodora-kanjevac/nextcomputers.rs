<template>
    <button
        v-if="showButton"
        class="fixed bottom-5 right-5 p-2 bg-primary-light text-gray-100 border-2 border-primary hover:bg-primary rounded-full cursor-pointer animate-fade-in"
        @click="scrollToTop">
        <ArrowUpIcon class="size-6" />
    </button>
</template>

<script setup lang="ts">
import ArrowUpIcon from './icons/ArrowUpIcon.vue'

const showButton = ref(false)

const checkScrollPosition = () => {
    showButton.value = window.scrollY > 300
}

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
}

onMounted(() => {
    window.addEventListener('scroll', checkScrollPosition)
})

onUnmounted(() => {
    window.removeEventListener('scroll', checkScrollPosition)
})
</script>

<style scoped>
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.animate-fade-in {
  animation: fade-in 0.2s ease-in-out;
}
</style>
