<template>
    <div class="space-y-3">
        <div class="bg-white rounded-lg border px-6 py-5 shadow-sm">
            <h2 class="font-semibold border-b pb-2 text-lg mb-5">Vaše recenzije</h2>
            <div
                v-if="reviews.length === 0"
                class="text-gray-600 font-medium flex flex-col items-center justify-center">
                <img
                    class="max-w-md w-full h-auto my-10"
                    src="/assets/images/review-illustration.png"
                    alt="illustration" />
                <p class="font-semibold text-base sm:text-lg mb-5 text-center px-4">
                    Trenutno nemate recenzije.
                    <br />
                    Kada ostavite recenziju na proizvod, ona će se prikazati ovde.
                </p>
            </div>
            <template v-else>
                <div class="space-y-4">
                    <template v-for="review in paginatedReview" :key="review.id">
                        <div class="border border-gray-200 px-5 py-4 font-medium rounded-lg shadow-sm">
                            <div class="flex items-start justify-between border-b border-gray-200 pb-3 mb-4">
                                <div class="flex items-center gap-4">
                                    <img
                                        class="size-16 object-contain"
                                        :src="review.product.thumbnail"
                                        :alt="review.product.name" />
                                    <NuxtLink
                                        :to="`/proizvod/${review.product.id}`"
                                        class="text-base font-semibold text-gray-900 w-4/5 hover:underline break-words line-clamp-2">
                                        {{ review.product.name }}
                                    </NuxtLink>
                                </div>
                                <div class="flex flex-col items-end gap-2">
                                    <div class="text-sm text-gray-500">
                                        <UserStarRating :size="6" :rating="review.rating" class="-me-1.5" />
                                    </div>
                                    <div class="text-sm text-gray-600">
                                        {{ formatLongDate(review.date) }}
                                    </div>
                                </div>
                            </div>
                            <div class="text-sm text-gray-500 mb-1.5 ms-0.5">Vaš komentar</div>
                            <div
                                class="text-gray-800 text-sm mb-4 px-4 py-3 bg-gray-50 rounded-md border-2 border-gray-100">
                                {{ review.comment }}
                            </div>
                            <div class="flex justify-end gap-4 text-sm text-white">
                                <EditReviewModal :review="review" />
                                <ConfirmationModal
                                    message="Da li ste sigurni da želite da obrišete ovu recenziju?"
                                    confirmButtonClass="bg-red-600 hover:bg-red-700"
                                    :onConfirm="() => handleDeleteReview(review.id)" />
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
import dayjs from 'dayjs'
import type { ReviewDTO } from '~/shared/types/ReviewDTO'
import EditReviewModal from '~/components/EditReviewModal.vue'

const rowsPerPage = ref(3)
const first = ref(0)
const { showNotification } = useNotification()

const userStore = useUserStore()
const reviews = computed<ReviewDTO[]>(() => userStore.reviewHistory)

const paginatedReview = computed(() => {
    return reviews.value.slice(first.value, first.value + rowsPerPage.value)
})

const onPageChange = (event: any) => {
    first.value = event.first
    rowsPerPage.value = event.rows
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
