<script setup>
import { Head } from '@inertiajs/vue3';
import HeroSection from '@/Components/Home/HeroSection.vue';
import IntroSection from '@/Components/Home/IntroSection.vue';
import SkillSection from '@/Components/Home/SkillSection.vue';
import ExperienceSection from '@/Components/Home/ExperienceSection.vue';
import Footer from '@/Components/Footer.vue';
</script>

<template>
<Head title="Home" />
<HeroSection></HeroSection>
<IntroSection></IntroSection>
<SkillSection></SkillSection>
<ExperienceSection></ExperienceSection>
<Footer></Footer>
</template>