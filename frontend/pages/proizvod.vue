<template>
    <div>
        <NavBar />
        <section class="py-8 bg-white md:py-16">
            <div class="max-w-screen-xl px-4 mx-auto 2xl:px-0">
                <ProductDetails />
                <ProductDetailsTabs />
            </div>
        </section>
        <Footer />
    </div>
</template>

<script setup>
import NavBar from '~/layouts/NavBar.vue';
import Footer from '~/layouts/Footer.vue';
import ProductDetails from '~/layouts/ProductDetails.vue';
import ProductDetailsTabs from '~/layouts/ProductDetailsTabs.vue';
</script>