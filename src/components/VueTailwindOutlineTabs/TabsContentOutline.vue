<script setup lang='ts'>
export interface Props {
    TabsContentTextColor?: string
    TabsContentWidth?: number | string,
    TabsContentBackgroundColor?: string
};

const props = withDefaults(defineProps<Props>(), {
    TabsContentTextColor: 'text-black dark:text-white',
    TabsContentBackgroundColor: 'bg-gray-100 dark:bg-gray-400/30'
});
</script>

<template>
    <section :class="[props.TabsContentWidth ? `rounded-md p-4 w-${props.TabsContentWidth} ${props.TabsContentBackgroundColor}` : `rounded-md p-4 w-72 ${props.TabsContentBackgroundColor} sm:w-[768px]`]">
        <div :class="props.TabsContentTextColor">
            <slot/>
        </div>
    </section>
</template>