<template>
    <button type="button" @click="visible = true">
        <slot />
    </button>
    <Dialog
        v-model:visible="visible"
        modal
        :closable="false"
        :draggable="false"
        :style="{ padding: 0 }"
        :unstyled="true"
        :pt="{
            root: 'w-full max-w-md rounded-lg overflow-hidden border border-gray-600',
            mask: 'bg-gray-900/60 backdrop-blur-sm justify-center items-center fixed inset-0 z-40',
            content: 'p-0',
            header: 'hidden',
        }">
        <div class="h-full md:h-auto">
            <div class="relative pb-5 pt-3 bg-white rounded-lg shadow sm:px-3">
                <div class="flex flex-col items-center text-center mb-8">
                    <button
                        type="button"
                        @click="closeDialog"
                        class="text-gray-600 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1 ml-auto inline-flex items-center">
                        <CloseIcon class="size-5" />
                    </button>
                    <div class="mb-4 p-3 rounded-full bg-red-100 text-red-600">
                        <TrashCanIcon class="size-9" />
                    </div>
                    <p class="text-gray-700 font-medium mt-2 px-3">{{ message }}</p>
                </div>

                <div class="flex justify-center gap-3">
                    <button
                        type="button"
                        @click="closeDialog"
                        class="px-4 py-2 sm:w-1/4 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 border border-gray-300">
                        {{ cancelText }}
                    </button>
                    <button
                        type="button"
                        @click="confirmAction"
                        class="px-4 py-2 sm:w-1/4 text-sm font-medium text-white rounded-md bg-red-700 hover:bg-red-800">
                        {{ confirmText }}
                    </button>
                </div>
            </div>
        </div>
    </Dialog>
</template>

<script setup lang="ts">
import CloseIcon from './icons/CloseIcon.vue'
import Dialog from 'primevue/dialog'
import TrashCanIcon from './icons/TrashCanIcon.vue'

const props = defineProps({
    message: {
        type: String,
        required: true,
    },
    confirmText: {
        type: String,
        default: 'Potvrdi',
    },
    cancelText: {
        type: String,
        default: 'Otkaži',
    },
    onConfirm: {
        type: Function,
        required: true,
    },
})

const visible = ref(false)

const closeDialog = () => (visible.value = false)

const confirmAction = async () => {
    try {
        await props.onConfirm()
        closeDialog()
    } catch (error) {
        console.error('Confirmation action failed:', error)
    }
}

defineExpose({
    open: () => (visible.value = true),
    close: closeDialog,
})
</script>
