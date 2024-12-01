<script setup lang="ts">
import type { StateInDiagram } from '@/model/types/state'
import { setPath } from '@/utils/setPath'
import { RouterLink } from 'vue-router'

type Props = {
  state: StateInDiagram
  rectSize: number
  color: string
}

const { state, rectSize, color } = defineProps<Props>()
</script>

<template>
  <RouterLink :to="setPath('', state.name)" class="odd:brightness-90">
    <g
      stroke-width="0.1"
      class="stroke-white transition cursor-pointer hover:brightness-75"
    >
      <rect
        v-for="(rect, index) in state.coords"
        :key="index"
        :x="rect.x"
        :y="rect.y"
        :width="rectSize"
        :height="rectSize"
        :class="`fill-${color}`"
      />
    </g>
  </RouterLink>
</template>
