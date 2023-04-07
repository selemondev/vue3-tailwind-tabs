<script setup lang='ts'>
export interface Props {
    textColor: string
};

const props = withDefaults(defineProps<Props>(), {
    textColor: 'text-black'
})
</script>

<template>
    <div class="bg-white rounded-md">
        <div :class="props.textColor">
            <slot/>
        </div>
    </div>
</template>