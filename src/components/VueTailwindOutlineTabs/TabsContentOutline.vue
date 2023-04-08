<script setup lang='ts'>
export interface Props {
    TabsContentTextColor?: string
    TabsContentWidth?: number | string
};

const props = withDefaults(defineProps<Props>(), {
    TabsContentTextColor: 'text-black dark:text-white',
});
</script>

<template>
    <section :class="[ props.TabsContentWidth ? `rounded-md p-4 w-72 sm:w-${props.TabsContentWidth}` : `w-72 rounded-md bg-gray-100 dark:bg-gray-500 p-4 sm:w-[768px]`]">
        <div :class="props.TabsContentTextColor">
            <slot/>
        </div>
    </section>
</template>