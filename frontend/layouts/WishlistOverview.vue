<template>
    <div class="space-y-3">
        <div class="bg-white rounded-lg border px-4 sm:px-6 py-5 shadow-sm">
            <h2 class="font-semibold border-b pb-2 text-lg mb-3">Vaša lista želja</h2>
            <div
                v-if="wishlistItems.length === 0"
                class="text-gray-600 font-medium flex flex-col items-center justify-center">
                <img
                    class="md:max-w-md h-auto mb-8 mt-2"
                    src="/assets/images/wishlist-illustration.webp"
                    alt="illustration" />
                <p class="font-medium italic text-sm sm:text-base md:text-lg mb-5 text-center px-4">
                    Trenutno nemate proizvode na listi želja.
                    <br />
                    Kada sačuvate proizvod, on će se prikazati ovde.
                </p>
            </div>
            <template v-else>
                <div class="flex justify-end mb-3 sm:mb-4 gap-2 sm:gap-3">
                    <button
                        type="button"
                        v-if="wishlistChanged"
                        @click="saveWishlistOrder"
                        class="flex items-center px-2 sm:px-2.5 py-1.5 text-white bg-primary-light hover:bg-rose-800 font-medium text-xs sm:text-sm rounded">
                        <EditIcon class="size-4 me-1 shrink-0" />
                        Sačuvaj izmene
                    </button>
                    <ConfirmationModal
                        message="Da li ste sigurni da želite da obrišete sve proizvode iz liste želja? Ova radnja se ne može opozvati!"
                        :onConfirm="() => emptyWishlist()">
                        <span
                            class="flex items-center px-2 sm:px-2.5 py-1.5 text-gray-800 bg-gray-200 hover:bg-gray-300 border border-gray-300 font-medium text-xs sm:text-sm rounded">
                            <TrashCanIcon class="size-4 me-1 shrink-0" />
                            Obriši sve
                        </span>
                    </ConfirmationModal>
                </div>
                <UserWishlist
                    ref="userWishlistRef"
                    :wishlist-items="wishlistItems"
                    @wishlist-changed="handleWishlistChange" />
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import EditIcon from '~/components/icons/EditIcon.vue'
import TrashCanIcon from '~/components/icons/TrashCanIcon.vue'
import type { WishlistItemDTO } from '~/shared/types/WishlistDTO'
import { useWishlistStore } from '~/stores/WishlistStore'

const wishlistStore = useWishlistStore()
const { showNotification } = useNotification()

const wishlistItems = computed<WishlistItemDTO[]>(() => wishlistStore.wishlist.wishlistItems)

const userWishlistRef = ref()
const wishlistChanged = ref(false)

const handleWishlistChange = (changed: boolean) => {
    wishlistChanged.value = changed
}

const saveWishlistOrder = async () => {
    try {
        const currentItems = userWishlistRef.value?.wishlist || []
        const deletedItemIds = userWishlistRef.value?.deletedItemIds || []
        wishlistStore.wishlist.wishlistItems = [...currentItems]

        await wishlistStore.removeItemsFromWishlist(deletedItemIds)
        await wishlistStore.updateWishlistOrder()

        userWishlistRef.value?.resetChanges()
        wishlistChanged.value = false

        showNotification('success', 'Uspešne izmene!', 'Vaša lista želja je uspešno izmenjena.')
    } catch (error) {
        console.error(error)
        showNotification('error', 'Greška prilikom izmene!', 'Pokušajte ponovo kasnije.', 5000)
    }
}
const emptyWishlist = async () => {
    try {
        await wishlistStore.clearWishlist()
        showNotification('success', 'Uspešno obrisani proizvodi!', 'Vaša lista želja je uspešno ispražnjena.')
    } catch (error) {
        showNotification('error', 'Greška prilikom brisanja!', 'Pokušajte ponovo kasnije.', 5000)
    }
}
</script>
