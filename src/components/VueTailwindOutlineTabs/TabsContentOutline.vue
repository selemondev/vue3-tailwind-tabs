<script setup lang='ts'>
export interface Props {
  TabsContentTextColor?: string
  TabsContentBackgroundColor?: string
};

const props = withDefaults(defineProps<Props>(), {
  TabsContentTextColor: 'text-black',
  TabsContentBackgroundColor: 'bg-gray-100',
})
</script>

<template>
  <section :class="`p-4  ${props.TabsContentBackgroundColor} ${props.TabsContentBackgroundColor}`">
    <div :class="props.TabsContentTextColor">
      <slot />
    </div>
  </section>
</template>
