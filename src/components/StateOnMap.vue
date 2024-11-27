<script setup lang="ts">
import { statesSVG } from '@/model/states'
import type { State } from '@/model/types/state'

type Props = {
  state: State
}

const { state } = defineProps<Props>()

const id = state.name.toUpperCase()

const color = state.sides.reduce((bestSide, currentSide) => {
  return currentSide.popularVotes > bestSide.popularVotes ? currentSide : bestSide;
}, state.sides[0]).color;

</script>

<template>
  <path
    :id="id"
    :d="statesSVG[state.name.toUpperCase()]"
    stroke-width="1"
    :class="`fill-${color} stroke-white transition cursor-pointer hover:brightness-90`"
  />
</template>
