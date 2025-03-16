<template>
    <Transition name="modal" @after-leave="closeModal">
        <div
            v-show="isOpen"
            class="modal fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.8)]"
            @click="handleBackgroundClick">
            <div class="relative w-full max-w-7xl flex items-center justify-center">
                <img
                    :src="imageUrl.image"
                    :alt="imageUrl.image"
                    class="w-full h-full object-contain rounded-md" />

                <button
                    @click.stop="closeModal"
                    class="z-50 absolute top-4 right-5 p-1 bg-zinc-300 rounded-lg shadow-sm transition-transform duration-200 hover:bg-opacity-70 hover:scale-110">
                    <CloseIcon class="size-7" />
                </button>
            </div>
        </div>
    </Transition>
</template>

<script setup lang="ts">
import type { ImageDTO } from '~/shared/types/ImageDTO'
import CloseIcon from './icons/CloseIcon.vue'

const { isOpen, imageUrl } = defineProps<{
    imageUrl: ImageDTO
    isOpen: boolean
}>()

const emit = defineEmits(['close'])

const closeModal = () => {
    emit('close')
}

const handleBackgroundClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement
    if (target && target.classList.contains('modal')) {
        closeModal()
    }
}

const disableScroll = () => {
    window.addEventListener('wheel', preventDefault as EventListener, { passive: false } as AddEventListenerOptions)
    window.addEventListener('touchmove', preventDefault as EventListener, { passive: false } as AddEventListenerOptions)
}

const enableScroll = () => {
    window.removeEventListener('wheel', preventDefault as EventListener, { passive: false } as AddEventListenerOptions)
    window.removeEventListener(
        'touchmove',
        preventDefault as EventListener,
        { passive: false } as AddEventListenerOptions
    )
}

const preventDefault = (e: Event) => {
    e.preventDefault()
}

watch(
    () => isOpen,
    isOpen => {
        if (isOpen) {
            disableScroll()
        } else {
            enableScroll()
        }
    }
)

onUnmounted(() => {
    enableScroll()
})
</script>

<style>
.modal-enter-active,
.modal-leave-active {
    transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
}
</style>
