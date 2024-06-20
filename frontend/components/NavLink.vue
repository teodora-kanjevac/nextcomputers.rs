<template>
    <div>
        <NuxtLink :to="path">
            {{ title }}
        </NuxtLink>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        path: String
    }
}
</script>