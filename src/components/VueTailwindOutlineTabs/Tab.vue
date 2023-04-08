<script setup lang='ts'>
export interface Props {
    title: string,
    isActive: boolean,
    activeTitleColor: string,
    barColor?: string
}
const props = withDefaults(defineProps<Props>(), {
    activeTitleColor: 'text-purple-500'
});
</script>

<template>
    <div class="px-2">
        <li @click="$emit('onClick')" class="cursor-pointer max-w-xl flex items-center space-x-1">
            <slot name="icon"></slot>
            <div class="py-2 w-20 sm:w-auto">
                <span :class="[props.isActive ? props.activeTitleColor : 'text-black']">{{ title }}</span>
            </div>
        </li>
        <div class="w-full h-1">
            <Transition name="slide-fade">
                <div v-if="isActive" class="max-w-xl relative flex flex-row">
                    <span :class="[props.barColor ? `border-2 ${props.barColor} w-full` : 'border-2 border-purple-500 w-full']"></span>
                </div>
            </Transition>
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