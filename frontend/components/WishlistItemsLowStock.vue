<template>
    <div v-if="lowStockItems.length > 0" class="bg-white rounded-lg border px-4 sm:px-6 py-5 shadow-sm font-medium">
        <h2 class="flex items-center font-semibold border-b pb-2 text-lg mb-3">
            <HourglassIcon class="size-5 text-yellow-500 me-2" />
            Poslednji komadi&#x2009;!
        </h2>
        <div
            class="flex flex-col sm:flex-row sm:items-center sm:justify-between text-gray-600 mb-4 text-sm space-y-2 sm:space-y-0">
            <span class="text-sm leading-snug sm:leading-normal">
                Ostalo je samo još par komada – ne propustite priliku!
            </span>
            <NuxtLink
                to="/profil/lista-zelja"
                class="flex items-center justify-end font-semibold text-primary-light hover:underline text-sm">
                Pogledaj listu želja
                <ArrowRightIcon class="size-4 ms-1 shrink-0" />
            </NuxtLink>
        </div>

        <div
            class="mx-auto max-w-screen-xl p-4 sm:px-6 sm:py-5 rounded-lg border-2 border-dashed border-rose-200 bg-white shadow-sm">
            <section class="splide">
                <Splide :options="options">
                    <SplideSlide v-for="(chunk, index) in productChunks" :key="index">
                        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            <div
                                v-for="item in chunk"
                                :key="item.product.id"
                                class="flex flex-col h-full p-4 border rounded-lg shadow-sm">
                                <div class="h-36 w-full mb-3 flex-shrink-0">
                                    <NuxtLink :to="`/proizvod/${item.product.id}`">
                                        <NuxtImg
                                            :src="item.product.thumbnail"
                                            :alt="item.product.name"
                                            class="h-full w-full object-contain mx-auto" />
                                    </NuxtLink>
                                </div>
                                <div class="flex flex-col flex-grow">
                                    <NuxtLink
                                        :to="`/proizvod/${item.product.id}`"
                                        class="text-sm font-medium hover:underline line-clamp-2 my-2">
                                        {{ item.product.name }}
                                    </NuxtLink>
                                    <div class="mt-auto">
                                        <div :class="{ invisible: !item.product.discountPrice }">
                                            <p
                                                class="text-sm line-through font-medium leading-tight text-gray-500 mt-2">
                                                {{ formatPrice(item.product.price) }} RSD
                                            </p>
                                        </div>
                                        <p
                                            class="font-bold leading-tight text-gray-800"
                                            :class="{ 'text-red-700': item.product.discountPrice }">
                                            {{ formatPrice(item.product.discountPrice || item.product.price) }} RSD
                                        </p>
                                    </div>
                                    <div class="mt-2 pt-2 border-t">
                                        <div class="flex items-center py-1">
                                            <span
                                                class="bg-orange-100 text-orange-800 text-xs px-2 py-1 font-semibold rounded-full">
                                                Samo {{ item.product.stock }}
                                                {{ item.product.stock === 1 ? 'komad' : 'komada' }}&#x2009;!
                                            </span>
                                        </div>
                                        <button
                                            @click="addToCart(item.product.id)"
                                            class="flex items-center justify-center text-sm mt-2 py-1.5 w-full rounded-md text-white bg-primary-light hover:bg-rose-800"
                                            role="button">
                                            <AddToCartIcon class="size-4 me-2 shrink-0" />
                                            Dodaj u korpu
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SplideSlide>
                </Splide>
            </section>
        </div>
    </div>
</template>

<script setup lang="ts">
import ArrowRightIcon from './icons/ArrowRightIcon.vue'
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '~/assets/css/splide.css'
import AddToCartIcon from './icons/AddToCartIcon.vue'
import HourglassIcon from './icons/HourglassIcon.vue'
import { useCartStore } from '~/stores/CartStore'
import { useWishlistStore } from '~/stores/WishlistStore'

const wishlistStore = useWishlistStore()
const cartStore = useCartStore()

const { showNotification } = useNotification()
const { width } = useWindowSize()
const chunkSize = ref(4)
const productChunks = ref<any[][]>([])

const lowStockItems = computed(() => {
    return wishlistStore.wishlist.wishlistItems
        .filter(item => item.product.stock >= 1 && item.product.stock <= 3)
        .sort((a, b) => {
            const priceA = a.product.discountPrice || a.product.price
            const priceB = b.product.discountPrice || b.product.price
            return priceA - priceB
        })
})

const updateChunks = () => {
    const chunks = []
    for (let i = 0; i < lowStockItems.value.length; i += chunkSize.value) {
        chunks.push(lowStockItems.value.slice(i, i + chunkSize.value))
    }
    productChunks.value = chunks
}

watch(
    width,
    newWidth => {
        if (newWidth >= 1280) {
            chunkSize.value = 4
        } else if (newWidth >= 1024) {
            chunkSize.value = 3
        } else if (newWidth >= 640) {
            chunkSize.value = 2
        } else {
            chunkSize.value = 1
        }
        updateChunks()
    },
    { immediate: true }
)

onMounted(() => {
    updateChunks()
    watch(lowStockItems, updateChunks, { deep: true })
})

const options = {
    type: 'slide',
    gap: '1rem',
    speed: 800,
    pagination: false,
    arrows: false,
}

const addToCart = async (productId: number) => {
    try {
        await cartStore.addToCart(productId)
        showNotification('success', 'Proizvod dodat u korpu!', 'Ovaj proizvod je uspešno dodat u korpu.', 4000)
    } catch (error: any) {
        showNotification(
            'error',
            'Greška pri dodavanju u korpu!',
            'Došlo je do problema pri dodavanju proizvoda u korpu.'
        )
    }
}
</script>
