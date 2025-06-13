<template>
    <Account>
        <div class="space-y-3">
            <BuyerStatistics />
            <AccountDetails />
            <RecentOrders />
            <WishlistItemsLowStock />
            <ReviewSuggestions />
        </div>
    </Account>
</template>

<script setup lang="ts">
import Account from '~/layouts/Account.vue'
import { useUserStore } from '~/stores/UserStore'

const { updateTitle } = usePageTitle()
updateTitle('Vaš profil')

const userStore = useUserStore()

definePageMeta({
    middleware: ['profile-guard'],
    section: 'profile',
})

onMounted(async () => {
    await userStore.fetchUserInfo()
})
</script>
