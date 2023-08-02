<script setup lang='ts'>
export interface Props {
  TabsFloatContentTextColor?: string
  TabsFloatContentBackgroundColor?: string
};

const props = withDefaults(defineProps<Props>(), {
  TabsFloatContentTextColor: 'text-black',
  TabsFloatContentBackgroundColor: 'bg-gray-100',

})
</script>

<template>
  <section :class="`rounded-md p-4 ${props.TabsFloatContentBackgroundColor} rounded-md p-4 w-72 ${props.TabsFloatContentBackgroundColor} sm:w-full`" class="my-4">
    <div :class="props.TabsFloatContentTextColor">
      <slot />
    </div>
  </section>
</template>
