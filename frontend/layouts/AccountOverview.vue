<template>
    <div class="space-y-3">
        <BuyerStatistics />
        <AccountDetails />
        <RecentOrders />
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div class="bg-white rounded-lg border p-6 shadow-sm">
                <h2 class="font-semibold mb-2">My addresses</h2>
                <p class="text-sm text-gray-600">Bonnie Green</p>
                <p class="text-sm text-gray-500 italic">92 Miles Drive, Newark, NJ 07103</p>
                <button class="mt-4 px-4 py-2 text-sm bg-gray-100 rounded">Edit</button>
            </div>

            <div class="bg-white rounded-lg border p-6 shadow-sm">
                <h2 class="font-semibold mb-2">My companies</h2>
                <p class="text-sm text-gray-600">Flowbite LLC</p>
                <p class="text-sm text-gray-500 italic">92 Miles Drive, Newark, NJ 07103</p>
                <button class="mt-4 px-4 py-2 text-sm bg-gray-100 rounded">Edit</button>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div class="bg-white rounded-lg border p-6 shadow-sm">
                <h2 class="font-semibold mb-2">My cards</h2>
                <p class="text-sm text-gray-600">Visa ending in 7658</p>
                <p class="text-sm text-gray-500">Expiry 10/2024</p>
                <div class="space-x-2 mt-2">
                    <button class="text-xs text-red-600">Delete</button>
                    <button class="text-xs text-primary-light">Edit</button>
                </div>
                <button class="mt-4 px-4 py-2 text-sm bg-primary-light text-white rounded">Manage cards</button>
            </div>

            <div class="bg-white rounded-lg border p-6 shadow-sm flex items-center justify-between">
                <div>
                    <h2 class="font-semibold mb-2">Help Us Improve!</h2>
                    <p class="text-sm text-gray-500">
                        Periodically, we'll ask for your opinion on studies that help us improve your experience.
                    </p>
                    <button class="mt-4 px-4 py-2 text-sm bg-primary-light text-white rounded">Participate Now</button>
                </div>
                <div class="hidden md:block w-24 h-24 bg-gray-100 rounded-full"></div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/stores/AuthStore'

const authStore = useAuthStore()

onMounted(async () => {
    await authStore.getMe()
})
</script>
