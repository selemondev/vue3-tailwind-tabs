<script setup lang='ts'>
export interface Props {
    floatTitle: string,
    floatIsActive: boolean,
    floatActiveTitleColor: string,
    floatTitleSize?: string,
    floatBarColor?: string
}
const props = withDefaults(defineProps<Props>(), {
    floatActiveTitleColor: 'text-purple-500',
    floatBarColor: 'bg-gray-400/30 dark:bg-gray-500/30',
    floatTitleSize: 'text-base'
});
</script>

<template>
    <div class="relative z-20 mx-2">
        <div class="px-4">
            <li @click="$emit('onClick')"
                class="cursor-pointer h-12 rounded-lg flex justify-center items-center px-4 space-x-1">
                <slot name="icon"></slot>
                <div class="py-2 w-12 sm:w-auto">
                    <span
                        :class="[props.floatIsActive || props.floatTitleSize ? `${props.floatActiveTitleColor} ${props.floatTitleSize} font-bold` : `text-black ${props.floatTitleSize} dark:text-white`]">{{
                            props.floatTitle }}</span>
                </div>
            </li>
            <div>
                <Transition enter-from-class="translate-x-[-20px] opacity-0" enter-active-class="transition duration-300">
                    <div v-if="props.floatIsActive" :class="[props.floatBarColor || '']"
                        class="absolute rounded-md inset-0 w-full -z-10"></div>
                </Transition>
            </div>
        </div>
    </div>
</template>