<template>
    <div role="status" class="w-full flex justify-center items-center gap-8 py-3 animate-pulse">
        <template v-for="i in 3" :key="i">
            <div class="flex flex-col items-center space-y-2">
                <div class="size-8 bg-gray-500 rounded-full"></div>
                <div class="w-16 h-2.5 bg-gray-500 rounded-full"></div>
            </div>
        </template>
        <span class="sr-only">Loading navbar...</span>
    </div>
</template>
