<script setup lang="ts">
import { createVotedStatesDiagramLine } from '@/helpers/createVotedStatesDiagramLine'
import type { State, StateInDiagram } from '@/model/types/state'
import { onMounted, ref, type Ref, computed } from 'vue'
import VotedState from './VotedState.vue'

type Props = {
  states: State[]
  color: string
}

const { states, color } = defineProps<Props>()

const rectSize = 9
const columnAmount = 3
const height = rectSize * columnAmount

let ready: Ref<StateInDiagram[]> = ref([])

onMounted(() => {
  const data = createVotedStatesDiagramLine({ states, columnAmount, rectSize })
  ready.value = data
})

const boundingBox = computed(() => {
  let minX = 0
  let maxX = 0
  let minY = 0
  let maxY = 0

  ready.value.forEach((state) => {
    state.coords.forEach((rect) => {
      const rectX = rect.x
      const rectY = rect.y
      minX = Math.min(minX, rectX)
      maxX = Math.max(maxX, rectX + rectSize)
      minY = Math.min(minY, rectY)
      maxY = Math.max(maxY, rectY + rectSize)
    })
  })

  return { minX, maxX, minY, maxY }
})
</script>

<template>
  <svg width="100%" :height="height" :viewBox="`0 0 1000 ${height}`" preserveAspectRatio="xMinYMin meet">
    <VotedState
      v-for="state in ready"
      :key="state.name"
      :state="state"
      :rect-size="rectSize"
      :color="color"
    />
    <rect
      class="fill-transparent stroke-black pointer-events-none"
      :x="0"
      :y="0"
      :width="boundingBox.maxX - boundingBox.minX"
      :height="boundingBox.maxY - boundingBox.minY"
      rx="1"
      ry="1"
      stroke-width="2"
      stroke-linejoin="round"
    />
  </svg>
</template>
