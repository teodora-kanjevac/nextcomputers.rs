<template>
    <div
        id="createReview"
        tabindex="-1"
        aria-hidden="true"
        class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full">
        <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
            <div class="relative p-4 bg-white rounded-lg shadow sm:p-5">
                <div
                    class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5">
                    <h3
                        class="text-lg font-semibold text-gray-900 line-clamp-1">
                        Napiši recenziju
                    </h3>
                    <button
                        type="button"
                        class="text-gray-600 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                        data-modal-hide="createReview">
                        <CloseIcon class="size-6" />
                    </button>
                </div>
                <form action="#">
                    <div class="mb-6">
                        <label class="text-sm font-medium">
                            Proizvod:
                            <br />
                            <span class="font-normal italic">
                                {{ product?.name }}
                            </span>
                        </label>
                    </div>
                    <div class="grid gap-y-4 gap-x-8 mb-4 sm:grid-cols-2">
                        <div>
                            <label
                                for="name"
                                class="block mb-2 ms-0.5 text-sm font-medium text-gray-900">
                                Ime
                                <span class="text-red-600">*</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:ring-primary-light focus:border-primary-light"
                                placeholder="Vaše ime"
                                required="true" />
                        </div>
                        <div>
                            <label
                                for="brand"
                                class="block mb-2 ms-0.5 text-sm font-medium text-gray-900">
                                Ocena
                                <span class="text-red-600">*</span>
                            </label>
                            <RatingInput
                                :rating="rating"
                                @update:rating="handleRatingUpdate"
                                class="mt-3" />
                        </div>
                        <div class="sm:col-span-2">
                            <label
                                for="comment"
                                class="block mb-2 ms-0.5 text-sm font-medium text-gray-900">
                                Komentar
                                <span class="text-red-600">*</span>
                            </label>
                            <textarea
                                id="comment"
                                rows="4"
                                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-light focus:border-primary-light"
                                placeholder="Vaš komentar"></textarea>
                        </div>
                    </div>
                    <button
                        type="submit"
                        class="text-white inline-flex items-center font-medium rounded-lg text-sm mt-2 px-5 py-2.5 text-center bg-primary-light hover:bg-rose-800 active:bg-primary">
                        <PenIcon class="size-5 me-2 -ms-1" />
                        Dodaj recenziju
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import CloseIcon from './icons/CloseIcon.vue'
import PenIcon from './icons/PenIcon.vue'
import { useProductStore } from '~/stores/ProductStore'
import { Modal } from 'flowbite'
import type { ModalOptions, ModalInterface } from 'flowbite'
import type { InstanceOptions } from 'flowbite'

const initializeModal = () => {
    useFlowbite(() => {
        const modalElement: HTMLElement = document.getElementById(
            'createReview'
        ) as HTMLElement

        const modalOptions: ModalOptions = {
            placement: 'top-center',
            backdrop: 'static',
            backdropClasses:
                'bg-gray-900/50 fixed inset-0 z-40',
            closable: true,
        }

        const instanceOptions: InstanceOptions = {
            id: 'createReview',
            override: true,
        }

        const modal: ModalInterface = new Modal(
            modalElement,
            modalOptions,
            instanceOptions
        )

        const modalButton = document.querySelector(
            '[data-modal-target="createReview"]'
        )
        if (modalButton) {
            modalButton.addEventListener('click', () => {
                modal.show()
            })
        }

        const closeButton = document.querySelector(
            '[data-modal-hide="createReview"]'
        )
        if (closeButton) {
            closeButton.addEventListener('click', () => {
                modal.hide()
            })
        }
    })
}

onMounted(() => {
    initializeModal()
})

const rating = ref<number>(0)

const handleRatingUpdate = (newRating: number) => {
    rating.value = newRating
}

const productStore = useProductStore()

const product = productStore.currentProduct
</script>
