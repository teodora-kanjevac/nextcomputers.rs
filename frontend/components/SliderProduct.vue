<template>
    <div>
        <div class="rounded-lg border border-gray-200 bg-white px-6 py-5 m-1 shadow-md">
            <div class="mb-8 h-56 w-full">
                <NuxtLink to="/">
                    <NuxtImg class="mx-auto h-full" :src="product.image" :alt="product.name" />
                </NuxtLink>
            </div>

            <div class="flex items-center justify-between gap-5">
                <NuxtLink to="/"
                    class="text-lg font-semibold ms-0.5 leading-tight line-clamp-2 text-gray-900 hover:underline">
                    {{ product.name }}
                </NuxtLink>
                <button :id="`tooltipAddToFavoritesButton-${product.id}`" type="button"
                    class="rounded-lg m-1 p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900">
                    <HeartOutlineIcon class="size-6" />
                </button>
            </div>

            <StarValue :rating="3.7" :total-reviews="890" />

            <div class="mt-2 flex items-center gap-1.5">
                <svg class="size-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                    height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m7.171 12.906-2.153 6.411 2.672-.89 1.568 2.34 1.825-5.183m5.73-2.678 2.154 6.411-2.673-.89-1.568 2.34-1.825-5.183M9.165 4.3c.58.068 1.153-.17 1.515-.628a1.681 1.681 0 0 1 2.64 0 1.68 1.68 0 0 0 1.515.628 1.681 1.681 0 0 1 1.866 1.866c-.068.58.17 1.154.628 1.516a1.681 1.681 0 0 1 0 2.639 1.682 1.682 0 0 0-.628 1.515 1.681 1.681 0 0 1-1.866 1.866 1.681 1.681 0 0 0-1.516.628 1.681 1.681 0 0 1-2.639 0 1.681 1.681 0 0 0-1.515-.628 1.681 1.681 0 0 1-1.867-1.866 1.681 1.681 0 0 0-.627-1.515 1.681 1.681 0 0 1 0-2.64c.458-.361.696-.935.627-1.515A1.681 1.681 0 0 1 9.165 4.3ZM14 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
                </svg>
                <p class="text-sm font-medium text-gray-500">Brza dostava
                </p>
            </div>

            <div class="flex items-center justify-between mt-3">
                <div class="flex-col">
                    <div class="">
                        <span class="rounded px-2.5 py-1 text-xs font-semibold bg-red-100 text-red-800">
                            Čak do 15% popusta
                        </span>
                        <p class="text-base line-through font-bold leading-tight text-gray-500 mt-3 -mb-0.5 ms-0.5">
                            {{ product.price }} <span class="text-base">RSD</span>
                        </p>
                    </div>
                    <p class="text-2xl font-extrabold leading-tight text-gray-900">
                        {{ product.price }} <span class="text-lg">RSD</span>
                    </p>
                </div>
                <button type="button"
                    class="inline-flex self-end rounded-lg p-2.5 text-gray-100 bg-primary-light hover:bg-rose-800 active:bg-primary">
                    <AddToCartIcon class="size-6" />
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import HeartOutlineIcon from '~/components/icons/HeartOutlineIcon.vue'
import AddToCartIcon from '~/components/icons/AddToCartIcon.vue'

const props = defineProps({
    product: {
        type: Object,
        required: true
    }
});
</script>