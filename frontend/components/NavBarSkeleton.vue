<template>
    <div role="status" class="w-full flex justify-center items-center space-x-4 animate-pulse">
        <template v-for="i in 3" :key="i">
            <div class="flex flex-col items-center space-y-2 py-2 px-2.5 mb-1">
                <div class="size-8 bg-gray-500 rounded-full"></div>
                <div class="w-16 h-2.5 bg-gray-500 rounded-full"></div>
            </div>
        </template>
        <span class="sr-only">Ucitavanje...</span>
    </div>
</template>
