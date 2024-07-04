<script setup>
import { Head } from '@inertiajs/vue3';
import IntroSection from '@/Components/Home/IntroSection.vue';
import SkillSection from '@/Components/Home/SkillSection.vue';
import ExperienceSection from '@/Components/Home/ExperienceSection.vue';
import Footer from '@/Components/Footer.vue';

const intro = 'Hello, My name is'
const name = 'Kenneth Vargas';
const job = 'Web Developer';

</script>

<template>
<Head title="Home" />
<div class="hero h-dvh flex flex-col justify-center content-center text-center">
    <span class="text-white uppercase text-xl font-barlow-semi-condensed mb-2">{{ intro }}</span>
    <div class="flex justify-center mb-5">
        <hr class="w-20 bg-white">
    </div>
    <h1 class="text-white text-6xl font-playfair-display mb-3">{{ name }}</h1>
    <span class="job capitalize text-3xl font-times-new-roman font-semibold">{{ job }}</span>
</div>
<IntroSection></IntroSection>
<SkillSection></SkillSection>
<ExperienceSection></ExperienceSection>
<Footer></Footer>
</template>

<style>
.hero {
    background: theme('colors.dark-purple');
    background: linear-gradient(110deg, theme('colors.dark-purple') 0%, theme('colors.light-purple') 100%);
}

.job {
    color: theme('colors.text-purple');
}
</style>