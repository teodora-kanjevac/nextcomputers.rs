<template>
    <div class="bg-white rounded-lg border p-4 shadow-sm">
        <div class="grid gap-2 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div class="flex items-center gap-4 min-w-0">
                <div class="bg-gray-200 p-2.5 sm:p-3 rounded-md">
                    <HeartOutlineIcon class="size-6 sm:size-7 shrink-0 text-primary" />
                </div>
                <div class="text-left">
                    <div class="text-sm font-medium text-gray-500">Proizvodi na listi želja</div>
                    <div class="text-lg sm:text-xl font-bold text-gray-800">{{ statistics.wishlistItems }}</div>
                </div>
            </div>

            <div class="flex items-center gap-4 min-w-0">
                <div class="bg-gray-200 p-2.5 sm:p-3 rounded-md">
                    <ReceiptIcon class="size-6 sm:size-7 shrink-0 text-primary" />
                </div>
                <div class="text-left">
                    <div class="text-sm font-medium text-gray-500">Ukupno porudžbina</div>
                    <div class="text-lg sm:text-xl font-bold text-gray-800">{{ statistics.orders }}</div>
                </div>
            </div>

            <div class="flex items-center gap-4 min-w-0">
                <div class="bg-gray-200 p-2.5 sm:p-3 rounded-md">
                    <StarOutlinedIcon class="size-6 sm:size-7 shrink-0 text-primary" />
                </div>
                <div class="text-left">
                    <div class="text-sm font-medium text-gray-500">Recenzija dodato</div>
                    <div class="text-lg sm:text-xl font-bold text-gray-800">{{ statistics.reviews }}</div>
                </div>
            </div>

            <div class="flex items-center gap-4 min-w-0">
                <div class="bg-gray-200 p-2.5 sm:p-3 rounded-md">
                    <CrossedOutCartIcon class="size-6 sm:size-7 shrink-0 text-primary" />
                </div>
                <div class="text-left">
                    <div class="text-sm font-medium text-gray-500">Porudžbina otkazano</div>
                    <div class="text-lg sm:text-xl font-bold text-gray-800">{{ statistics.canceledOrders }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useUserStore } from '~/stores/UserStore'
import CrossedOutCartIcon from './icons/CrossedOutCartIcon.vue'
import HeartOutlineIcon from './icons/HeartOutlineIcon.vue'
import ReceiptIcon from './icons/ReceiptIcon.vue'
import StarOutlinedIcon from './icons/StarOutlinedIcon.vue'
import type { UserStatisticsDTO } from '~/shared/types/UserStatisticsDTO'

const userStore = useUserStore()

const statistics = computed<UserStatisticsDTO>(() => userStore.userStatistics)

onMounted(async () => {
    await userStore.fetchUserStatistics()
})
</script>
