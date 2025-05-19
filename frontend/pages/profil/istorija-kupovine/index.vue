<template>
    <Account>
        <AccountOrderHistory />
    </Account>
</template>

<script setup lang="ts">
import Account from '~/layouts/Account.vue'
import AccountOrderHistory from '~/layouts/AccountOrderHistory.vue'
import { useUserStore } from '~/stores/UserStore'

const { updateTitle } = usePageTitle()
updateTitle('Istorija kupovine')

const userStore = useUserStore()

definePageMeta({
    middleware: ['profile-guard'],
    section: 'order-history',
})

onMounted(async () => {
    await userStore.fetchUserPurchaseHistory()
})
</script>
