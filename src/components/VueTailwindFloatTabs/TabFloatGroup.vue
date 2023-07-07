<script setup lang='ts'>
const props = withDefaults(defineProps<{
    TabFloatGroupWidth: string | number
}>(), {
    TabFloatGroupWidth: 'w-72 sm:w-[768px]'
});
</script>

<template>
    <div :class="[props.TabFloatGroupWidth ? props.TabFloatGroupWidth : '']" class="rounded-md relative overflow-x-auto">
        <slot />
    </div>
</template>