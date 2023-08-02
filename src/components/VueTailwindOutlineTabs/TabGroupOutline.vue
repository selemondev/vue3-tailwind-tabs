<script setup lang='ts'>
const props = withDefaults(defineProps<{
  TabGroupWidth?: string | number
}>(), {
  TabGroupWidth: 'w-72 sm:w-[768px]',
})
</script>

<template>
  <div :class="[props.TabGroupWidth ? props.TabGroupWidth : '']" class="rounded-md overflow-x-auto">
    <slot />
  </div>
</template>
