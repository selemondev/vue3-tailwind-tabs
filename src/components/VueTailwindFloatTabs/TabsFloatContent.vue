<script setup lang='ts'>
export interface Props {
    TabsFloatContentTextColor?: string
    TabsFloatContentWidth?: number | string
};

const props = withDefaults(defineProps<Props>(), {
    TabsFloatContentTextColor: 'text-black dark:text-white',
});
</script>

<template>
    <section :class="[ props.TabsFloatContentWidth ? `rounded-md p-4 w-72 sm:w-${props.TabsFloatContentWidth}` : `w-72 p-4 rounded-md bg-gray-100 dark:bg-gray-500 sm:w-[768px]`]" class="my-4">
        <div :class="props.TabsFloatContentTextColor">
            <slot/>
        </div>
    </section>
</template>