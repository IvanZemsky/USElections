<script setup lang="ts">
import type { Election } from '@/model/types/election'
import VotedStateLine from './VotedStateLine.vue'
import { stateElection } from '@/model/data/stateElection'
import type { State } from '@/model/types/state'

const { election } = defineProps<{ election: Election }>()

const isTwoSides = election.sides.length === 2

const states = stateElection.find((result) => result.electionId === election.id)?.stateResults || []

const getStatesByParty = (states: State[], party: string): State[] => {
  return states.filter((state) => {
    const maxVotes = Math.max(...state.sides.map((s) => s.popularVotes))
    const hasTargetPartyWon = state.sides.some(
      (side) => side.party === party && side.popularVotes === maxVotes,
    )
    return hasTargetPartyWon
  })
}
</script>

<template>
  <div class="w-full flex flex-col gap-4">
    <div
      :class="`flex ${isTwoSides ? 'flex-col last:flex-col-reverse' : 'flex-col'} gap-3`"
      v-for="side in election.sides"
    >
      <div class="flex gap-2 items-center">
        <p :class="`text-3xl font-bold text-${side.color}`">
          {{ side.electoralVotes }}
        </p>
        <p :class="`text-2xl font-semibold text-${side.color}`">
          {{ side.candidate }}
        </p>
        <p class="text-neutral-400 uppercase">{{ side.popularVotes }} votes</p>
      </div>
      <VotedStateLine :states="getStatesByParty(states, side.party)" :color="side.color" />
    </div>
  </div>
</template>
