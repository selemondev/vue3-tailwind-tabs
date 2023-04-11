<script lang="ts" setup>
const props = withDefaults(defineProps<{
  TabFloatBackgroundColor?: string
}>(), {
  TabFloatBackgroundColor: 'bg-gray-200 dark:bg-gray-600/40'
});
</script>
<template>
    <section :class='`grid place-items-center ${props.TabFloatBackgroundColor} rounded-md sm:hidden`'>
      <div class="w-72 scrollbar-hide overflow-auto">
        <ul class="flex justify-between items-center w-full">
          <slot />
        </ul>
      </div>
    </section>
    <section>
      <div :class="`hidden scrollbar-hide overflow-auto rounded-md ${props.TabFloatBackgroundColor} sm:flex sm:w-full py-4`">
        <ul class="flex justify-between items-center sm:w-full sm:flex sm:justify-between sm:items-center">
          <slot />
        </ul>
      </div>
    </section>
  </template>