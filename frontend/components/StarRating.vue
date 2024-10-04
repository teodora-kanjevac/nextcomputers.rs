<template>
  <div class="mt-2 flex items-center gap-2">
    <div class="flex items-center">
      <Star v-for="index in 5" :key="index" :filled="index <= filledStars" :half="index === halfStar" />
    </div>
    <p class="text-sm font-medium text-gray-900">{{ rating.toFixed(1) }}</p>
    <p class="text-sm font-medium text-gray-500">({{ totalReviews }})</p>
  </div>
</template>

<script setup>
const props = defineProps({
  rating: {
    type: Number,
    required: true,
  },
  totalReviews: {
    type: Number,
    required: true,
  },
});

const filledStars = props.rating % 1 >= 0.79 ? Math.ceil(props.rating) : Math.floor(props.rating);
const halfStar = (props.rating % 1 >= 0.21 && props.rating % 1 <= 0.79) ? Math.ceil(props.rating) : 0;
</script>