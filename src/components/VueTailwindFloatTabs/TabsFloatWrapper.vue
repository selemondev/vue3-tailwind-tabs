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
    <section>
      <div :class="`hidden scrollbar-hide overflow-auto rounded-md ${props.TabFloatBackgroundColor} sm:flex py-4`">
        <ul v-bind="attrs" class="flex items-center w-full">
          <slot />
        </ul>
      </div>
    </section>
  </template>