<script setup>
import { config } from '@/Config/AppConfig.js';

const imagePath = config.path.images;
</script>
<template>
    <footer class="text-white bg-darker-purple h-64 md:h-72">
        <div class="md:w-4/5 h-4/5 pt-5 md:pt-0 mx-auto flex flex-col justify-center items-center md:flex-row ">
            <div class="w-1/3 mb-4 md:mb-0 order-2 md:order-none">
                <ul class="h-full flex justify-center items-center gap-5">
                    <li>
                        <a href="https://www.facebook.com/026Kenneth/">
                            <img class="w-5"
                                :src="`${imagePath}icons/social-facebook.png`" 
                                alt="facebook">
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/vargas-kenneth/">
                            <img class="w-5"
                                :src="`${imagePath}icons/social-github.png`" 
                                alt="github">
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/kenneth-vargas-355960190/">
                            <img class="w-5"
                                :src="`${imagePath}icons/social-linkedin.png`" 
                                alt="linkedin">
                        </a>
                    </li>
                </ul>
            </div>
            <!--   -->
            <div class="w-1/3 mb-4 md:mb-0 flex justify-center items-center order-1 md:order-none"> 
                <img class="w-16" :src="`${imagePath}logo/logo.png`" alt="Logo">
            </div>
            <div class="w-1/3 flex justify-center items-center md:items-end flex-col order-last md:order-none">
                <a href="">vargaskenneth26@gmail.com</a>
                <span class="text-nowrap">+63 945-454-579</span>
            </div>
        </div>
        <div class="h-1/5 flex items-center justify-center">
            <span class="block text-center">Copyright &copy; 2024 Personal Portfolio</span>
        </div>
    </footer>
</template>