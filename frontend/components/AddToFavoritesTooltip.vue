<template>
    <div>
        <button data-tooltip-target="tooltip" data-tooltip-placement="top" type="button"
            class="rounded-lg m-1 p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900">
            <HeartOutlineIcon class="size-6"></HeartOutlineIcon>
        </button>
        <div id="tooltip" role="tooltip"
            class="tooltip absolute z-50 invisible inline-block px-3 py-2 text-xs font-normal text-white transition-opacity duration-300 bg-gray-700 rounded-lg shadow-sm opacity-0">
            Sačuvaj proizvod
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
    </div>
</template>

<script setup>
import HeartOutlineIcon from '~/components/icons/HeartOutlineIcon.vue'
</script>