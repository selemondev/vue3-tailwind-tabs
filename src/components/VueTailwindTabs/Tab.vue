<script setup lang='ts'>
export interface Props {
    title: string,
    isActive: boolean,
    activeTitleColor: string,
    onClick: () => void,
}
const props = withDefaults(defineProps<Props>(), {
    activeTitleColor: 'text-purple-500'
});
</script>

<template>
    <div>
        <li @click="onClick" :class="[isActive ? 'flex-center border-b-2 border-purple-600 active' : 'border-b-2 border-transparent']">
            <slot name="icon"></slot>
            <span :class="{ isActive : props.activeTitleColor }">{{ title }}</span>
        </li>
    </div>
</template>