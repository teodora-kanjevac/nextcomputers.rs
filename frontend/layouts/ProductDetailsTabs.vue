<template>
    <div>
        <client-only>
            <ul
                class="flex-wrap flex mx-auto gap-3 mb-2 text-sm sm:text-base font-medium text-gray-600"
                id="default-tab"
                data-tabs-toggle="#tab"
                role="tablist">
                <li class="focus-within:z-10 rounded-s-lg" role="presentation">
                    <button
                        :class="[
                            'flex items-center justify-center w-40 sm:w-auto px-4 py-3 sm:px-5 sm:py-3 rounded-lg',
                            {
                                'text-white bg-primary-light': activeTab === 'specs',
                                'hover:text-gray-900 hover:bg-gray-200 bg-gray-100 sm:bg-transparent text-gray-900 sm:text-gray-600':
                                    activeTab !== 'specs',
                            },
                        ]"
                        id="specs-tab"
                        type="button"
                        @click="activeTab = 'specs'">
                        <InfoIcon class="size-4 sm:size-6 me-2 sm:me-3" />
                        Specifikacije
                    </button>
                </li>
                <li class="focus-within:z-10" role="presentation">
                    <button
                        :class="[
                            'flex items-center justify-center w-40 sm:w-auto px-4 py-3 sm:px-5 sm:py-3 rounded-lg',
                            {
                                'text-white bg-primary-light': activeTab === 'declaration',
                                'hover:text-gray-900 hover:bg-gray-200 bg-gray-100 sm:bg-transparent text-gray-900 sm:text-gray-600':
                                    activeTab !== 'declaration',
                            },
                        ]"
                        id="declaration-tab"
                        type="button"
                        @click="activeTab = 'declaration'">
                        <ListIcon class="size-5 sm:size-6 me-2 sm:me-3" />
                        Deklaracija
                    </button>
                </li>

                <li class="focus-within:z-10" role="presentation">
                    <button
                        :class="[
                            'flex items-center justify-center w-40 sm:w-auto px-4 py-3 sm:px-5 sm:py-3 rounded-lg',
                            {
                                'text-white bg-primary-light': activeTab === 'reviews',
                                'hover:text-gray-900 hover:bg-gray-200 bg-gray-100 sm:bg-transparent text-gray-900 sm:text-gray-600':
                                    activeTab !== 'reviews',
                            },
                        ]"
                        id="reviews-tab"
                        type="button"
                        @click="activeTab = 'reviews'">
                        <StarOutlinedIcon class="size-4 sm:size-5 me-2" />
                        Recenzije
                    </button>
                </li>
            </ul>
            <div v-if="product" id="tab" class="px-1 py-1 sm:px-3 sm:py-4 rounded-lg bg-gray-50">
                <div v-if="activeTab === 'specs'">
                    <SpecificationsTab
                        v-if="Object.keys(product.specifications).length > 0"
                        :specs="product?.specifications" />
                    <div v-else class="flex justify-center items-center py-10 text-gray-600 font-semibold">
                        Specifikacije za ovaj proizvod nisu dostupne
                    </div>
                </div>
                <div v-if="activeTab === 'declaration'">
                    <DeclarationTab :declaration="product?.declaration" />
                </div>
                <div v-if="activeTab === 'reviews'">
                    <ReviewsTab :rating="product?.ratings" />
                </div>
            </div>
        </client-only>
    </div>
</template>

<script setup lang="ts">
import InfoIcon from '~/components/icons/InfoIcon.vue'
import ListIcon from '~/components/icons/ListIcon.vue'
import StarOutlinedIcon from '~/components/icons/StarOutlinedIcon.vue'
import type { ProductDTO } from '~/shared/types/ProductDTO'
import { useProductStore } from '~/stores/ProductStore'

const activeTab = ref('specs')

const productStore = useProductStore()

const product = computed<ProductDTO | null>(() => productStore.product)
</script>
