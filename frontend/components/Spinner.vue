<template>
    <div class="flex justify-center items-center light-spinner">
        <ProgressSpinner
            class="size-12"
            strokeWidth="8"
            fill="transparent"
            animationDuration=".8s"
            aria-label="Ucitavanje" />
    </div>
</template>

<script setup>
import ProgressSpinner from 'primevue/progressspinner'
</script>

<style scoped>
.light-spinner {
  filter: brightness(2.0)
}
</style>
