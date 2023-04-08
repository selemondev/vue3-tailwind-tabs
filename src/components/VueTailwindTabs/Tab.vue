<script setup lang='ts'>
export interface Props {
    title: string,
    isActive: boolean,
    activeTitleColor: string,
}
const props = withDefaults(defineProps<Props>(), {
    activeTitleColor: 'text-purple-500'
});

const emit = defineEmits<{
    (e: 'onClick'): void
}>();

const click = () => {
    emit("onClick")
};
console.log(props.activeTitleColor)
</script>

<template>
    <div>
        <li @click="click" class="cursor-pointer max-w-xl flex-center space-x-1">

            <slot name="icon"></slot>
            <div class="py-2">
                <span :class="[props.isActive ? props.activeTitleColor : 'text-black']">{{ title }}</span>
            </div>
        </li>
        <div class="w-full h-1">
            <Transition name="slide-fade">
                <div v-if="isActive" class="max-w-xl relative flex flex-row">
                    <span class="border-2 border-red-500 w-full"></span>
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