<!-- eslint-disable vue/prop-name-casing -->
<script lang="ts" setup>
import classNames from 'classnames'
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  TabFloatBackgroundColor?: string
  TabFloatCenter?: boolean
  TabFloatStart?: boolean
  TabFloatEnd?: boolean
}>(), {
  TabFloatBackgroundColor: 'bg-gray-200',
})

const sectionClass = computed(() => {
  return classNames(
    'flex',
    props.TabFloatCenter && 'justify-center',
    props.TabFloatEnd && 'justify-end',
    props.TabFloatStart && 'justify-start',
  )
})
</script>

<template>
  <section :class="sectionClass">
    <div :class="`scrollbar-hide overflow-auto rounded-md ${props.TabFloatBackgroundColor} sm:flex py-4`">
      <ul class="flex justify-between items-center px-2 w-full">
        <slot />
      </ul>
    </div>
  </section>
</template>
