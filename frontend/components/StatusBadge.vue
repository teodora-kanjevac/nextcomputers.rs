<template>
    <div v-if="statusBadge" class="text-xs font-semibold uppercase">
        <span :class="statusBadge.classes">
            {{ statusBadge.text }}
        </span>
    </div>
</template>

<script setup lang="ts">
type StatusMap = {
    [key: string]: {
        text: string
        classes: string
    }
}

const { orderStatus } = defineProps<{
    orderStatus: 'CANCELED' | 'PENDING' | 'CONFIRMED' | 'SHIPPED' | 'DELIVERED' | 'RETURNED' | string | undefined
}>()

const statusMap: StatusMap = {
    CANCELED: { text: 'Otkazano', classes: 'bg-red-100 text-red-800 border-red-400' },
    PENDING: { text: 'Primljeno', classes: 'bg-amber-100 text-amber-800 border-amber-300' },
    CONFIRMED: { text: 'Potvrdjeno', classes: 'bg-green-100 text-green-800 border-green-400' },
    SHIPPED: { text: 'Poslato', classes: 'bg-blue-100 text-blue-800 border-blue-400' },
    DELIVERED: { text: 'Dostavljeno', classes: 'bg-violet-100 text-violet-800 border-violet-400' },
    RETURNED: { text: 'Vraćeno', classes: 'bg-orange-100 text-orange-800 border-orange-400' },
}

const statusBadge = computed(() => {
    if (!orderStatus || !statusMap[orderStatus]) return null
    return {
        text: statusMap[orderStatus].text,
        classes: `px-2 py-0.5 rounded-sm border ${statusMap[orderStatus].classes}`,
    }
})
</script>
