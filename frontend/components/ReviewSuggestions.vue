<template>
    <div class="bg-white rounded-lg border px-4 sm:px-6 py-5 shadow-sm">
        <h2 class="font-semibold border-b pb-2 text-lg mb-4">Ocenite proizvode koje ste kupili</h2>
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 font-medium">
            <div class="flex-1">
                <div v-if="suggestions.length === 0" class="text-center py-6 text-xs sm:text-sm text-gray-500 italic">
                    Trenutno nemate proizvode za ocenjivanje.
                </div>
                <div v-else class="space-y-3" v-auto-animate="{ duration: 200, easing: 'ease' }">
                    <p class="text-xs sm:text-sm text-gray-600 mb-5 sm:mb-7">
                        Budite deo naše zajednice - podelite svoje utiske o proizvodima koje ste nedavno kupili. Vaše
                        povratne informacije mogu da pomognu drugima da donesu bolje odluke pri kupovini!
                    </p>
                    <div
                        v-for="suggestion in visibleSuggestions"
                        :key="`${suggestion.orderId}-${suggestion.product.id}`"
                        class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-5 mb-1 p-2 sm:p-0 border sm:border-none rounded-md">
                        <div class="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                            <img
                                :src="suggestion.product.thumbnail"
                                :alt="suggestion.product.name"
                                class="size-10 sm:size-12 object-cover rounded" />
                            <div class="flex-1 min-w-0">
                                <NuxtLink
                                    :to="`/proizvod/${suggestion.product.id}`"
                                    class="text-sm sm:w-11/12 hover:underline line-clamp-1 break-all">
                                    {{ suggestion.product.name }}
                                </NuxtLink>
                                <p class="text-xs text-gray-600 mt-1.5">
                                    <NuxtLink
                                        :to="`/profil/istorija-kupovine/${suggestion.orderId}`"
                                        class="underline sm:no-underline hover:underline">
                                        Porudžbina - {{ suggestion.orderId }}
                                    </NuxtLink>
                                    • Kupljeno {{ formatLongDate(suggestion.purchasedAt) }}
                                </p>
                            </div>
                        </div>
                        <div class="flex justify-end sm:justify-normal">
                            <ReviewSuggestionModal
                                :product="suggestion.product"
                                @review-submitted="handleReviewSubmitted">
                                <span
                                    class="inline-flex items-center px-2.5 sm:px-3 py-2 sm:py-1.5 font-medium text-xs sm:text-sm bg-primary-light hover:bg-rose-800 text-white rounded">
                                    <PenIcon class="size-4 me-2" />
                                    Napiši recenziju
                                </span>
                            </ReviewSuggestionModal>
                        </div>
                    </div>
                    <div v-if="hasMoreSuggestions" class="flex justify-center pt-2">
                        <button
                            @click="loadMore"
                            class="px-4 py-1.5 text-sm font-medium text-primary-light hover:text-primary-dark border border-primary-light rounded-md hover:bg-primary-light/10">
                            Učitaj još predloga
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useReviewStore } from '~/stores/ReviewStore'
import PenIcon from './icons/PenIcon.vue'

const reviewStore = useReviewStore()
const visibleCount = ref(3)

const suggestions = computed(() => reviewStore.reviewSuggestions)

const visibleSuggestions = computed(() => suggestions.value.slice(0, visibleCount.value))
const hasMoreSuggestions = computed(() => suggestions.value.length > visibleCount.value)

const loadMore = () => {
    visibleCount.value += 4
}

const handleReviewSubmitted = () => {
    if (visibleCount.value > suggestions.value.length) {
        visibleCount.value = Math.max(3, suggestions.value.length)
    }
}

onMounted(async () => {
    await reviewStore.getReviewSuggestions()
})
</script>
