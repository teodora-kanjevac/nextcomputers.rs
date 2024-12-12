<template>
    <form @submit.prevent="submitReview">
        <div class="mb-6">
            <label class="text-sm font-medium">
                Proizvod:
                <br />
                <span class="font-medium italic">{{ product?.name }}</span>
            </label>
        </div>
        <div class="grid gap-y-4 gap-x-8 mb-4 sm:grid-cols-2">
            <div>
                <label for="name" class="block mb-2 ms-0.5 text-sm font-medium text-gray-900">
                    Ime
                    <span class="text-red-600">*</span>
                </label>
                <input
                    v-model="reviewForm.name"
                    type="text"
                    name="name"
                    id="name"
                    :class="{
                        'bg-gray-50 border-gray-300': isNameValid && formSubmitted,
                        'border-red-600': !isNameValid && formSubmitted,
                    }"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:ring-primary-light focus:border-primary-light"
                    placeholder="Vaše ime" />
                <p v-if="!isNameValid && formSubmitted" class="text-red-600 text-xs font-medium mt-1 ms-0.5">
                    Ime je obavezno
                </p>
            </div>

            <div>
                <label for="brand" class="block mb-2 ms-0.5 text-sm font-medium text-gray-900">
                    Ocena
                    <span class="text-red-600">*</span>
                </label>
                <RatingInput :rating="rating" @update:rating="handleRatingUpdate" class="mt-3" />
                <p v-if="!isRatingValid && formSubmitted" class="text-red-600 text-xs font-medium mt-1 ms-1">
                    Ocena je obavezna
                </p>
            </div>

            <div class="sm:col-span-2">
                <label for="comment" class="block mb-2 ms-0.5 text-sm font-medium text-gray-900">
                    Komentar
                    <span class="text-red-600">*</span>
                </label>
                <textarea
                    v-model="reviewForm.comment"
                    id="comment"
                    rows="4"
                    :class="{
                        'bg-gray-50 border-gray-300': isCommentValid && formSubmitted,
                        'border-red-600': !isCommentValid && formSubmitted,
                    }"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-light focus:border-primary-light"
                    placeholder="Vaš komentar"></textarea>
                <p v-if="!isCommentValid && formSubmitted" class="text-red-600 text-xs font-medium mt-1 ms-0.5">
                    Komentar je obavezan
                </p>
            </div>
        </div>

        <button
            type="submit"
            class="text-white inline-flex items-center font-medium rounded-lg text-sm mt-2 px-5 py-2.5 text-center bg-primary-light hover:bg-rose-800 active:bg-primary">
            <PenIcon class="size-5 me-2 -ms-1" />
            Dodaj recenziju
        </button>
    </form>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import RatingInput from './RatingInput.vue'
import PenIcon from './icons/PenIcon.vue'
import { useProductStore } from '~/stores/ProductStore'

const productStore = useProductStore()
const product = computed(() => productStore.product)

const reviewForm = ref({
    name: '',
    comment: '',
})

const rating = ref<number>(0)

const formSubmitted = ref(false)

const isNameValid = computed(() => !!reviewForm.value.name)
const isRatingValid = computed(() => rating.value > 0)
const isCommentValid = computed(() => !!reviewForm.value.comment)

const handleRatingUpdate = (newRating: number) => {
    rating.value = newRating
}

const submitReview = () => {
    formSubmitted.value = true

    if (isNameValid.value && isRatingValid.value && isCommentValid.value) {
        reviewForm.value.name = ''
        reviewForm.value.comment = ''
        rating.value = 0
        formSubmitted.value = false
    }
}
</script>
