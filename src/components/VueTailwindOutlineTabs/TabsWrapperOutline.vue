<script setup lang="ts">
import { useAttrs } from 'vue';
const attrs = useAttrs();
</script>
<template>
  <section class="flex" v-bind="attrs">
    <div class='scrollbar-hide overflow-auto sm:flex sm:overflow-auto'>
      <ul class="flex justify-between items-center px-2 w-full">
        <slot />
      </ul>
    </div>
  </section>
</template>
  