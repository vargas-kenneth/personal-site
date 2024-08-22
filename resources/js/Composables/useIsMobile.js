import { 
    ref,
    computed,
    onMounted,
    onUnmounted,
 } from 'vue';

const checkParam = (param, type) => {
    if (typeof param !== type) {
        throw new Error(`Expected a ${type} parameter`);
    }
};

export function useIsMobile(mobileTabletSize = 1080) {
    checkParam(mobileTabletSize, 'number');
    const screenWidth = ref(window.innerWidth);

    const isMobile = computed(() =>
         screenWidth.value <= mobileTabletSize
    );

    const updateScreenWidth = () => {
        screenWidth.value = window.innerWidth;
    }

    onMounted(() => { 
        window.addEventListener('resize', updateScreenWidth)
    });

    onUnmounted(() => {
        window.removeEventListener('resize', updateScreenWidth);
    });

    return isMobile;
};