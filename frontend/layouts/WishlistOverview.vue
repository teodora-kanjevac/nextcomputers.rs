<template>
    <div class="space-y-3">
        <div class="bg-white rounded-lg border px-4 sm:px-6 pt-5 pb-2 shadow-sm">
            <h2 class="font-semibold border-b pb-2 text-lg mb-5">Vaša lista želja</h2>
            <div
                v-if="wishlistItems.length === 0"
                class="text-gray-600 font-medium flex flex-col items-center justify-center">
                <img
                    class="max-w-sm h-auto mb-8 mt-2"
                    src="/assets/images/wishlist-illustration.webp"
                    alt="illustration" />
                <p class="font-medium italic text-base sm:text-lg mb-5 text-center px-4">
                    Trenutno nemate proizvode na listi želja.
                    <br />
                    Kada sačuvate proizvod, on će se prikazati ovde.
                </p>
            </div>
            <template v-else>
                <UserWishlist :wishlist-items="wishlistItems" />
                <div class="flex justify-end my-4">
                    <ConfirmationModal
                        message="Da li ste sigurni da želite da obrišete sve proizvode iz liste želja?"
                        :onConfirm="() => emptyWishlist()">
                        <span
                            class="flex items-center px-3 py-2 text-gray-800 bg-gray-100 hover:bg-gray-200 border border-gray-200 font-medium text-sm rounded-md">
                            <TrashCanIcon class="size-5 me-1 shrink-0" />
                            Obriši sve
                        </span>
                    </ConfirmationModal>
                </div>
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import TrashCanIcon from '~/components/icons/TrashCanIcon.vue'
import type { WishlistItemDTO } from '~/shared/types/WishlistDTO'
import { useWishlistStore } from '~/stores/WishlistStore'

const wishlistStore = useWishlistStore()
const { showNotification } = useNotification()

const wishlistItems = computed<WishlistItemDTO[]>(() => wishlistStore.wishlist.wishlistItems)

const emptyWishlist = async () => {
    try {
        await wishlistStore.clearWishlist()
        showNotification('success', 'Uspešno obrisani proizvodi!', 'Vaša lista želja je uspešno ispražnjena.')
    } catch (error) {
        showNotification('error', 'Greška prilikom brisanja!', 'Pokušajte ponovo kasnije.', 5000)
    }
}
</script>
