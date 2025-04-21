<template>
    <div>
        <RegisterForm />
    </div>
</template>

<script setup lang="ts">
import RegisterForm from '~/layouts/RegisterForm.vue'

const { updateTitle } = usePageTitle()
updateTitle('Registracija korisnika')
</script>