<template>
  <div>
    <NavBar/>
    <Hero/>
    <Categories/>
    <ProductShowcase/>
    <Footer/>
  </div>
</template>

<script setup>
import NavBar from "~/layouts/NavBar.vue";
import Hero from "~/layouts/Hero.vue";
import Footer from "~/layouts/Footer.vue";
import ProductShowcase from "~/layouts/ProductShowcase.vue";
import Categories from "~/layouts/Categories.vue";
</script>