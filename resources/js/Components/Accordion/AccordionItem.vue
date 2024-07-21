<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps(['activeClass']);
const visible = ref(false);

const toggleVisibility = (e) => {
    visible.value = !visible.value;
    e.target.classList.toggle('active');
    e.target.parentNode.classList.toggle('active');
};

onMounted(() => {
    if (props.activeClass.active) {
        visible.value = !visible.value;
    }
});
</script>

<template>
    <div class="accordtion-item mb-4" >
        <div class="accordion-item-header flex border border-slate-700 p-4 box-border" 
            :class="props.activeClass">
            <button 
                class="accordion-button w-full text-left flex justify-between" 
                :class="props.activeClass"
                @click="toggleVisibility">
                <slot name="header"></slot>
            </button>
        </div>
        <transition name="slide-fade">        
            <div class="accordion-item-content p-4 border-t-0 border-x border-b border-slate-700"
                v-if="visible">
                <slot name="content"></slot>
            </div>
        </transition>
    </div>
</template>

<style scoped>
.accordion-item-header.active {
    outline: var(--color-dark-purple) solid 2px;
}

.accordion-button::after {
    content: '▼';
    transition: transform 0.3s;
}

.accordion-button.active::after {
    transform: rotate(-180deg);
}

.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: all 0.3s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateY(-20px);
    opacity: 0;
}
</style>