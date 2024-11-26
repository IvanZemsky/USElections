<script setup lang="ts">
import type { StateSVG } from '@/types/types'

type Props = {
  states: StateSVG[]
}

defineProps<Props>()
</script>

<template>
  <svg
    class="w-full"
    viewBox="0 0 950 650"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      v-for="state in states"
      :id="state.id"
      :d="state.d"
      stroke-width="1"
      class="fill-neutral-300 stroke-white transition cursor-pointer hover:brightness-90"
    />
  </svg>
</template>
