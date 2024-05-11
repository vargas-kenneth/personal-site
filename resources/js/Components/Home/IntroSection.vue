<script setup>
import GridBox from '@/Components/GridBox.vue';

const title = 'A Brief Introduction';
const subTitle = 'Trusted Developer & Collaborator';
const content = 'To be a web developer that provides an opportunity to enhance my skill and ability. And to apply my knowledge and creativity that will contribute in organization. A self-motivated web developer with ability to learn more in rapid changing environments and compositions.';

const parentClass = 'w-1/4';
</script>

<template>
    <div id="intro" class="h-96 w-full flex justify-center align-center bg-charcoal-gray text-white">
        <div class="w-4/5 flex">
            <div class="w-full lg:w-3/4 my-auto px-6">
                <div id="intro-header" class="mb-6">
                    <span class="uppercase text-xl">{{ title }}</span>
                </div>
                <div id="intro-title" class="mb-6">
                    <h2 class="text-3xl">{{ subTitle }}</h2>
                </div>
                <div id="intro-content">
                    <p class="text-lg">{{ content }}</p>
                </div>
            </div>
            <GridBox :parentClass="parentClass"></GridBox>
        </div>
    </div>
</template>