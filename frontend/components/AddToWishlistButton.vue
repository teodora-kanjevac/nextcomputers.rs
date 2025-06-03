<template>
    <div>
        <button
            ref="wishlistButton"
            type="button"
            @click="toggleWishlist"
            class="rounded-lg m-1 p-1 text-rose-700 hover:bg-gray-100 hover:text-rose-900">
            <component :is="isInWishlist ? HeartIcon : HeartOutlineIcon" class="size-6" />
        </button>
    </div>
</template>

<script setup lang="ts">
import HeartOutlineIcon from '~/components/icons/HeartOutlineIcon.vue'
import HeartIcon from '~/components/icons/HeartIcon.vue'
import { useWishlistStore } from '~/stores/WishlistStore'
import type { Instance } from 'tippy.js'
import { createTippy } from '~/directives/tippy'

const { productId } = defineProps<{ productId: number }>()

const wishlistButton = ref<HTMLElement | null>(null)
let tooltipInstance: Instance | null = null

const { showNotification } = useNotification()
const wishlistStore = useWishlistStore()

const isInWishlist = computed(() => wishlistStore.wishlist.wishlistItems.some(item => item.product.id === productId))
const isInWishlistText = computed(() => (isInWishlist.value ? 'Ukloni sa liste želja' : 'Sačuvaj na listu želja'))

const getWishlistItemId = () => wishlistStore.wishlist.wishlistItems.find(item => item.product.id === productId)?.id

const toggleWishlist = async () => {
    try {
        if (isInWishlist.value) {
            const wishlistItemId = getWishlistItemId()
            if (wishlistItemId) {
                await wishlistStore.removeFromWishlist(wishlistItemId)
                showNotification('info', 'Uklonjeno sa liste želja', 'Proizvod je uklonjen sa vaše liste želja.', 4000)
            }
        } else {
            await wishlistStore.addToWishlist(productId)
            showNotification('success', 'Dodato na listu želja', 'Proizvod je dodat na vašu listu želja.', 4000)
        }
    } catch (error) {
        showNotification('error', 'Greška!', 'Došlo je do problema pri obradi liste želja.')
    }
}

onMounted(() => {
    if (wishlistButton.value) {
        tooltipInstance = createTippy(wishlistButton.value, {
            content: isInWishlistText.value,
            placement: 'top',
        })
    }
})

watch(isInWishlistText, newVal => {
    tooltipInstance?.setContent(newVal)
})
</script>
