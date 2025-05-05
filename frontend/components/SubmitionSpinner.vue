<template>
    <ProgressSpinner
        class="white-spinner"
        strokeWidth="6"
        fill="transparent"
        animationDuration=".8s"
        aria-label="Ucitavanje" />
</template>

<script setup>
import ProgressSpinner from 'primevue/progressspinner'
</script>

<style scoped>
.white-spinner,
:deep(.p-progress-spinner-circle) {
    stroke: #fff !important;
}
</style>
