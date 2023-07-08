<script lang="ts" setup>
import { useAttrs } from 'vue';
const attrs = useAttrs();
const props = withDefaults(defineProps<{
  TabFloatBackgroundColor?: string
}>(), {
  TabFloatBackgroundColor: 'bg-gray-200'
});
</script>
<template>
    <section class="flex" v-bind="attrs">
      <div :class="`scrollbar-hide overflow-auto rounded-md ${props.TabFloatBackgroundColor} sm:flex py-4`">
        <ul class="flex justify-between items-center px-2 w-full">
          <slot />
        </ul>
      </div>
    </section>
  </template>