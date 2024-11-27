<script setup lang="ts">
const props = defineProps<{ class: string }>()
</script>

<template>
  <svg viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg" :class="`${props.class}`">
    <path d="M5.61015 13.5L0.414001 0H10.8063L5.61015 13.5Z" />
  </svg>
</template>
