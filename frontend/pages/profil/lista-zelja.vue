<template>
    <Account>
        <WishlistOverview />
    </Account>
</template>

<script setup lang="ts">
import Account from '~/layouts/Account.vue'
import WishlistOverview from '~/layouts/WishlistOverview.vue'

const { updateTitle } = usePageTitle()
updateTitle('Lista želja')

definePageMeta({
    middleware: ['profile-guard'],
    section: 'wishlist',
})
</script>
