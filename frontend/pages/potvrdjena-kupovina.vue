<template>
    <div>
        <NavBar />
        <OrderConfirmed />
        <Footer />
    </div>
</template>

<script setup>
import NavBar from '~/layouts/NavBar.vue'
import OrderConfirmed from '~/layouts/OrderConfirmed.vue'
import Footer from '~/layouts/Footer.vue'
import { usePageTitle } from '~/composables/useTitle'

const { updateTitle } = usePageTitle()
updateTitle('Hvala na kupovini!')

</script>
