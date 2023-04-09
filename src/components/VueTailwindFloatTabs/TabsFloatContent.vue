<script setup lang='ts'>
export interface Props {
    TabsFloatContentTextColor?: string
    TabsFloatContentWidth?: number | string,
    TabsFloatContentBackgroundColor?: string
};

const props = withDefaults(defineProps<Props>(), {
    TabsFloatContentTextColor: 'text-black dark:text-white',
    TabsFloatContentBackgroundColor: 'bg-gray-100 dark:bg-gray-400/30'

});
</script>

<template>
    <section :class="[props.TabsFloatContentWidth ? `rounded-md p-4 w-${props.TabsFloatContentWidth} ${props.TabsFloatContentBackgroundColor}` : `rounded-md p-4 w-72 ${props.TabsFloatContentBackgroundColor} sm:w-[768px]`]" class="my-4">
        <div :class="props.TabsFloatContentTextColor">
            <slot/>
        </div>
    </section>
</template>