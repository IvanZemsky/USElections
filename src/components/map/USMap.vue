<script setup lang="ts">
import StateOnMap from './StateOnMap.vue'
import { stateElection } from '@/model/data/stateElection'
import type { Election } from '@/model/types/election'
import type { State } from '@/model/types/state'
import { ref } from 'vue'
import StateInfoTooltip from '../StateInfoTooltip.vue'

const { election } = defineProps<{ election: Election }>()

const states = stateElection.find((result) => result.electionId === election.id)?.stateResults || []

const tooltipPosition = ref({ x: 0, y: 0 })
const tooltipContent = ref<State | null>(null)

const showTooltip = (event: MouseEvent, content: State) => {
  tooltipContent.value = content

  const mouseX = event.pageX + 10
  const mouseY = event.pageY + 10

  tooltipPosition.value = {
    x: mouseX,
    y: mouseY,
  }
}

const hideTooltip = () => {
  tooltipContent.value = null
}
</script>

<template>
  <svg class="w-full" viewBox="0 0 950 650" fill="none" xmlns="http://www.w3.org/2000/svg">
    <StateOnMap
      v-for="state in states"
      :key="state.name"
      :state="state"
      @onTooltipOpen="(event) => showTooltip(event, state)"
      @onTooltipClose="hideTooltip"
    />
  </svg>

  <StateInfoTooltip :content="tooltipContent" :position="tooltipPosition" />
</template>
