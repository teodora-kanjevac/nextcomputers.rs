<template>
    <Account>
        <UserReviews />
    </Account>
</template>

<script setup lang="ts">
import Account from '~/layouts/Account.vue'
import UserReviews from '~/layouts/UserReviews.vue'
import { useUserStore } from '~/stores/UserStore'

const { updateTitle } = usePageTitle()
updateTitle('Moje ocene')

const userStore = useUserStore()

definePageMeta({
    middleware: ['profile-guard'],
    section: 'reviews',
})

onMounted(async () => {
    await userStore.fetchUserReviewHistory()
})
</script>
