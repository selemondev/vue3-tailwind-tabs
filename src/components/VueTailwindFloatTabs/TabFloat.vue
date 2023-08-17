<script setup lang='ts'>
export interface Props {
  floatTitle: string
  floatIsActive: boolean
  floatActiveTitleColor?: string
  floatTitleColor?: string
  floatTitleSize?: string
  floatBarColor?: string
}
const props = withDefaults(defineProps<Props>(), {
  floatActiveTitleColor: 'text-green-500',
  floatBarColor: 'bg-gray-100',
  floatTitleSize: 'text-base',
  floatTitleColor: 'text-black',
})

const emit = defineEmits<{
  (event: 'onClick'): void
}>()

function handleClick() {
  return emit('onClick')
}
</script>

<template>
  <div class="relative z-20 mx-2">
    <div class="px-4">
      <li
        class="cursor-pointer h-12 rounded-lg flex justify-center items-center px-4 space-x-1"
        @click="handleClick()"
      >
        <slot name="icon" />
        <div class="py-2 w-12 sm:w-auto">
          <span
            :class="[
              props.floatTitleSize ? `${props.floatTitleSize} font-bold` : '',
              props.floatIsActive ? props.floatActiveTitleColor : '',
              props.floatTitleColor ? props.floatTitleColor : 'text-black dark:text-white']"
          >{{
            props.floatTitle }}</span>
        </div>
      </li>
      <div>
        <Transition enter-from-class="translate-x-[-20px] opacity-0" enter-active-class="transition duration-300">
          <div
            v-if="props.floatIsActive" :class="[props.floatBarColor || '']"
            class="absolute rounded-md inset-0 w-full -z-10"
          />
        </Transition>
      </div>
    </div>
  </div>
</template>
