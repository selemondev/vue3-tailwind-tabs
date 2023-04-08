<script lang="ts" setup>
const props = withDefaults(defineProps<{
  TabFloatWrapperWidth?: number | string
}>(), {
  TabFloatWrapperWidth: '[768px]'
});
</script>
<template>
    <section class="grid place-items-center bg-gray-200 rounded-md sm:hidden">
      <div class="w-72 scrollbar-hide overflow-auto">
        <ul class="flex justify-between items-center w-full">
          <slot />
        </ul>
      </div>
    </section>
    <section>
      <div :class="[props.TabFloatWrapperWidth ? `hidden scrollbar-hide overflow-auto bg-gray-100 rounded-md sm:flex sm:w-${props.TabFloatWrapperWidth}` : 'sm:w-full sm:overflow-auto bg-gray-100 rounded-md']" class="py-4">
        <ul class="flex justify-between items-center sm:w-full sm:flex sm:justify-between sm:items-center">
          <slot />
        </ul>
      </div>
    </section>
  </template>