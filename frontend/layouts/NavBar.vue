<template>
    <div>
        <nav class="bg-gray-800 border-gray-200">
            <div class="md:max-w-screen-2xl flex flex-wrap items-center justify-between md:justify-around mx-auto p-4">
                <Logo class="font-medium text-gray-100" />
                <div class="flex md:flex-grow md:w-40 md:xl:px-36 md:pl-10 md:order-1">
                    <button
                        type="button"
                        @click="toggleMenu('search')"
                        aria-controls="search"
                        :aria-expanded="isSearchOpen"
                        class="md:hidden rounded-lg text-sm px-2 me-1 transition-opacity duration-300 ease-in-out">
                        <SearchIcon class="size-5 text-gray-300" />
                    </button>
                    <div class="relative md:flex-1 hidden md:block">
                        <SearchBar />
                    </div>

                    <button
                        type="button"
                        @click="toggleMenu('navbar')"
                        aria-controls="navbar"
                        :aria-expanded="isNavbarOpen"
                        class="inline-flex items-center px-2 justify-center text-sm rounded-lg md:hidden transition-all duration-500 ease-in-out">
                        <HamburgerIcon class="size-5 text-gray-300" />
                    </button>
                </div>
                <div
                    ref="search"
                    :style="getMenuStyle(isSearchOpen)"
                    class="items-center justify-between w-full md:w-auto md:flex md:order-1 overflow-hidden transition-all duration-500 ease-in-out"
                    id="search">
                    <div class="relative mt-7 md:hidden">
                        <SearchBar />
                    </div>
                </div>
                <div
                    ref="navbar"
                    :style="getMenuStyle(isNavbarOpen)"
                    class="items-center justify-between w-full md:w-auto md:flex md:order-1 overflow-hidden transition-all duration-500 ease-in-out"
                    id="navbar">
                    <ul
                        class="flex flex-col md:items-center p-4 md:p-0 mt-4 font-medium text-base rounded-lg bg-gray-700 md:xl:space-x-8 md:space-x-5 md:flex-row md:mt-0 md:border-0 md:bg-gray-800">
                        <li>
                            <NuxtLink to="/" class="block md:hidden py-2 px-3 text-gray-100 rounded md:p-0">
                                Početna
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink
                                to="proizvodi"
                                class="block py-2 px-3 text-gray-100 hover:bg-gray-600 rounded md:hover:bg-transparent md:hover:opacity-80 md:p-0">
                                Proizvodi
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink
                                to="/"
                                class="block py-2 px-3 md:py-1 md:px-4 text-gray-100 md:rounded-full rounded md:text-slate-50 active:bg-primary bg-primary-light">
                                Prijavite se
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script setup>
import SearchIcon from '~/components/icons/SearchIcon.vue'
import HamburgerIcon from '~/components/icons/HamburgerIcon.vue'

const search = ref(null)
const navbar = ref(null)
const isSearchOpen = ref(false)
const isNavbarOpen = ref(false)
const isMobile = ref(false)

const styles = {
    open: { maxHeight: '15em' },
    closed: { maxHeight: '0' },
}

const toggleMenu = menu => {
    if (menu === 'search') {
        isSearchOpen.value = !isSearchOpen.value
        if (isSearchOpen.value) isNavbarOpen.value = false
    } else if (menu === 'navbar') {
        isNavbarOpen.value = !isNavbarOpen.value
        if (isNavbarOpen.value) isSearchOpen.value = false
    }
}

const getMenuStyle = isOpen => (isMobile.value && isOpen ? styles.open : styles.closed)

const handleResize = () => {
    isMobile.value = window.innerWidth < 768
    if (!isMobile.value) resetMenuStyles()
    else {
        isSearchOpen.value = true
        isNavbarOpen.value = false
    }
}

const resetMenuStyles = () => {
    if (search.value) search.value.removeAttribute('style')
    if (navbar.value) navbar.value.removeAttribute('style')
}

onMounted(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize)
})
</script>
