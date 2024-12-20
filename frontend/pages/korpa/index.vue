<template>
    <div>
        <NavBar />
        <div v-if="currentStep !== 0">
            <OrderStepper :current-step="currentStep" @update:currentStep="updateCurrentStep" />
        </div>
        <div v-if="currentStep === 0 && !isCartEmpty">
            <Cart :currentStep="currentStep" :steps="steps" @nextStep="nextStep" />
        </div>
        <div v-if="currentStep === 0 && isCartEmpty">
            <CartEmpty />
        </div>
        <div v-if="currentStep === 1">
            <OrderCheckout :currentStep="currentStep" :steps="steps" @nextStep="nextStep"/>
        </div>
        <div v-if="currentStep === 2">
            <Payment :currentStep="currentStep" :steps="steps" @nextStep="nextStep" />
        </div>
        <div v-if="currentStep === 3">
            <OrderSummary :currentStep="currentStep" :steps="steps"/>
        </div>
        <Footer />
    </div>
</template>

<script setup>
import NavBar from '~/layouts/NavBar.vue'
import OrderStepper from '~/layouts/OrderStepper.vue'
import Cart from '~/layouts/Cart.vue'
import CartEmpty from '~/layouts/CartEmpty.vue'
import OrderCheckout from '~/layouts/OrderCheckout.vue'
import Payment from '~/layouts/Payment.vue'
import OrderSummary from '~/layouts/OrderSummary.vue'
import Footer from '~/layouts/Footer.vue'
import { usePageTitle } from '~/composables/useTitle'
import { useCartStore } from '~/stores/CartStore'
import { steps } from '~/assets/static/cartStepperSteps'

const cartStore = useCartStore()
const { updateTitle } = usePageTitle()
updateTitle('Vaša korpa')

const isCartEmpty = computed(() => cartStore.cart.cartItems.length <= 0)
const currentStep = ref(0)

function nextStep() {
    if (currentStep.value < steps.length - 1) currentStep.value++
}

function updateCurrentStep(step) {
    currentStep.value = step
}
</script>
