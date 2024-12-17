<template>
    <div>
        <NavBar />
        <Cart v-if="!isCartEmpty" />
        <CartEmpty v-else />
        <Footer />
    </div>
</template>

<script setup>
import NavBar from '~/layouts/NavBar.vue'
import Cart from '~/layouts/Cart.vue'
import CartEmpty from '~/layouts/CartEmpty.vue'
import Footer from '~/layouts/Footer.vue'
import { usePageTitle } from '~/composables/useTitle'
import { useCartStore } from '~/stores/CartStore'

const cartStore = useCartStore()
const { updateTitle } = usePageTitle()
updateTitle('Vaša korpa')

const isCartEmpty = computed(() => cartStore.cart.cartItems.length <= 0)
</script>
