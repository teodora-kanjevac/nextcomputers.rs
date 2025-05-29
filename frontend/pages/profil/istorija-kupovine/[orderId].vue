<template>
    <Account>
        <OrderDetails />
    </Account>
</template>

<script setup lang="ts">
import Account from '~/layouts/Account.vue'
import OrderDetails from '~/layouts/OrderDetails.vue'
import { useOrderStore } from '~/stores/OrderStore'

const route = useRoute()
const orderStore = useOrderStore()

const orderId = route.params.orderId as string

const { updateTitle } = usePageTitle()
updateTitle(`Detalji porudžbine - ${orderId}`)

definePageMeta({
    middleware: ['profile-guard'],
    section: 'order-history',
})

onMounted(async () => {
    await orderStore.fetchOrder(orderId)
})
</script>
