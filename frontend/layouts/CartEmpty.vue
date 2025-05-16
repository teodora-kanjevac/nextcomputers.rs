<template>
    <div class="min-h-screen py-10">
        <div class="max-w-screen-xl mx-auto px-5 2xl:px-0">
            <div class="mx-auto">
                <h2 class="font-semibold text-xl sm:text-2xl ps-0.5 pb-2 sm:pb-4 border-b-2 border-gray-200">
                    Vaša korpa
                </h2>
                <div class="my-32 flex justify-center">
                    <div class="text-center text-gray-900">
                        <img class="size-60 sm:size-96 mb-10" src="/assets/images/empty-cart.png" alt="Prazna Korpa" />
                        <p class="font-medium text-base sm:text-lg mb-5">Vaša korpa je trenutno prazna</p>
                        <a href="/" class="text-sm sm:text-base font-normal underline hover:text-gray-600">
                            Vrati se na početnu stranicu
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts"></script>
