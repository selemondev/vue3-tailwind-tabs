<script setup lang="ts">
import { useAttrs } from 'vue';
const attrs = useAttrs();
</script>
<template>
  <section>
    <div class='scrollbar-hide overflow-auto sm:flex sm:w-full sm:overflow-auto'>
      <ul v-bind="attrs" class="flex space-x-6 items-center w-full">
        <slot />
      </ul>
    </div>
  </section>
</template>
  