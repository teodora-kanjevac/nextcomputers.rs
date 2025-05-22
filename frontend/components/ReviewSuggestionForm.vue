<template>
    <form @submit.prevent="submitReview" class="text-gray-900">
        <div class="mb-4">
            <label class="text-sm font-medium">
                Proizvod:
                <br />
                <span class="font-medium italic text-xs text-gray-600">{{ product?.name }}</span>
            </label>
        </div>
        <div class="grid gap-y-5 mb-4">
            <RatingInput
                label="Vaša ocena"
                required
                v-model="form.rating"
                :rating="form.rating"
                @update:rating="handleRatingUpdate"
                :showError="!ratingCheck().value.valid && formSubmitted"
                :errorMessage="ratingCheck().value.message"
                :shakeTrigger="shakeTrigger" />

            <TextAreaInput
                label="Vaš komentar"
                :rows="5"
                placeholder="Unesite komentar"
                required
                v-model="form.comment"
                :showError="!commentCheck.valid && formSubmitted"
                :errorMessage="commentCheck.message"
                :shakeTrigger="shakeTrigger" />
        </div>
        <div class="flex justify-center ms-1">
            <span class="text-red-600 font-bold -mt-0.5">!</span>
            <p class="text-xs border-b border-gray-200 font-medium pb-4 mb-4 ps-2 leading-5">
                Cenimo Vaše mišljenje i podstičemo iskrene ocene naših proizvoda. Međutim, molimo Vas da recenzije budu
                konstruktivne, objektivne i korisne za druge kupce. Recenzije koje sadrže zlonameran, uvredljiv ili
                lažan sadržaj biće uklonjene kako bismo održali pravičnu i pouzdanu zajednicu. Hvala na razumevanju.
            </p>
        </div>
        <div class="flex gap-3 font-medium text-white text-sm text-center">
            <button
                type="submit"
                class="flex items-center rounded-md px-4 py-1.5 bg-primary-light sm:w-fit disabled:contrast-75 enabled:hover:bg-rose-800"
                :disabled="sharedStore.loading">
                <template v-if="sharedStore.loading">
                    <SubmitionSpinner class="size-5 px-5" />
                </template>
                <template v-else>
                    <PenIcon class="size-5 me-2 -ms-1 shrink-0" />
                    <span>Dodaj recenziju</span>
                </template>
            </button>
            <button
                type="button"
                @click="emit('closeModal')"
                class="text-gray-700 px-4 py-1.5 rounded-md bg-gray-200 hover:bg-gray-300 border border-gray-300">
                Otkaži
            </button>
        </div>
    </form>
</template>

<script setup lang="ts">
import PenIcon from './icons/PenIcon.vue'
import { useSharedStore } from '~/stores/SharedStore'
import { useFormStore } from '~/stores/FormStore'
import { useReviewStore } from '~/stores/ReviewStore'
import type { ProductDataDTO } from '~/shared/types/ProductDataDTO'

const { product } = defineProps<{
    product: ProductDataDTO
}>()

const sharedStore = useSharedStore()
const reviewStore = useReviewStore()
const formStore = useFormStore()
const { showNotification } = useNotification()

const form = computed(() => formStore.review.form)
const emit = defineEmits(['closeModal', 'submitted'])

const formSubmitted = ref(false)
const shakeTrigger = ref(0)

const { commentCheck, ratingCheck } = useFormValidation(form)

const isFormInvalid = computed(() => {
    return !(commentCheck.value.valid && ratingCheck().value.valid)
})

const handleRatingUpdate = (newRating: number) => {
    form.value.rating = newRating
}

const resetForm = () => {
    formStore.resetReviewForm()
    formSubmitted.value = false
}

defineExpose({
    resetForm,
})

const submitReview = async () => {
    formSubmitted.value = true
    if (isFormInvalid.value) {
        shakeTrigger.value++
        return
    }
    try {
        sharedStore.setLoading(true)
        if (!product?.id) return

        await reviewStore.writeAReview(product.id, formStore.review.form)
        resetForm()
        
        emit('submitted', product.id)
        emit('closeModal')
        showNotification(
            'success',
            'Uspešno dodata recenzija!',
            'Vaša recenzija za ovaj proizvod je uspešno dodata.',
            4000
        )
    } catch (error: any) {
        emit('closeModal')
        showNotification(
            'error',
            'Greška pri dodavanju recenzije!',
            'Došlo je do greške pri dodavanju recenzije. Molimo pokušajte ponovo kasnije.'
        )
    } finally {
        sharedStore.setLoading(false)
    }
}
</script>
