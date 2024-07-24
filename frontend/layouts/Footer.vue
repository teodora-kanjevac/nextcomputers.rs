<template>
    <div>
        <footer class="p-7 bg-neutral-800 sm:p-10">
            <div class="mx-auto max-w-screen-xl">
                <div class="md:flex md:justify-between">
                    <div class="grid grid-cols-2 gap-6 gap-y-9 sm:gap-12 sm:grid-cols-3 lg:grid-cols-5">
                        <FooterSection title="Kupovina" :items="[
                            { link: '/', content: 'Politika privatnosti' },
                            { link: '/', content: 'Uslovi korišćenja' },
                            { link: '/', content: 'Reklamacije' },
                            { link: '/', content: 'Prava i obaveze kupaca' }
                        ]" />
                        <FooterSection title="Treba Vam pomoć?" :items="[
                            { link: '/', content: 'Česta pitanja' },
                            { link: '/', content: 'Kako kupovati' },
                            { link: '/', content: 'Kontakt' }
                        ]" />
                        <FooterSection title="Prodaja" :items="[
                            { link: '/', content: 'O našoj kompaniji' },
                            { link: '/', content: 'Akcije i ponude' }
                        ]" />
                        <FooterSection title="Plaćanje" :items="[
                            { link: '/', content: 'Način plaćanja' },
                            { link: '/', content: 'Isporuka' }
                        ]" />
                        <FooterSection title="Korisnički nalog" :items="[
                            { link: '/', content: 'Prijavite se' },
                            { link: '/', content: 'Registracija' },
                            { link: '/', content: 'Zaboravljena lozinka' },
                        ]" />
                    </div>
                </div>
                <hr class="my-6 border-gray-600 sm:mx-auto lg:my-10" />
                <div class="sm:flex sm:items-center sm:justify-between">
                    <Logo class="hidden lg:flex text-gray-200 font-medium"></Logo>
                    <span class="text-sm text-gray-300 sm:text-center">Copyright © 2024 <NuxtLink to="/"
                            class="hover:underline">nextcomputers.rs</NuxtLink>. Sva prava zadržana.
                    </span>
                    <div class="flex mt-7 space-x-4 justify-center sm:mt-0">
                        <a href="https://www.instagram.com/nextcomputers.rs" target="_blank">
                            <FacebookIcon class="size-5 sm:size-6 text-gray-300 hover:text-primary-dark"></FacebookIcon>
                        </a>
                        <a href="https://www.instagram.com/nextcomputers.rs" target="_blank">
                            <InstagramIcon class="size-5 sm:size-6 text-gray-300 hover:text-primary-dark"></InstagramIcon>
                        </a>
                        <a href="https://www.instagram.com/nextcomputers.rs" target="_blank">
                            <TwitterIcon class="size-5 sm:size-6 text-gray-300 hover:text-primary-dark"></TwitterIcon>
                        </a>
                        <a href="https://www.instagram.com/nextcomputers.rs" target="_blank">
                            <LinkedInIcon class="size-5 sm:size-6 text-gray-300 hover:text-primary-dark"></LinkedInIcon>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup>
import InstagramIcon from '~/components/icons/InstagramIcon.vue'
import FacebookIcon from '~/components/icons/FacebookIcon.vue'
import TwitterIcon from '~/components/icons/TwitterIcon.vue'
import LinkedInIcon from '~/components/icons/LinkedInIcon.vue'
</script>