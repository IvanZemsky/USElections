<script setup lang="ts">
import type { Component } from 'vue'

type Props = {
  variant?: 'filled' | 'outlined'
  class?: string
  icon?: Component
  iconClass?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'outlined',
  class: '',
  iconClass: '',
})

const styles = {
  outlined: 'hover:bg-black hover:text-white',
  filled: 'bg-black text-white hover:bg-white hover:text-black',
}
const iconStyles = {
  outlined: 'fill-black group-hover:fill-white',
  filled: 'fill-white group-hover:fill-black',
}
</script>

<template>
  <button
    :class="`group flex justify-center items-center gap-2 p-1 border border-black transition ${styles[variant]} ${props.class}`"
  >
    <slot />
    <component :is="icon" :class="`transition ${iconStyles[variant]} ${iconClass}`" />
  </button>
</template>
