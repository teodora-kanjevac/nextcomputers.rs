<template>
    <div class="bg-white rounded-lg border px-6 py-5 shadow-sm">
        <h2 class="font-semibold border-b pb-2 text-lg">Detalji porudžbine - {{ order.id }}</h2>
        <div
            class="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 bg-gray-50 border rounded-md border-gray-200 mt-4 text-sm text-left text-gray-700">
            <div class="space-y-1">
                <p class="font-medium">Broj porudžbine:</p>
                <p class="font-semibold text-gray-900">{{ order.id }}</p>
            </div>
            <div class="space-y-1">
                <p class="font-medium">Datum porudžbine:</p>
                <p class="font-semibold text-gray-900">{{ formattedData.date }}</p>
            </div>
            <div class="space-y-1">
                <p class="font-medium">Status:</p>
                <p class="font-semibold text-green-600">{{ order.orderStatus }}</p>
            </div>
        </div>
        <div class="divide-y rounded-md border border-gray-200 my-4">
            <div
                v-for="(item, index) in order.orderDetails"
                :key="item.id"
                class="flex items-center justify-between gap-10 px-4 py-3 hover:bg-gray-50 transition-colors duration-100">
                <div class="flex items-center gap-4">
                    <img :src="item.product.thumbnail" alt="Thumbnail" class="size-16 object-contain" />
                    <div class="text-sm text-gray-700 font-medium">
                        <NuxtLink :to="`/proizvod/${item.product.id}`" class="hover:underline line-clamp-1">
                            {{ item.product.name }}
                        </NuxtLink>
                        <div class="text-xs text-gray-500 pt-1.5">EAN: {{ item.product.ean }}</div>
                    </div>
                </div>
                <div class="text-right font-medium text-gray-700 shrink-0">
                    <p class="font-semibold text-lg">
                        {{ formattedItemData[index].price }}
                        <span class="text-base">RSD</span>
                    </p>
                    <p class="text-xs text-gray-600 pt-1.5">Količina: {{ item.quantity }}</p>
                </div>
            </div>
        </div>
        <div class="gap-6 w-1/2 ms-auto me-2">
            <div class="space-y-2 pb-2 font-medium">
                <dl class="flex items-center justify-between gap-4">
                    <dt class="text-base text-gray-700">Cena proizvoda</dt>
                    <dd class="text-base text-gray-900">
                        {{ formattedData.productPrice }}
                        <span class="text-sm">RSD</span>
                    </dd>
                </dl>
                <dl class="flex items-center justify-between gap-4">
                    <dt class="text-base text-gray-700">Popust</dt>
                    <dd class="text-base text-green-600">
                        - {{ formattedData.discountPrice }}
                        <span class="text-sm">RSD</span>
                    </dd>
                </dl>
                <dl class="flex items-center justify-between gap-4">
                    <dt class="text-base text-gray-700">Cena poštarine</dt>
                    <dd class="text-base text-gray-900">
                        {{ formattedData.shippingPrice }}
                        <span class="text-sm">RSD</span>
                    </dd>
                </dl>
                <dl class="flex items-center justify-between gap-4 border-t border-gray-200 py-3">
                    <dt class="text-base font-semibold text-gray-900">Ukupan iznos</dt>
                    <dd class="text-base font-semibold text-gray-900">
                        {{ formattedData.totalPrice }}
                        <span class="text-sm">RSD</span>
                    </dd>
                </dl>
            </div>
        </div>
        <div class="bg-gray-50 rounded-lg p-5 border">
            <h3 class="text-lg font-semibold mb-4 border-b border-gray-200 pb-2">Detalji kupca</h3>
            <div class="grid sm:grid-cols-2 items-start break-all text-sm">
                <div class="grid grid-cols-[max-content,1fr] gap-x-5 gap-y-2 font-medium">
                    <span>Ime i prezime:</span>
                    <span class="text-gray-600">{{ order.orderInfo.fullname }}</span>

                    <span>Email:</span>
                    <span class="text-gray-600">{{ order.orderInfo.email }}</span>

                    <span>Broj telefona:</span>
                    <span class="text-gray-600">{{ order.orderInfo.phone }}</span>

                    <span>Adresa:</span>
                    <span class="text-gray-600">{{ order.orderInfo.address }}</span>

                    <span>Grad:</span>
                    <span class="text-gray-600">{{ order.orderInfo.city }}</span>

                    <span>Poštanski broj:</span>
                    <span class="text-gray-600">{{ order.orderInfo.zipcode }}</span>
                </div>
                <div class="grid grid-cols-[max-content,1fr] gap-x-5 gap-y-2 font-medium ms-8">
                    <template v-if="order.orderInfo.pib">
                        <span>PIB:</span>
                        <span class="text-gray-600">{{ order.orderInfo.pib }}</span>
                    </template>

                    <span>Način Plaćanja:</span>
                    <span class="text-gray-600">{{ paymentMethodText }}</span>

                    <span>Status porudžbine:</span>
                    <span class="text-gray-600">{{ order.orderStatus }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import dayjs from 'dayjs'
import type { OrderDTO } from '~/shared/types/OrderDTO'
import { useOrderStore } from '~/stores/OrderStore'
import { paymentMethodMap } from '~/assets/static/paymentMethodMap'

const orderStore = useOrderStore()

const order = computed<OrderDTO>(() => orderStore.order)

const formattedData = computed(() => {
    return {
        date: dayjs(order.value.createdAt).format('DD.MM.YYYY. HH:mm'),
        totalPrice: formatPrice(Number(order.value.totalPrice)),
        productPrice: formatPrice(Number(order.value.orderInfo.productPrice)),
        discountPrice: formatPrice(Number(order.value.orderInfo.discountPrice)),
        shippingPrice: formatPrice(Number(order.value.orderInfo.shippingPrice)),
    }
})

const formattedItemData = computed(() => {
    return order.value.orderDetails.map(details => ({
        price: formatPrice(Number(details.product.discountPrice) || Number(details.product.price)),
    }))
})

const paymentMethodText =
    paymentMethodMap[order.value.orderInfo.paymentMethod as keyof typeof paymentMethodMap] ||
    'Način plaćanja nije poznat'
</script>
