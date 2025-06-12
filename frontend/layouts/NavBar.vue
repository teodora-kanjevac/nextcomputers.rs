<template>
    <div>
        <nav
            ref="navbarRef"
            class="bg-gray-800 border-gray-200 top-0 left-0 w-full py-3.5 duration-300"
            :class="{ 'md:py-1.5 fixed z-20 shadow-md': isScrolled && !isMobile }">
            <div
                class="md:max-w-screen-2xl flex flex-wrap items-center justify-between md:justify-around mx-auto px-3 sm:px-4">
                <Logo class="font-medium text-gray-100" />

                <div class="flex md:flex-grow md:w-40 md:xl:px-20 md:pl-5">
                    <button
                        type="button"
                        @click="toggleSearchMenu"
                        aria-controls="search"
                        :aria-expanded="isSearchOpen"
                        class="md:hidden rounded-lg text-sm px-2 transition-opacity duration-300 ease-in-out">
                        <SearchIcon class="size-5 text-gray-200" />
                    </button>

                    <div class="relative md:flex-1 flex md:hidden">
                        <NuxtLink to="/korpa" class="flex gap-3 p-2 text-gray-200 rounded">
                            <CartWithBadge class="size-6" />
                        </NuxtLink>
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
                        <HamburgerIcon class="size-5 text-gray-200" />
                    </button>
                </div>

                <div class="hidden md:flex md:justify-end md:w-auto" id="navbar">
                    <NavBarSkeleton v-if="!authStore.hydrated" />
                    <NavBarLinks v-else />
                </div>

                <div
                    ref="searchMenu"
                    class="items-center justify-between w-full md:w-auto h-14 md:flex md:order-1 overflow-hidden transition-all duration-500 ease-in-out"
                    id="search">
                    <div class="relative mt-4 md:hidden">
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
import SearchIcon from '~/components/icons/SearchIcon.vue'
import HamburgerIcon from '~/components/icons/HamburgerIcon.vue'
import SearchBar from '~/components/SearchBar.vue'
import Logo from '~/components/Logo.vue'
import { useAuthStore } from '~/stores/AuthStore'

const searchMenu = ref<HTMLElement | null>(null)
const navbarMenu = ref<HTMLElement | null>(null)
const navbarRef = ref<HTMLElement | null>(null)

const isSearchOpen = ref(false)
const isNavbarOpen = ref(false)

const authStore = useAuthStore()
const { isScrolled, isVisible, shouldHideOnScroll, isMobile } = useScroll(navbarRef.value)

const updateNavbarVisibility = (show: boolean, useTransition = true) => {
    if (!navbarRef.value || isMobile.value || !shouldHideOnScroll.value) {
        if (navbarRef.value) {
            navbarRef.value.classList.remove('-translate-y-full')
            navbarRef.value.classList.add('translate-y-0')
        }
        return
    }

    navbarRef.value.classList.toggle('transition-all', useTransition)
    navbarRef.value.classList.toggle('transition-none', !useTransition)

    const showClass = 'translate-y-0'
    const hideClass = '-translate-y-full'

    navbarRef.value.classList.toggle(showClass, show)
    navbarRef.value.classList.toggle(hideClass, !show)
}

const updateStateOnMobile = (isMobileScreen: boolean) => {
    if (isMobileScreen) {
        isSearchOpen.value = true
        isNavbarOpen.value = false
    } else {
        isSearchOpen.value = false
        isNavbarOpen.value = false
    }
}

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
watch(isVisible, visible => {
    updateNavbarVisibility(visible === false, false)
})

watch(isScrolled, scrolled => {
    updateNavbarVisibility(scrolled)
})

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
</script>

<style scoped>
@media (max-width: 767px) {
    #navbarMenu {
        height: 0;
        overflow: hidden;
    }
}
</style>
