<script setup lang='ts'>
export interface Props {
    floatTitle: string,
    floatIsActive: boolean,
    floatActiveTitleColor: string,
    floatBarColor?: string
}
const props = withDefaults(defineProps<Props>(), {
    floatActiveTitleColor: 'text-purple-500',
    floatBarColor: 'bg-gray-400/30 dark:bg-gray-500/30'
});
</script>

<template>
<div class="relative z-20 mx-2">
    <div class="px-4">
        <li @click="$emit('onClick')" class="cursor-pointer h-12 rounded-lg flex justify-center items-center px-4 space-x-1">
            <slot name="icon"></slot>
            <div class="py-2 w-12 sm:w-auto">
                <span :class="[props.floatIsActive ? `${props.floatActiveTitleColor} font-bold` : 'text-black dark:text-white']">{{ props.floatTitle }}</span>
            </div>
        </li>
        <div>
            <Transition name="slide-fade">
                <div v-if="props.floatIsActive" :class="[props.floatBarColor || '']" class="absolute rounded-md inset-0 w-full -z-10"></div>
            </Transition>
        </div>
    </div>
</div>
</template>
<style scoped>
.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-enter-from {
    transform: translateX(-40px);
    opacity: 0;
}
</style>