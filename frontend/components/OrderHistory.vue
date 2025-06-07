<template>
    <div class="bg-white rounded-lg border px-4 sm:px-6 py-5 shadow-sm">
        <h2 class="font-semibold border-b pb-2 text-lg mb-5">Istorija kupovine</h2>
        <div v-if="orders.length === 0" class="text-gray-600 font-medium flex flex-col items-center justify-center">
            <img class="max-w-md h-auto mb-6 mt-2" src="/assets/images/order-illustration.webp" alt="illustration" />
            <p class="font-medium text-base sm:text-lg italic mb-5 text-center px-4">
                Trenutno nemate porudžbine.
                <br />
                Kada napravite porudžbinu, ona će se prikazati ovde.
            </p>
        </div>
        <template v-else>
            <div class="relative overflow-x-auto rounded-md border border-gray-200 mb-4">
                <table class="w-full text-sm text-left text-gray-500">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-200">
                        <tr>
                            <th scope="col" class="px-4 py-2 sm:px-6 sm:py-3">Broj porudžbine</th>
                            <th scope="col" class="px-4 py-2 sm:px-6 sm:py-3">Datum kupovine</th>
                            <th scope="col" class="px-4 py-2 sm:px-6 sm:py-3">Ukupna cena</th>
                            <th scope="col" class="px-4 py-2 sm:px-6 sm:py-3">Status porudžbine</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200 font-medium">
                        <tr v-for="(order, index) in paginatedOrders" :key="order.id" class="bg-gray-50">
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

            <Paginator
                :rows="rowsPerPage"
                :totalRecords="orders.length"
                :rowsPerPageOptions="[5, 10, 20, 40]"
                @page="onPageChange"
                class="border border-gray-200 rounded-md" />
        </template>
    </div>
</template>

<script setup lang="ts">
import Paginator from 'primevue/paginator'
import type { OrderDTO } from '~/shared/types/OrderDTO'
import { useUserStore } from '~/stores/UserStore'
import { formatPrice } from '~/composables/utils'
import dayjs from 'dayjs'

const rowsPerPage = ref(10)
const first = ref(0)

const userStore = useUserStore()

const orders = computed<OrderDTO[]>(() => userStore.orderHistory)

const formattedData = computed(() => {
    return paginatedOrders.value.map(order => ({
        date: dayjs(order.createdAt).format('DD.MM.YYYY. HH:mm'),
        price: formatPrice(Number(order.totalPrice)),
    }))
})

const paginatedOrders = computed(() => {
    return orders.value.slice(first.value, first.value + rowsPerPage.value)
})

const onPageChange = (event: any) => {
    first.value = event.first
    rowsPerPage.value = event.rows
}
</script>
