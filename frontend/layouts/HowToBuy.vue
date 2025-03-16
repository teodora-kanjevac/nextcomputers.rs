<template lang="">
    <div>
        <section class="py-8 md:py-16">
            <div class="mx-auto max-w-screen-xl px-6 2xl:px-0">
                <h2 class="md:text-3xl text-2xl font-semibold sm:mb-10 pb-3 md:pb-4 border-b-2 border-gray-200">
                    Kako kupovati na nextcomputers.rs?
                </h2>
                <HTBStepSection
                    v-for="step in stepSections"
                    :key="step.id"
                    :text="step.text"
                    :imagePath="step.imagePath" />
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { stepSections } from '~/assets/static/HTBsteps'
</script>
