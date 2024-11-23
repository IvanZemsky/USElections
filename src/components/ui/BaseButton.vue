<script setup lang="ts">
type Props = {
  variant?: 'filled' | 'outlined'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'outlined',
})

const styles = {
   outlined: 'p-1 border border-black transition hover:bg-black hover:text-white',
   filled: "p-1 border border-black bg-black text-white transition hover:bg-white hover:text-black"
}
</script>

<template>
  <button
    :class="styles[variant]"
  >
    <slot />
  </button>
</template>
