<script setup>
import ImageSlider from '@/Components/ImageSlider.vue';

const images = [
    {id: 1, 'filename': 'bootstrap-plain.png'},
    {id: 2, 'filename': 'css3-plain.png'},
    {id: 3, 'filename': 'git-original.png'},
    {id: 4, 'filename': 'html5-plain.png'},
    {id: 5, 'filename': 'javascript-original.png'},
    {id: 6, 'filename': 'jquery-original.png'},
    {id: 7, 'filename': 'mysql-original.png'},
    {id: 8, 'filename': 'php-plain.png'},
    {id: 9, 'filename': 'wordpress-plain.png'},
];

</script>

<template>
    <div id="skills" class="skill-slider h-96 flex justify-center align-center bg-darker-purple snap-center">
        <div class="w-4/5 overflow-auto flex flex-col justify-center items-center">
            <div class="title mb-10">
                <h1 class="text-white text-3xl font-bold">Technical Skills</h1>
            </div>
            <image-slider :images="images" />
        </div>
    </div>
</template>