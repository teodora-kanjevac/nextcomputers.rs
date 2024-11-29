<template>
    <div
        id="createReview"
        tabindex="-1"
        aria-hidden="true"
        class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full">
        <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
            <div class="relative p-4 bg-white rounded-lg shadow sm:p-5">
                <div class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5">
                    <h3 class="text-lg font-semibold text-gray-900">Napiši recenziju</h3>
                    <button
                        type="button"
                        class="text-gray-600 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                        data-modal-hide="createReview">
                        <CloseIcon class="size-6" />
                    </button>
                </div>
                <ReviewForm />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import CloseIcon from './icons/CloseIcon.vue'
import { destroyComponent } from '~/composables/useDestroy'
import { Modal } from 'flowbite'
import type { ModalOptions } from 'flowbite'
import { initializeModal } from '~/composables/useModal'

let modal: Modal | null = null

const initializeReviewModal = () => {
    useFlowbite(() => {
        const modalOptions: ModalOptions = {
            placement: 'top-center',
            backdrop: 'static',
            backdropClasses: 'bg-gray-900/50 fixed inset-0 z-40',
            closable: true,
        }

        modal = initializeModal('createReview', modalOptions)
    })
}

onMounted(() => {
    initializeReviewModal()
})

onBeforeUnmount(() => {
    destroyComponent(modal)
})
</script>
