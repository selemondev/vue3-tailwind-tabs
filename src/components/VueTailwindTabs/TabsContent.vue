<script setup lang='ts'>
export interface Props {
    textColor?: string
};

const props = withDefaults(defineProps<Props>(), {
    textColor: 'text-black'
})
</script>

<template>
    <section class="bg-white rounded-md border border-gray-500 max-w-xl p-2">
        <div :class="props.textColor">
            <slot/>
        </div>
    </section>
</template>