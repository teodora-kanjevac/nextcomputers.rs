<template>
    <div class="font-medium">
        <draggable
            v-model="wishlist"
            item-key="id"
            handle=".drag-handle"
            @end="onReorder"
            tag="div"
            class="space-y-2"
            :animation="200"
            ghost-class="drag-ghost"
            chosen-class="drag-chosen"
            drag-class="drag-dragging"
            :fallback-class="'drag-fallback'"
            :fallback-tolerance="3"
            :touch-start-threshold="5"
            :fallback-offset="10">
            <template #item="{ element: item }">
                <div>
                    <div
                        class="select-none hidden lg:grid relative rounded-lg shadow-sm xl:px-4 px-2 py-3 hover:bg-gray-50 transition-colors duration-100 border border-gray-100 lg:grid-cols-[auto_3fr_1fr_1fr_auto] 2xl:grid-cols-[auto_4fr_1fr_1fr_auto] xl:gap-4 gap-2 lg:items-center"
                        :key="item.id">
                        <div class="flex items-center justify-center cursor-grab drag-handle text-gray-700 p-0.5">
                            <DragAndDropIcon class="size-5 shrink-0" />
                        </div>
                        <div class="flex items-center gap-4">
                            <img
                                :src="item.product.thumbnail"
                                :alt="item.product.name"
                                class="size-16 object-contain rounded border" />
                            <div class="me-5">
                                <NuxtLink
                                    :to="`/proizvod/${item.product.id}`"
                                    class="text-gray-900 text-sm xl:text-base hover:underline break-words line-clamp-2">
                                    {{ item.product.name }}
                                </NuxtLink>
                                <div class="mt-1 font-normal text-xs text-gray-500">EAN: {{ item.product.ean }}</div>
                            </div>
                        </div>
                        <div class="flex-col ms-2">
                            <div :class="{ hidden: !item.product.discountPrice }">
                                <p class="text-sm line-through font-semibold leading-tight text-gray-500">
                                    {{ formatPrice(item.product.price) }} RSD
                                </p>
                            </div>
                            <p
                                :class="{ 'text-red-700': item.product.discountPrice }"
                                class="text-base xl:text-lg font-semibold leading-tight text-gray-900">
                                {{ formatPrice(item.product.discountPrice || item.product.price) }}
                                <span class="text-base">RSD</span>
                            </p>
                        </div>
                        <div class="flex justify-start ms-3">
                            <span
                                :class="{
                                    'bg-green-100 text-green-800': item.product.available,
                                    'bg-red-100 text-red-800': !item.product.available,
                                }"
                                class="text-xs px-1.5 py-1 rounded inline-block font-semibold">
                                {{ item.product.available ? 'Dostupno' : 'Nije dostupno' }}
                            </span>
                        </div>
                        <div class="flex justify-end gap-2 xl:gap-3 w-full">
                            <template v-if="item.product.available">
                                <button
                                    class="hidden xl:flex items-center bg-primary-light hover:bg-rose-800 text-white text-xs p-2 rounded transition-colors"
                                    @click="addToCart(item.product.id)">
                                    <AddToCartIcon class="size-4 me-1.5 shrink-0" />
                                    Dodaj u korpu
                                </button>
                                <button
                                    class="flex xl:hidden items-center justify-center bg-primary-light hover:bg-rose-800 text-white text-xs p-1.5 rounded transition-colors"
                                    @click="addToCart(item.product.id)">
                                    <AddToCartIcon class="size-5" />
                                </button>
                            </template>
                            <template v-else>
                                <div class="hidden xl:flex items-center bg-gray-100 text-gray-400 text-xs p-2 rounded opacity-0">
                                    <AddToCartIcon class="size-4 me-1.5 shrink-0" />
                                    Dodaj u korpu
                                </div>
                                <div
                                    class="flex xl:hidden items-center justify-center bg-gray-100 text-gray-400 text-xs p-1.5 rounded opacity-0">
                                    <AddToCartIcon class="size-5" />
                                </div>
                            </template>
                            <button
                                v-tippy="{ content: 'Obriši iz liste želja', placement: 'right', delay: [500, null] }"
                                @click="deleteItem(item.id)"
                                class="hover:bg-gray-200 text-gray-700 text-sm py-1 px-1.5 rounded-lg">
                                <TrashCanIcon class="size-5 shrink-0" />
                            </button>
                        </div>
                    </div>

                    <div
                        class="grid grid-cols-[auto_auto_1fr] grid-rows-[repeat(5,minmax(min-content,max-content))] gap-x-3 gap-y-1 lg:hidden relative rounded-lg shadow-sm px-2 py-2.5 hover:bg-gray-50 transition-colors duration-100 border border-gray-100 items-stretch"
                        :key="item.id">
                        <div
                            class="row-span-5 col-start-1 flex items-center cursor-grab drag-handle text-gray-700 h-full">
                            <DragAndDropIcon class="size-5" />
                        </div>
                        <img
                            :src="item.product.thumbnail"
                            :alt="item.product.name"
                            class="row-span-5 row-start-1 col-start-2 size-16 object-cover rounded border self-center" />

                        <NuxtLink
                            :to="`/proizvod/${item.product.id}`"
                            class="row-start-1 col-start-3 text-gray-900 hover:underline font-medium text-sm line-clamp-2 self-center">
                            {{ item.product.name }}
                        </NuxtLink>
                        <div class="row-start-2 col-start-3 self-center">
                            <span
                                :class="{
                                    'bg-green-100 text-green-800': item.product.available,
                                    'bg-red-100 text-red-800': !item.product.available,
                                }"
                                class="text-[11px] px-1.5 py-1 rounded font-semibold w-fit">
                                {{ item.product.available ? 'Dostupno' : 'Nije dostupno' }}
                            </span>
                        </div>
                        <div class="row-start-5 col-start-3 col-span-2 flex flex-col gap-1">
                            <div class="flex justify-between items-end">
                                <div>
                                    <p
                                        v-if="item.product.discountPrice"
                                        class="text-sm line-through font-semibold text-gray-500 leading-tight">
                                        {{ formatPrice(item.product.price) }} RSD
                                    </p>
                                    <p
                                        :class="{ 'text-red-700': item.product.discountPrice }"
                                        class="text-base font-semibold leading-tight text-gray-900">
                                        {{ formatPrice(item.product.discountPrice || item.product.price) }}
                                        <span class="text-sm">RSD</span>
                                    </p>
                                </div>
                                <div class="flex gap-1.5">
                                    <button
                                        v-if="item.product.available"
                                        class="flex items-center bg-primary-light hover:bg-rose-800 text-white text-xs p-1.5 rounded"
                                        @click="addToCart(item.product.id)">
                                        <AddToCartIcon class="size-5 shrink-0" />
                                    </button>
                                    <div
                                        v-else
                                        class="flex items-center bg-gray-100 text-gray-400 opacity-0 text-xs p-1.5 rounded pointer-events-none select-none">
                                        <AddToCartIcon class="size-5 shrink-0" />
                                    </div>
                                    <button
                                        v-tippy="{
                                            content: 'Obriši iz liste želja',
                                            placement: 'right',
                                            delay: [500, null],
                                        }"
                                        @click="deleteItem(item.id)"
                                        class="hover:bg-gray-200 text-gray-700 text-sm px-1.5 rounded-lg">
                                        <TrashCanIcon class="size-5 shrink-0" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </draggable>
    </div>
</template>

<script setup lang="ts">
import { useWishlistStore } from '~/stores/WishlistStore'
import { useCartStore } from '~/stores/CartStore'
import AddToCartIcon from './icons/AddToCartIcon.vue'
import TrashCanIcon from './icons/TrashCanIcon.vue'
import draggable from 'vuedraggable'
import type { WishlistItemDTO } from '~/shared/types/WishlistDTO'
import DragAndDropIcon from './icons/DragAndDropIcon.vue'

const { wishlistItems } = defineProps<{
    wishlistItems: WishlistItemDTO[]
}>()

const wishlistStore = useWishlistStore()
const cartStore = useCartStore()
const { showNotification } = useNotification()

const wishlist = ref([...wishlistItems])

const onReorder = async () => {
    wishlistStore.wishlist.wishlistItems = wishlist.value
    await wishlistStore.updateWishlistOrder()
}

watch(wishlist, async () => {
    wishlistStore.wishlist.wishlistItems = [...wishlist.value]
})

const addToCart = async (productId: number) => {
    try {
        await cartStore.addToCart(productId)
        showNotification('success', 'Proizvod dodat u korpu!', 'Ovaj proizvod je uspešno dodat u korpu.', 4000)
    } catch (error: any) {
        if (error.message.includes('Insufficient stock')) {
            showNotification('warn', 'Nema dovoljno proizvoda na stanju!', 'Količina koju ste tražili nije dostupna.')
        } else {
            showNotification(
                'error',
                'Greška pri dodavanju u korpu!',
                'Došlo je do problema pri dodavanju proizvoda u korpu.'
            )
        }
    }
}

const deleteItem = async (itemId: string) => {
    wishlist.value = wishlist.value.filter(item => item.id !== itemId)
    await wishlistStore.removeFromWishlist(itemId)
}
</script>

<style>
.drag-ghost {
    opacity: 0.4;
    border: 2px dashed #bec2c7;
    border-radius: 0.5em;
}

.drag-chosen {
    transition: transform 0.15s ease-in-out;
}

.drag-dragging {
    opacity: 0.8;
    transform: scale(1.02);
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
}

.drag-fallback {
    z-index: -100 !important;
    pointer-events: none !important;
    opacity: 0;
}

@media (pointer: coarse) {
    .drag-ghost {
        opacity: 0.5;
    }

    .drag-dragging {
        transition: none !important;
    }
}
</style>
