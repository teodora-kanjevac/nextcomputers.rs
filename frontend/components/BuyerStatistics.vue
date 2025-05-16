<template>
    <div class="bg-white rounded-lg border p-6 shadow-sm">
        <div class="flex flex-wrap justify-between">
            <div class="flex items-center gap-4 min-w-[160px]">
                <div class="bg-gray-200 p-3 rounded-md">
                    <HeartOutlineIcon class="size-7 shrink-0 text-primary" />
                </div>
                <div class="text-left">
                    <div class="text-sm font-medium text-gray-500">Proizvodi na listi želja</div>
                    <div class="text-xl font-bold text-gray-800">455</div>
                </div>
            </div>
            <div class="flex items-center gap-4 min-w-[160px]">
                <div class="bg-gray-200 p-3 rounded-md">
                    <ReceiptIcon class="size-7 shrink-0 text-primary" />
                </div>
                <div class="text-left">
                    <div class="text-sm font-medium text-gray-500">Ukupno porudžbina</div>
                    <div class="text-xl font-bold text-gray-800">124</div>
                </div>
            </div>
            <div class="flex items-center gap-4 min-w-[160px]">
                <div class="bg-gray-200 p-3 rounded-md">
                    <StarOutlinedIcon class="size-7 shrink-0 text-primary" />
                </div>
                <div class="text-left">
                    <div class="text-sm font-medium text-gray-500">Recenzija dodato</div>
                    <div class="text-xl font-bold text-gray-800">1,285</div>
                </div>
            </div>
            <div class="flex items-center gap-4 min-w-[160px]">
                <div class="bg-gray-200 p-3 rounded-md">
                    <CrossedOutCartIcon class="size-7 shrink-0 text-primary" />
                </div>
                <div class="text-left">
                    <div class="text-sm font-medium text-gray-500">Porudžbina otkazano</div>
                    <div class="text-xl font-bold text-gray-800">2</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import CrossedOutCartIcon from './icons/CrossedOutCartIcon.vue'
import HeartOutlineIcon from './icons/HeartOutlineIcon.vue'
import ReceiptIcon from './icons/ReceiptIcon.vue'
import StarOutlinedIcon from './icons/StarOutlinedIcon.vue'
</script>
