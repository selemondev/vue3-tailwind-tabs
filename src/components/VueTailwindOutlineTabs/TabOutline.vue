<script setup lang='ts'>
export interface Props {
  title: string
  isActive: boolean
  activeTitleColor?: string
  titleSize?: string
  titleColor?: string
  barColor?: string
}
const props = withDefaults(defineProps<Props>(), {
  activeTitleColor: 'text-green-500',
  titleSize: 'text-base',
  titleColor: 'text-black',
  barColor: 'border-green-500',
})

const emit = defineEmits<{
  (event: 'onClick'): void
}>()

function handleClick() {
  return emit('onClick')
}
</script>

<template>
  <div class="px-1">
    <div class="pr-10">
      <li class="cursor-pointer flex items-center space-x-1" @click="handleClick()">
        <slot name="icon" />
        <div class="py-2 w-20 sm:w-auto">
          <span
            :class="[
              props.titleSize ? `${props.titleSize} font-bold` : '',
              props.isActive ? props.activeTitleColor : '',
              props.titleColor ? props.titleColor : 'text-black']"
          >
            {{ props.title }}
          </span>
        </div>
      </li>
      <div class="w-full h-1">
        <Transition enter-from-class="translate-x-[-20px] opacity-0" enter-active-class="transition duration-300">
          <div v-if="props.isActive" class="relative flex flex-row">
            <span
              :class="[props.barColor ? `border-2 ${props.barColor} w-full` : 'border-2 border-purple-500 w-full']"
            />
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>
