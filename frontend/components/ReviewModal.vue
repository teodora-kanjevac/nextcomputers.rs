<template>
    <button
        type="button"
        @click="handleReviewModalClick"
        class="my-4 me-2 flex items-center rounded-md px-4 py-2 text-sm font-medium text-white bg-primary-light hover:bg-rose-800 active:bg-primary">
        <PenIcon class="size-5 me-2 -ms-1" />
        Napiši recenziju
    </button>
    <Dialog
        v-model:visible="visible"
        modal
        :closable="false"
        :draggable="false"
        :style="{ padding: 0 }"
        :unstyled="true"
        :pt="{
            root: 'w-full max-w-xl rounded-lg overflow-hidden border border-gray-600',
            mask: 'bg-gray-900/60 backdrop-blur-sm justify-center items-center fixed inset-0 z-40',
            content: 'p-0',
            header: 'hidden',
        }">
        <div class="w-full max-w-xl h-full md:h-auto">
            <div class="relative py-4 bg-white rounded-lg shadow sm:py-5 sm:px-5">
                <div class="flex justify-between items-center pb-2 mb-4 rounded-t border-b">
                    <h3 class="text-lg font-semibold text-gray-900">Napiši recenziju</h3>
                    <button
                        type="button"
                        @click="closeModal"
                        class="text-gray-600 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1 ml-auto inline-flex items-center">
                        <CloseIcon class="size-6" />
                    </button>
                </div>
                <ReviewForm ref="reviewRef" @close-modal="closeModal" />
            </div>
        </div>
    </Dialog>
</template>

<script setup lang="ts">
import CloseIcon from './icons/CloseIcon.vue'
import { useAuthStore } from '~/stores/AuthStore'
import { useReviewStore } from '~/stores/ReviewStore'
import PenIcon from './icons/PenIcon.vue'
import Dialog from 'primevue/dialog'

const authStore = useAuthStore()
const { showNotification } = useNotification()
const reviewStore = useReviewStore()

const reviewRef = ref()
const visible = ref(false)

const eligibility = computed(() => reviewStore.eligibility)

const closeModal = () => {
    if (visible.value) {
        visible.value = false
    }
    reviewRef.value?.resetForm()
}

watch(visible, newVal => {
    if (!newVal) {
        closeModal()
    }
})

const handleReviewModalClick = () => {
    checkUser(authStore.isLoggedIn)
    if (!eligibility.value?.hasPurchased) {
        showNotification(
            'warn',
            'Morate kupiti proizvod!',
            'Ne možete ostaviti recenziju na proizvod koji niste kupili.',
            5000
        )
        return
    } else if (!eligibility.value.hasValidStatus) {
        showNotification(
            'warn',
            'Još uvek ne možete oceniti ovaj proizvod!',
            'Da bi ste mogli da ostavite recenziju, status vaše porudžbine mora biti "DOSTAVLJENO" ili "VRAĆENO".',
            6000
        )
        return
    } else if (eligibility.value.hasReviewed) {
        showNotification(
            'info',
            'Već ste ocenili ovaj proizvod!',
            'Ako želite da izmenite recenziju, idite na Nalog < Moje recenzije.',
            5000
        )
        return
    }
    visible.value = true
}
</script>
