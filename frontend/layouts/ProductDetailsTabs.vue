<template>
    <div>
        <client-only>
            <ul
                class="flex-wrap flex mx-auto gap-3 mb-2 text-sm sm:text-base font-semibold text-gray-600"
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
            <div id="tab" class="px-3 py-4 rounded-lg bg-gray-50">
                <div v-if="activeTab === 'specs'">
                    <SpecificationsTab :specs="productSpecs" />
                </div>
                <div v-if="activeTab === 'declaration'">
                    <DeclarationTab :declaration="productDeclaration" />
                </div>
                <div v-if="activeTab === 'reviews'">
                    <ReviewsTab :user-reviews="ratingsResponse.userReviews" :rating="ratingsResponse.rating" />
                </div>
            </div>
        </client-only>
    </div>
</template>

<script setup lang="ts">
import InfoIcon from '~/components/icons/InfoIcon.vue'
import ListIcon from '~/components/icons/ListIcon.vue'
import StarOutlinedIcon from '~/components/icons/StarOutlinedIcon.vue'
import type { DeclarationDTO, SpecificationsDTO } from '~/shared/types/ProductDTO'
import type { ReviewDTO } from '~/shared/types/ReviewDTO'
import type { RatingDTO } from '~/shared/types/RatingDTO'

const activeTab = ref('specs')

const productDeclaration: DeclarationDTO = {
    productName: 'Apple MacBook Pro 17"',
    supplier: 'Tech Solutions Ltd.',
    originCountry: 'USA',
    ean: '8806084194343',
}

const productSpecs: SpecificationsDTO = {
    Processor: 'Apple M1 Chip',
    RAM: '16GB',
    Storage: '512GB SSD',
    Display: '17-inch Retina Display',
    Resolution: '2340 x 1440 px',
    'Battery Life': 'Up to 11 hours',
}

const ratingsResponse: { rating: RatingDTO; userReviews: ReviewDTO[] } = {
    rating: {
        totalReviews: 110,
        starRatings: [
            { star: 5, amount: 40 },
            { star: 4, amount: 25 },
            { star: 3, amount: 20 },
            { star: 2, amount: 15 },
            { star: 1, amount: 10 },
        ],
    },
    userReviews: [
        {
            rating: 4,
            name: 'Alice Johnson',
            date: new Date('2024-09-25'),
            comment:
                'Absolutely love this product! It exceeded my expectations and the customer service was fantastic.',
        },
        {
            rating: 3,
            name: 'Michael Brown',
            date: new Date('2024-08-12'),
            comment:
                'The product is good, but the delivery took longer than expected. Overall, happy with the purchase.',
        },
        {
            rating: 5,
            name: 'Samantha Lee',
            date: new Date('2024-10-02'),
            comment: 'Perfect! Exactly what I was looking for. Would definitely recommend to anyone!',
        },
        {
            rating: 2,
            name: 'David Williams',
            date: new Date('2024-07-30'),
            comment:
                'The product has some issues with durability, and I had to return it. The return process was smooth though.',
        },
        {
            rating: 4,
            name: 'Emily Davis',
            date: new Date('2024-09-18'),
            comment: 'Good quality overall. The design is sleek and fits well with my needs.',
        },
    ],
}
</script>
