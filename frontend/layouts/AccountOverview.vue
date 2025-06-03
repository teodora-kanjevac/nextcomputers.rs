<template>
    <div class="space-y-3">
        <BuyerStatistics />
        <AccountDetails />
        <RecentOrders />
        <ReviewSuggestions />
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
    </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/stores/AuthStore'

const authStore = useAuthStore()

onMounted(async () => {
    await authStore.getMe()
})
</script>
