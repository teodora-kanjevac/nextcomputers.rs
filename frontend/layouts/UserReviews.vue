<template>
    <div class="space-y-3">
        <div class="bg-white rounded-lg border px-4 sm:px-6 py-5 shadow-sm">
            <h2 class="font-semibold border-b pb-2 text-lg mb-5">Vaše recenzije</h2>
            <div
                v-if="reviews.length === 0"
                class="text-gray-600 font-medium flex flex-col items-center justify-center">
                <img
                    class="max-w-md h-auto mb-8 mt-2"
                    src="/assets/images/review-illustration.webp"
                    alt="illustration" />
                <p class="font-medium italic text-base sm:text-lg mb-5 text-center px-4">
                    Trenutno nemate recenzije.
                    <br />
                    Kada ostavite recenziju na proizvod, ona će se prikazati ovde.
                </p>
            </div>
            <template v-else>
                <div class="space-y-4" ref="parent">
                    <template v-for="review in paginatedReview" :key="review.id">
                        <div class="border border-gray-200 px-4 py-3 sm:px-5 sm:py-4 font-medium rounded-lg shadow-sm">
                            <div
                                class="flex flex-col sm:flex-row sm:items-start sm:justify-between border-b border-gray-200 pb-3 mb-4 gap-3">
                                <div class="flex items-center gap-4">
                                    <img
                                        class="size-14 sm:size-16 object-contain sm:border rounded-md"
                                        :src="review.product.thumbnail"
                                        :alt="review.product.name" />
                                    <NuxtLink
                                        :to="`/proizvod/${review.product.id}`"
                                        class="text-base font-semibold text-gray-900 hover:underline break-words line-clamp-2">
                                        {{ review.product.name }}
                                    </NuxtLink>
                                </div>
                                <div class="flex flex-col items-end gap-2">
                                    <div class="text-sm text-gray-500">
                                        <UserStarRating :size="6" :rating="review.rating" class="-me-1 sm:-me-1.5" />
                                    </div>
                                    <div class="text-xs sm:text-sm text-gray-600">
                                        {{ formatLongDate(review.date) }}
                                    </div>
                                </div>
                            </div>
                            <div class="text-sm text-gray-500 mb-1.5 ms-0.5">Vaš komentar</div>
                            <div
                                class="text-gray-800 text-sm mb-4 px-4 py-3 bg-gray-50 rounded-md border-2 border-gray-100">
                                {{ review.comment }}
                            </div>
                            <div class="flex justify-end gap-3 sm:gap-4 text-sm text-white">
                                <EditReviewModal :review="review">
                                    <span
                                        class="py-1 px-2 sm:px-3 sm:py-1.5 bg-primary-light hover:bg-rose-800 rounded flex items-center">
                                        <EditIcon class="size-4 me-1.5 shrink-0" />
                                        Izmeni
                                    </span>
                                </EditReviewModal>
                                <ConfirmationModal
                                    message="Da li ste sigurni da želite da obrišete ovu recenziju?"
                                    :onConfirm="() => handleDeleteReview(review.id)">
                                    <span class="text-red-600 hover:underline flex items-center">
                                        <TrashCanIcon class="size-4 me-1 shrink-0" />
                                        Obriši
                                    </span>
                                </ConfirmationModal>
                            </div>
                        </div>
                    </template>
                </div>

                <Paginator
                    :rows="rowsPerPage"
                    :totalRecords="reviews.length"
                    :rowsPerPageOptions="[3, 5, 10, 15]"
                    @page="onPageChange"
                    class="border border-gray-200 rounded-md mt-6" />
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import Paginator from 'primevue/paginator'
import { useUserStore } from '~/stores/UserStore'
import type { ReviewDTO } from '~/shared/types/ReviewDTO'
import EditReviewModal from '~/components/EditReviewModal.vue'
import TrashCanIcon from '~/components/icons/TrashCanIcon.vue'
import EditIcon from '~/components/icons/EditIcon.vue'

const rowsPerPage = ref(3)
const first = ref(0)
const isPaginating = ref(false)
const { showNotification } = useNotification()

const userStore = useUserStore()
const reviews = computed<ReviewDTO[]>(() => userStore.reviewHistory)

const paginatedReview = computed(() => {
    return reviews.value.slice(first.value, first.value + rowsPerPage.value)
})

const [parent, enableAnimations] = useAutoAnimate({
    duration: 175,
    easing: 'ease',
})

watch(isPaginating, newVal => {
    enableAnimations(!newVal)
})

const onPageChange = (event: any) => {
    isPaginating.value = true
    first.value = event.first
    rowsPerPage.value = event.rows
    nextTick(() => {
        isPaginating.value = false
    })
}

const handleDeleteReview = async (reviewId: string) => {
    try {
        await userStore.deleteUserReview(reviewId)
        showNotification('success', 'Uspešno obrisana recenzija!', 'Vaša recenzija je uspešno obrisana.')
    } catch (error) {
        showNotification('error', 'Greška prilikom brisanja recenzije!', 'Pokušajte ponovo kasnije.', 5000)
    }
}
</script>
