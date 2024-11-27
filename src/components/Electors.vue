<script setup lang="ts">
import { createVotedStatesDiagram } from '@/helpers/createVotedStatesDiagram'
import type { State, StateInDiagram } from '@/model/types/state'
import { onMounted, ref, type Ref } from 'vue'

const states: State[] = [
  { name: '1', electorsAmount: 7 },
  { name: '2', electorsAmount: 6 },
  { name: '3', electorsAmount: 5 },
  { name: '4', electorsAmount: 8 },
  { name: '5', electorsAmount: 1 },
  { name: '5', electorsAmount: 4 },
  { name: '5', electorsAmount: 5 },
  { name: '5', electorsAmount: 38 },
]
let ready: Ref<StateInDiagram[]> = ref([])

onMounted(() => {
  const data = createVotedStatesDiagram({ states, columnAmount: 3, rectSize: 8.2 })
  ready.value = data
})
</script>

<template>
  <svg width="100%" height="25" viewBox="0 0 400 25" preserveAspectRatio="xMinYMin meet">
    <g
      v-for="state in ready"
      :key="state.name"
      stroke-width="0.1"
      class="stroke-white transition cursor-pointer odd:brightness-90 hover:brightness-75"
    >
      <rect
        v-for="(rect, index) in state.coords"
        :key="index"
        :x="rect.x"
        :y="rect.y"
        width="8.2"
        height="8.2"
        class="fill-red-500"
      />
    </g>
    <rect
      class="w-full h-full fill-transparent stroke-black pointer-events-none"
      stroke-width="2"
      stroke-linejoin="round"
    />
  </svg>
</template>
