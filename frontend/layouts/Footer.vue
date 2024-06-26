<template>
    <div>
        <footer class="p-7 bg-neutral-800 sm:p-10">
            <div class="mx-auto max-w-screen-xl">
                <div class="md:flex md:justify-between">
                    <div></div>
                    <div class="grid grid-cols-2 gap-6 gap-y-9 sm:gap-12 sm:grid-cols-3">
                        <div>
                            <h2 class="mb-6 text-sm font-medium tracking-wider text-gray-200 uppercase">Treba Vam pomoć?</h2>
                            <ul class="text-gray-400">
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">Česta pitanja</a>
                                </li>
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">Kako kupovati</a>
                                </li>
                                <li>
                                    <a href="#" class="hover:underline">Kontakt</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 class="mb-6 text-sm font-medium tracking-wider text-gray-200 uppercase">Legalnosti</h2>
                            <ul class="text-gray-400">
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">Politika privatnosti</a>
                                </li>
                                <li>
                                    <a href="#" class="hover:underline">Uslovi korišćenja</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 class="mb-6 text-sm font-medium tracking-wider text-gray-200 uppercase">Plaćanje</h2>
                            <ul class="text-gray-400">
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">Način plaćanja</a>
                                </li>
                                <li>
                                    <a href="#" class="hover:underline">Isporuka</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr class="my-6 border-gray-600 sm:mx-auto lg:my-10" />
                <div class="sm:flex sm:items-center sm:justify-between">
                    <Logo class="hidden md:flex text-gray-200 font-medium"></Logo>
                    <span class="text-sm text-gray-300 sm:text-center">Copyright © 2024 <NuxtLink to="/"
                            class="hover:underline">nextcomputers.rs</NuxtLink>. Sva prava zadržana.
                    </span>
                    <div class="flex mt-7 space-x-6 justify-center sm:mt-0">
                        <a href="https://www.instagram.com/nextcomputers.rs" target="_blank">
                            <InstagramIcon class="size-5 sm:size-7 text-gray-300 hover:text-rose-800"></InstagramIcon>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup>
import InstagramIcon from '~/components/icons/InstagramIcon.vue'
</script>