<template>
    <div class="bg-white rounded-lg border px-4 sm:px-6 py-5 shadow-sm font-medium">
        <h2 class="font-semibold border-b pb-2 text-lg mb-5">Nedavne porudžbine</h2>
        <div v-if="orders.length === 0" class="text-center py-6 text-sm text-gray-500 italic">
            Trenutno nemate porudžbine.
            <NuxtLink to="proizvodi" class="text-primary underline">Krenite u kupovinu!</NuxtLink>
        </div>
        <div v-else class="relative">
            <div class="rounded-md border border-gray-200 overflow-x-auto">
                <table class="w-full text-sm text-left text-gray-500">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-200">
                        <tr>
                            <th scope="col" class="px-4 py-2 sm:px-6 sm:py-3">Broj porudžbine</th>
                            <th scope="col" class="px-4 py-2 sm:px-6 sm:py-3">Datum kupovine</th>
                            <th scope="col" class="px-4 py-2 sm:px-6 sm:py-3">Ukupna cena</th>
                            <th scope="col" class="px-4 py-2 sm:px-6 sm:py-3">Status porudžbine</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200 font-medium text-sm">
                        <tr v-for="(order, index) in orders.slice(0, 3)" :key="order.id" class="bg-gray-50">
                            <td class="px-4 py-2 sm:px-6 sm:py-3 text-gray-800 whitespace-nowrap">
                                <NuxtLink :to="`/profil/istorija-kupovine/${order.id}`" class="hover:underline">
                                    {{ order.id }}
                                </NuxtLink>
                            </td>
                            <td class="px-4 py-2 sm:px-6 sm:py-4">{{ formattedData[index].date }}</td>
                            <td class="px-4 py-2 sm:px-6 sm:py-4">{{ formattedData[index].price }} RSD</td>
                            <td class="px-4 py-2 sm:px-6 sm:py-4"><StatusBadge :order-status="order.orderStatus" /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <NuxtLink
                to="profil/istorija-kupovine"
                class="inline-flex items-center mt-3 sm:mt-5 px-3 py-1.5 font-medium text-sm bg-primary-light hover:bg-rose-800 text-white rounded">
                <ReceiptIcon class="size-4 me-2" />
                Pregled svih porudžbina
            </NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { OrderDTO } from '~/shared/types/OrderDTO'
import { useUserStore } from '~/stores/UserStore'
import { formatPrice } from '~/composables/utils'
import ReceiptIcon from './icons/ReceiptIcon.vue'

const userStore = useUserStore()

const orders = computed<OrderDTO[]>(() => userStore.orderHistory)

const formattedData = computed(() => {
    return userStore.orderHistory.map(order => ({
        date: formatShortDate(order.createdAt, true),
        price: formatPrice(Number(order.totalPrice)),
    }))
})

onMounted(async () => {
    await userStore.fetchUserPurchaseHistory()
})
</script>
