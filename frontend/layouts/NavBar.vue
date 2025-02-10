<template>
    <div>
        <nav class="bg-gray-800 border-gray-200">
            <div
                class="md:max-w-screen-2xl flex flex-wrap items-center justify-between md:justify-around mx-auto p-3 sm:p-4">
                <Logo class="font-medium text-gray-100" />

                <div class="flex md:flex-grow md:w-40 md:xl:px-20 md:pl-5">
                    <button
                        type="button"
                        @click="toggleSearchMenu"
                        aria-controls="search"
                        :aria-expanded="isSearchOpen"
                        class="md:hidden rounded-lg text-sm px-2 me-1 transition-opacity duration-300 ease-in-out">
                        <SearchIcon class="size-5 text-gray-300" />
                    </button>

                    <div class="relative md:flex-1 flex md:hidden">
                        <a :href="`/korpa`" class="flex gap-3 p-2 text-gray-100 rounded">
                            <CartWithBadge class="size-6" />
                        </a>
                    </div>

                    <div class="relative md:flex-1 hidden md:block">
                        <SearchBar />
                    </div>

                    <button
                        type="button"
                        @click="toggleNavbarMenu"
                        aria-controls="navbar"
                        :aria-expanded="isNavbarOpen"
                        class="inline-flex items-center px-2 justify-center text-sm rounded-lg md:hidden transition-all duration-500 ease-in-out">
                        <HamburgerIcon class="size-5 text-gray-300" />
                    </button>
                </div>

                <div class="hidden md:flex md:justify-end md:w-auto" id="navbar">
                    <NavBarLinks />
                </div>

                <div
                    ref="searchMenu"
                    class="items-center justify-between w-full md:w-auto h-[73px] md:flex md:order-1 overflow-hidden transition-all duration-500 ease-in-out"
                    id="search">
                    <div class="relative mt-7 md:hidden">
                        <SearchBar />
                    </div>
                </div>

                <div
                    ref="navbarMenu"
                    class="items-center justify-between w-full overflow-hidden md:hidden"
                    id="navbarMenu">
                    <NavBarMenu />
                </div>
            </div>
        </nav>
    </div>
</template>

<script setup lang="ts">
import { useMediaQuery } from '@vueuse/core'
import SearchIcon from '~/components/icons/SearchIcon.vue'
import HamburgerIcon from '~/components/icons/HamburgerIcon.vue'
import SearchBar from '~/components/SearchBar.vue'
import Logo from '~/components/Logo.vue'

const searchMenu = ref<HTMLElement | null>(null)
const navbarMenu = ref<HTMLElement | null>(null)

const isSearchOpen = ref(false)
const isNavbarOpen = ref(false)

const isMobile = useMediaQuery('(max-width: 767px)')

const updateStateOnMobile = (isMobileScreen: boolean) => {
    if (isMobileScreen) {
        isSearchOpen.value = true
        isNavbarOpen.value = false
    } else {
        isSearchOpen.value = false
        isNavbarOpen.value = false
    }
}

watch(isMobile, updateStateOnMobile)

watch([isSearchOpen, isNavbarOpen], ([searchOpen, navbarOpen]) => {
    if (searchMenu.value) {
        const targetHeight = searchOpen ? searchMenu.value.scrollHeight : 0
        slideInOut(searchMenu.value, targetHeight, 0.25)
    }
    if (navbarMenu.value) {
        const targetHeight = navbarOpen ? navbarMenu.value.scrollHeight : 0
        slideInOut(navbarMenu.value, targetHeight, 0.25)
    }
})

onMounted(() => {
    updateStateOnMobile(isMobile.value)
})

const toggleSearchMenu = () => {
    isSearchOpen.value = !isSearchOpen.value
    if (isSearchOpen.value) {
        isNavbarOpen.value = false
    }
}

const toggleNavbarMenu = () => {
    isNavbarOpen.value = !isNavbarOpen.value
    if (isNavbarOpen.value) {
        isSearchOpen.value = false
    }
}
</script>

<style scoped>
@media (max-width: 767px) {
    #navbarMenu {
        height: 0;
        overflow: hidden;
    }
}
</style>
