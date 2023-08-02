<script setup lang="ts">
import classNames from 'classnames'
import { computed } from 'vue'

const props = defineProps<{
  TabOutlineCenter?: boolean
  TabOutlineStart?: boolean
  TabOutlineEnd?: boolean
}>()

const sectionClass = computed(() => {
  return classNames(
    'flex',
    props.TabOutlineCenter && 'justify-center',
    props.TabOutlineEnd && 'justify-end',
    props.TabOutlineStart && 'justify-start',
  )
})
</script>

<template>
  <section :class="sectionClass">
    <div class="scrollbar-hide overflow-auto sm:flex sm:overflow-auto">
      <ul class="flex justify-between items-center px-2 w-full">
        <slot />
      </ul>
    </div>
  </section>
</template>
