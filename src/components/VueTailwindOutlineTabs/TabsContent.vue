<script setup lang='ts'>
export interface Props {
    textColor?: string
};

const props = withDefaults(defineProps<Props>(), {
    textColor: 'text-black'
})
</script>

<template>
    <section class="rounded-md bg-gray-100 max-w-3xl p-2">
        <div :class="props.textColor">
            <slot/>
        </div>
    </section>
</template>