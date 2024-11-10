<template>
    <div class="flex flex-col min-h-screen">
        <div class="flex flex-1">
            <FilterCategorySidebar />
            <div class="flex-1 px-5 lg:px-8 pt-8 pb-11 lg:py-11">
                <h2 class="font-semibold text-2xl ps-2 lg:ps-0.5 pb-4">Najprodavaniji proizvodi</h2>
                <div class="flex mx-1.5 mb-1 mt-3 gap-2">
                    <CategoryDrawer />
                    <FilterDrawer />
                </div>
                <div class="grid gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                    <Product v-for="product in products" :key="product.id" :product="product" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { DeclarationDTO, ProductDTO, SpecificationsDTO } from '~/shared/types/ProductDTO'

const products: ProductDTO[] = [
    {
        id: '1',
        name: 'ASUS B550-PLUS TUF',
        price: 104990,
        discountPrice: 99990,
        image: 'ASUS B550-PLUS TUF.jpg',
        specifications: {} as SpecificationsDTO,
        declaration: {} as DeclarationDTO,
        reviews: [],
        ratings: {
            totalReviews: 120,
            starRatings: [
                { star: 5, amount: 60 },
                { star: 4, amount: 40 },
                { star: 3, amount: 10 },
                { star: 2, amount: 7 },
                { star: 1, amount: 3 },
            ],
        },
        retailPrice: 0
    },
    {
        id: '2',
        name: 'Kingston 3600mhz 8gb',
        price: 29990,
        discountPrice: 27990,
        image: 'Kingston 3600mhz 8gb.jpg',
        specifications: {} as SpecificationsDTO,
        declaration: {} as DeclarationDTO,
        reviews: [],
        ratings: {
            totalReviews: 95,
            starRatings: [
                { star: 5, amount: 55 },
                { star: 4, amount: 20 },
                { star: 3, amount: 10 },
                { star: 2, amount: 5 },
                { star: 1, amount: 5 },
            ],
        },
        retailPrice: 0
    },
    {
        id: '3',
        name: 'GIGABYTE A520M',
        price: 55990,
        discountPrice: 49990,
        image: 'GIGABYTE A520M.jpg',
        specifications: {} as SpecificationsDTO,
        declaration: {} as DeclarationDTO,
        reviews: [],
        ratings: {
            totalReviews: 85,
            starRatings: [
                { star: 5, amount: 40 },
                { star: 4, amount: 30 },
                { star: 3, amount: 10 },
                { star: 2, amount: 3 },
                { star: 1, amount: 2 },
            ],
        },
        retailPrice: 0
    },
    {
        id: '4',
        name: 'Intel 14900k',
        price: 15990,
        discountPrice: 0,
        image: 'Intel 14900k.jpg',
        specifications: {} as SpecificationsDTO,
        declaration: {} as DeclarationDTO,
        reviews: [],
        ratings: {
            totalReviews: 150,
            starRatings: [
                { star: 5, amount: 90 },
                { star: 4, amount: 30 },
                { star: 3, amount: 20 },
                { star: 2, amount: 5 },
                { star: 1, amount: 5 },
            ],
        },
        retailPrice: 0
    },
    {
        id: '5',
        name: 'R5 5500 RX 6600',
        price: 38990,
        discountPrice: 35990,
        image: 'R5 5500 RX 6600.jpg',
        specifications: {} as SpecificationsDTO,
        declaration: {} as DeclarationDTO,
        reviews: [],
        ratings: {
            totalReviews: 110,
            starRatings: [
                { star: 5, amount: 65 },
                { star: 4, amount: 25 },
                { star: 3, amount: 10 },
                { star: 2, amount: 5 },
                { star: 1, amount: 5 },
            ],
        },
        retailPrice: 0
    },
    {
        id: '6',
        name: 'RTX 3050 VENTUS2',
        price: 77990,
        discountPrice: 74990,
        image: 'RTX 3050 VENTUS2.jpg',
        specifications: {} as SpecificationsDTO,
        declaration: {} as DeclarationDTO,
        reviews: [],
        ratings: {
            totalReviews: 140,
            starRatings: [
                { star: 5, amount: 75 },
                { star: 4, amount: 40 },
                { star: 3, amount: 15 },
                { star: 2, amount: 5 },
                { star: 1, amount: 5 },
            ],
        },
        retailPrice: 0
    },
    {
        id: '7',
        name: 'RTX 4060 TI AERO',
        price: 79990,
        discountPrice: 0,
        image: 'RTX 4060 TI AERO.jpg',
        specifications: {} as SpecificationsDTO,
        declaration: {} as DeclarationDTO,
        reviews: [],
        ratings: {
            totalReviews: 105,
            starRatings: [
                { star: 5, amount: 50 },
                { star: 4, amount: 30 },
                { star: 3, amount: 15 },
                { star: 2, amount: 5 },
                { star: 1, amount: 5 },
            ],
        },
        retailPrice: 0
    },
    {
        id: '8',
        name: 'RTX 4070 TUF',
        price: 23990,
        discountPrice: 21990,
        image: 'RTX 4070 TUF.jpg',
        specifications: {} as SpecificationsDTO,
        declaration: {} as DeclarationDTO,
        reviews: [],
        ratings: {
            totalReviews: 80,
            starRatings: [
                { star: 5, amount: 30 },
                { star: 4, amount: 25 },
                { star: 3, amount: 15 },
                { star: 2, amount: 5 },
                { star: 1, amount: 5 },
            ],
        },
        retailPrice: 0
    },
    {
        id: '9',
        name: 'Ryzen 5 5600x',
        price: 51990,
        discountPrice: 48990,
        image: 'Ryzen 5 5600x.jpg',
        specifications: {} as SpecificationsDTO,
        declaration: {} as DeclarationDTO,
        reviews: [],
        ratings: {
            totalReviews: 110,
            starRatings: [
                { star: 5, amount: 30 },
                { star: 4, amount: 25 },
                { star: 3, amount: 20 },
                { star: 2, amount: 25 },
                { star: 1, amount: 10 },
            ],
        },
        retailPrice: 0
    },
]
</script>
