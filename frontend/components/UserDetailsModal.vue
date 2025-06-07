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
            root: 'w-full max-w-xl rounded-lg overflow-hidden border border-gray-600 sm:mx-0 mx-3',
            mask: 'bg-gray-900/60 backdrop-blur-sm justify-center items-center fixed inset-0 z-40',
            content: 'p-0',
            header: 'hidden',
        }">
        <div class="w-full max-w-xl h-full md:h-auto">
            <div class="relative py-4 px-4 bg-white rounded-lg shadow sm:py-5 sm:px-5">
                <div class="flex justify-between items-center pb-2 mb-4 rounded-t border-b">
                    <h3 class="text-lg font-semibold text-gray-900">Izmeni podatke</h3>
                    <button
                        type="button"
                        @click="closeModal"
                        class="text-gray-600 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1 ml-auto inline-flex items-center">
                        <CloseIcon class="size-6" />
                    </button>
                </div>
                <UserDetailsForm ref="userDetailsRef" @close-modal="closeModal" />
            </div>
        </div>
    </Dialog>
</template>

<script setup lang="ts">
import CloseIcon from './icons/CloseIcon.vue'
import Dialog from 'primevue/dialog'

const userDetailsRef = ref()
const visible = ref(false)

const closeModal = () => {
    if (visible.value) {
        visible.value = false
    }
    userDetailsRef.value?.resetForm()
}

watch(visible, newVal => {
    if (!newVal) {
        closeModal()
    }
})
</script>
