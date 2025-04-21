<template>
    <div>
        <LoginForm />
    </div>
</template>

<script setup lang="ts">
import LoginForm from '~/layouts/LoginForm.vue'

const { updateTitle } = usePageTitle()
updateTitle('Prijava korisnika')
</script>