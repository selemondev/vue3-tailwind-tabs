<script lang="ts" setup>
const props = withDefaults(defineProps<{
  TabWrapperWidth?: number | string
}>(), {
  TabWrapperWidth: '[768px]'
});
</script>
<template>
    <section class="grid place-items-center sm:hidden">
      <div class="w-72 scrollbar-hide overflow-auto">
        <ul class="flex justify-between items-center w-full">
          <slot />
        </ul>
      </div>
    </section>
    <section>
      <div :class="[props.TabWrapperWidth ? `hidden scrollbar-hide overflow-auto sm:flex sm:w-${props.TabWrapperWidth}` : 'sm:w-full sm:overflow-auto']">
        <ul class="flex justify-between items-center sm:w-full sm:flex sm:justify-between sm:items-center">
          <slot />
        </ul>
      </div>
    </section>
  </template>
  