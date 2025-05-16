<template>
    <template v-if="!city && !zipcode">
        <div class="flex items-center text-sm">
            <CircleDangerIcon class="size-5 text-yellow-500 me-2" />
            <span>Dodajte grad i poštanski broj</span>
        </div>
    </template>
    <template v-else>
        <div v-if="city" class="flex items-center text-sm">
            <CheckMarkIcon class="size-5 text-green-500 me-2" />
            <span>Dodat grad</span>
        </div>
        <div v-if="zipcode" class="flex items-center text-sm">
            <CheckMarkIcon class="size-5 text-green-500 me-2" />
            <span>Dodat poštanski broj</span>
        </div>

        <div v-if="!city" class="flex items-center text-sm">
            <CircleDangerIcon class="size-5 text-yellow-500 me-2" />
            <span>Dodajte grad</span>
        </div>
        <div v-if="!zipcode" class="flex items-center text-sm">
            <CircleDangerIcon class="size-5 text-yellow-500 me-2" />
            <span>Dodajte poštanski broj</span>
        </div>
    </template>
</template>

<script setup lang="ts">
import CheckMarkIcon from './icons/CheckMarkIcon.vue'
import CircleDangerIcon from './icons/CircleDangerIcon.vue'

const { city, zipcode } = defineProps<{
    city: string | undefined
    zipcode: string | undefined
}>()
</script>
