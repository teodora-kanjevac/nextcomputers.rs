<template>
    <div>
        <footer class="p-7 bg-gray-800 sm:p-10">
            <div class="mx-auto max-w-screen-xl">
                <div class="md:flex md:justify-between">
                    <div class="grid grid-cols-2 gap-6 gap-y-9 sm:gap-12 sm:grid-cols-3 lg:grid-cols-5">
                        <FooterSection />
                    </div>
                </div>
                <hr class="my-6 border-gray-600 sm:mx-auto lg:my-10" />
                <div class="sm:flex sm:items-center sm:justify-between">
                    <Logo class="hidden lg:flex text-gray-200 font-medium" />
                    <span class="text-xs text-gray-300 flex justify-center gap-0.5 text-center">
                        Copyright © {{ new Date().getFullYear() }}
                        <a href="/" class="hover:underline">nextcomputers.rs.</a>
                        Sva prava zadržana.
                    </span>
                    <div class="flex space-x-4 justify-center">
                        <SocialIcons />
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup>
import FooterSection from '~/components/FooterSection.vue'
import Logo from '~/components/Logo.vue'
</script>
