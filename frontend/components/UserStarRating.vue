<template>
    <div class="flex items-center">
      <span v-for="index in 5" :key="index">
        <Star :filled="index <= rating" />
      </span>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    rating: {
      type: Number,
      required: true,
      default: 0,
    }
  });
  </script>