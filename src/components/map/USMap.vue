<script setup lang="ts">
import StateOnMap from './StateOnMap.vue'
import { stateElection } from '@/model/data/stateElection'
import type { Election } from '@/model/types/election'

const { election } = defineProps<{ election: Election }>()
const emit = defineEmits(['onTooltipOpen', 'onTooltipClose'])

const states = stateElection.find((result) => result.electionId === election.id)?.stateResults || []
</script>

<template>
  <div class="w-full">
    <div class="flex justify-center gap-8">
      <div class="flex items-center justify-center gap-1" v-for="side in election.sides">
        <p class="uppercase">{{ side.candidate }}</p>
        <div :class="`w-12 h-4 bg-${side.color}`"></div>
      </div>
    </div>

    <svg class="w-full" viewBox="0 0 950 650" fill="none" xmlns="http://www.w3.org/2000/svg">
      <StateOnMap
        v-for="state in states"
        :key="state.name"
        :state="state"
        @onTooltipOpen="(event) => emit('onTooltipOpen', event, state)"
        @onTooltipClose="emit('onTooltipClose')"
      />
    </svg>
  </div>
</template>
