<template>
    <div v-for="i in 5" :key="i" class="animate-pulse">
        <div class="h-5 w-32 bg-gray-600 rounded-full mb-5"></div>
        <ul class="space-y-3">
            <li class="h-4 w-40 bg-gray-700 rounded-full"></li>
            <li class="h-4 w-48 bg-gray-700 rounded-full"></li>
            <li class="h-4 w-32 bg-gray-700 rounded-full"></li>
        </ul>
    </div>
</template>
