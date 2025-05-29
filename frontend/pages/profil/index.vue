<template>
    <Account>
        <AccountOverview />
    </Account>
</template>

<script setup lang="ts">
import Account from '~/layouts/Account.vue'
import AccountOverview from '~/layouts/AccountOverview.vue'
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
