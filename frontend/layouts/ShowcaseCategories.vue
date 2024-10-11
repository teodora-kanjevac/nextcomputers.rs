<template>
    <div>
        <section class="py-8 antialiased md:py-16">
            <div class="mx-auto max-w-screen-xl px-6 2xl:px-0">
                <div class="flex flex-col gap-4">
                    <div class="mb-3 mx-2 flex items-center justify-between gap-4">
                        <h2 class="text-xl font-semibold text-gray-900 sm:text-2xl">Pretražite po kategorijama</h2>
                        <SeeAllCategoriesLink class="hidden sm:flex"/>
                    </div>

                    <div class="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
                        <template v-for="category in categories" :key="category.id">
                            <ShowcaseCategoryCard :category="category"/>
                        </template>
                    </div>

                    <SeeAllCategoriesLink class="flex sm:hidden mt-1 ml-1"/>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { categories } from '~/assets/static/categoryShowcase';
</script>