<script setup lang='ts'>
export interface Props {
    floatTitle: string,
    floatIsActive: boolean,
    floatActiveTitleColor: string,
    floatBarColor?: string
}
const props = withDefaults(defineProps<Props>(), {
    floatActiveTitleColor: 'text-purple-500'
});
</script>

<template>
    <div>
        <Transition name="slide-fade">
            <div :class="[props.floatIsActive ? 'bg-gray-200 rounded-md px-4 py-1' : 'bg-transparent']">
                <div class="px-2">
                    <li @click="$emit('onClick')"
                        class="cursor-pointer rounded-lg flex justify-center items-center px-3  space-x-1">
                        <slot name="icon"></slot>
                        <div class="py-2 w-20 sm:w-auto">
                            <span
                                :class="[props.floatIsActive ? `${props.floatActiveTitleColor} font-bold` : 'text-black dark:text-white']">{{
                                    floatTitle }}</span>
                        </div>
                    </li>
                </div>
            </div>
        </Transition>
    </div>
</template>
<style scoped>
.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-enter-from {
    transform: translateX(-40px);
    opacity: 0;
}</style>