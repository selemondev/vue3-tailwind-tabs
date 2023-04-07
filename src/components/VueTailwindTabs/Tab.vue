<script setup lang='ts'>
defineProps<{
    title: String,
    isActive: String,
    activeTitleColor: String,
    onClick: () => void
}>()
</script>

<template>
    <div>
        <li @click="onClick" :class="[isActive ? 'flex-center space-x-2' : '']">
            <slot name="icon"></slot>
            <span :class="{ isActive : activeTitleColor }">{{ title }}</span>
        </li>
    </div>
</template>