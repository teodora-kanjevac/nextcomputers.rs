<template>
    <div
        id="changeUserDetails"
        tabindex="-1"
        aria-hidden="true"
        @click.self="closeModal"
        class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full">
        <div class="w-full max-w-xl">
            <div class="relative py-4 bg-white rounded-lg shadow sm:py-5 sm:px-6">
                <div class="flex justify-between items-center pb-2 mb-4 rounded-t border-b sm:mb-5">
                    <h3 class="text-lg font-semibold text-gray-900">Izmeni podatke</h3>
                    <button
                        type="button"
                        class="text-gray-600 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1 ml-auto inline-flex items-center"
                        data-modal-hide="changeUserDetails">
                        <CloseIcon class="size-6" />
                    </button>
                </div>
                <UserDetailsForm @close-modal="closeModal" />
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

let modal = ref<Modal | null>(null)

const initializeUserDetailsModal = () => {
    useFlowbite(() => {
        const modalOptions: ModalOptions = {
            placement: 'top-center',
            backdrop: 'static',
            backdropClasses: 'bg-zinc-900/85 fixed inset-0 z-40',
            closable: true,
        }

        modal.value = initializeModal('changeUserDetails', modalOptions)
    })
}

const closeModal = () => modal.value?.hide()

onMounted(async () => {
    initializeUserDetailsModal()
})

onBeforeUnmount(() => {
    destroyComponent(modal.value)
})
</script>
