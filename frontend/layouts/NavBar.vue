<template>
    <div>
        <nav class="bg-white border-gray-200">
            <div class="md:max-w-screen-2xl flex flex-wrap items-center justify-between md:justify-around mx-auto p-4">
                <NuxtLink to="/" class="flex items-center">
                    <Logo class="w-14 md:xl:w-16" />
                    <span class="self-center text-lg md:xl:text-xl font-semibold pl-5">
                        nextcomputers.rs
                    </span>
                </NuxtLink>
                <div class="flex md:flex-grow md:w-40 md:xl:px-36 md:pl-10 md:order-1">
                    <button type="button" data-collapse-toggle="search" aria-controls="search"
                        aria-expanded="false"
                        class="md:hidden text-gray-500 hover:bg-gray-100 rounded-lg text-sm px-2 me-1">
                        <SearchIcon class="size-5 text-gray-600"></SearchIcon>
                    </button>
                    <div class="relative md:flex-1 hidden md:block">
                        <SearchBar></SearchBar>
                    </div>
                    <button data-collapse-toggle="navbar" type="button"
                        class="inline-flex items-center px-2 justify-center text-sm text-gray-500 rounded-lg md:hidden"
                        aria-controls="navbar-search" aria-expanded="false">
                        <HamburgerIcon class="size-5 text-gray-600"></HamburgerIcon>
                    </button>
                </div>
                <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="search">
                    <div class="relative mt-7 md:hidden">
                        <SearchBar></SearchBar>
                    </div>
                </div>
                <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar">
                    <ul
                        class="flex flex-col md:items-center p-4 md:p-0 mt-4 font-medium text-base md:xl:text-lg border border-gray-100 bg-gray-50 md:xl:space-x-8 md:space-x-5 md:flex-row md:mt-0 md:border-0 md:bg-white">
                        <li>
                            <NavLink :path="'/'" :title="'Naslovna'"
                                class="block md:hidden py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0">
                            </NavLink>
                        </li>
                        <li>
                            <NavLink :path="'/'" :title="'O nama'"
                                class="block py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0">
                            </NavLink>
                        </li>
                        <li>
                            <NavLink :path="'/'" :title="'Proizvodi'"
                                class="block py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0">
                            </NavLink>
                        </li>
                        <li>
                            <NavLink :path="'/'" :title="'Prijavite se'"
                                class="block py-2 px-3 md:py-1 md:px-4 text-gray-100 md:rounded-full rounded md:text-slate-50 active:bg-primary bg-primary-light">
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script setup>
import SearchIcon from "~/components/icons/SearchIcon.vue"
import HamburgerIcon from "~/components/icons/HamburgerIcon.vue"
import Logo from "~/components/Logo.vue"
import NavLink from "~/components/NavLink.vue"
</script>