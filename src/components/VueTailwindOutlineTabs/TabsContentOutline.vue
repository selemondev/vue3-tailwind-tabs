<script setup lang='ts'>
export interface Props {
    TabsContentTextColor?: string
    TabsContentBackgroundColor?: string
};

const props = withDefaults(defineProps<Props>(), {
    TabsContentTextColor: 'text-black dark:text-white',
    TabsContentBackgroundColor: 'bg-gray-100 dark:bg-gray-400/30'
});
</script>

<template>
    <section :class="`p-4 ${props.TabsContentBackgroundColor} ${props.TabsContentBackgroundColor}`">
        <div :class="props.TabsContentTextColor">
            <slot/>
        </div>
    </section>
</template>