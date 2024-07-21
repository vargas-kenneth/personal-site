<script setup>
import { ref, computed } from "vue";
import { Accordion, AccordionItem } from '@/Components/Accordion';

const experiences = ref([
    {
        year: '05/2022 - 11/2022',
        companyName: 'GMA NMI',
        jobTitle: 'Associate Developer',
        description: 'Implementing new features, enhancing user experience and functionality. Conduct testing to verify the integrity and reliability of software, ensuring high-quality standards are met. Documenting bugs and their solutions',

    },
    {
        year: '2019-2020',
        companyName: 'GEP Solutions',
        jobTitle: 'Junior WordPress Developer',
        description: 'Create WordPress website with user friendly and mobile responsive design, including web optimization for faster loading response. Implements client request. Maintain websites on server.'
    },
    {
        year: '2019',
        companyName: 'Hooli Software',
        jobTitle: 'Software Engineer Intern',
        description: 'Manage quality assurance of a website report issues like bugs, errors. Encode data in database. Implement simple design on mobile app.'
    },
]);

const alternateDesign = computed(() => {
    return experiences.value.map((experience, index) => {
        return {
            ...experience,
            reverseDesign: index % 2 === 0 ? true : false
        }
    })
});

const screenWidth = ref(window.innerWidth);

const isMobile = computed(() => {
    return screenWidth.value <= 1080;
});
</script>

<template>
    <div class="flex justify-center bg-charcoal-gray ">
        <div class="w-4/5 items-center py-20">
            <div class="title mb-10 text-center">
                <h1 class="text-white text-3xl font-bold">Experiences</h1>
            </div>
            <template v-if="!isMobile">
                <template 
                    v-for="(experience, index) in alternateDesign"
                    :key="index">

                    <div
                        class="experiences flex justify-center text-white "
                        :class="experience.reverseDesign ? '' : 'flex-row-reverse'">
                        <div 
                            class="flex-1 text-right pt-4"
                            :class="experience.reverseDesign ? 'pr-4' : 'pl-4'">
                            <span 
                                class="block italic font-semibold mb-1"
                                :class="experience.reverseDesign ? '' : 'text-left'">
                                {{ experience.year }}
                            </span>
                            <span 
                                class="block "
                                :class="experience.reverseDesign ? '' : 'text-left'">
                                {{ experience.companyName }}
                            </span>
                        </div>
                        <div 
                        class="flex-1 py-8"
                        :class="experience.reverseDesign ? 'pl-4 border-l' : 'pr-4 border-r text-right'">
                            <h2 class="my-1 text-2xl font-semibold">{{ experience.jobTitle }}</h2>
                            <p>{{ experience.description }}</p>
                        </div>
                    </div>
                </template>
            </template>
            <template v-else>
                <Accordion>
                    <template v-for="(experience, index) in experiences" :key="index">                    
                        <AccordionItem :active-class="{ active: index === 0}">
                            <template #header>
                                {{ experience.jobTitle }}
                            </template>
                            <template #content>
                                <span class="block">{{ experience.companyName }}</span>
                                <span class="block mb-2">{{ experience.year }}</span>
                                <p>
                                    {{ experience.description }}
                                </p>
                            </template>
                        </AccordionItem>
                    </template>
                </Accordion>
            </template>
        </div>
    </div>
</template>

<style>
.experiences {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>