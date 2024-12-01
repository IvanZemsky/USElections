<script setup lang="ts">
import { getColor } from '@/helpers/getColor'
import { STATE_NAMES } from '@/model/constants/constants'
import type { Election } from '@/model/types/election'
import type { State, StateElectionSide } from '@/model/types/state'
import { inject } from 'vue'
import CheckIcon from './icons/CheckIcon.vue'

type Props = {
  content: State | null
  position: { x: number; y: number }
  width: number
}

const { content, position, width } = defineProps<Props>()

const election = inject('election') as Election
const getElectionSideByParty = (party: string) =>
  election.sides.find((election) => election.party === party)

const getPercentOfVotes = (sides: StateElectionSide[], party: string) => {
  const allVotes = sides.reduce((sum, side) => sum + side.popularVotes, 0)
  const targetSide = sides.find((side) => side.party === party)

  if (targetSide) {
    return ((targetSide.popularVotes / allVotes) * 100).toFixed(1)
  }

  return null
}

const sortSidesByPopularVotes = (sides: StateElectionSide[]) =>
  sides.sort((a, b) => b.popularVotes - a.popularVotes)
</script>

<template>
  <div
    v-if="content"
    :style="{
      width: `${width}px`,
      top: `${position.y}px`,
      left: `${position.x}px`,
    }"
    :class="`absolute flex flex-col bg-white rounded overflow-hidden`"
  >
    <div :class="`w-full h-3 bg-${getColor(content.sides)}`"></div>
    <div class="flex flex-col gap-2 p-3">
      <div class="flex items-center gap-3">
        <strong class="font-bold text-lg">
          {{ STATE_NAMES[content.name.toUpperCase()] }}
        </strong>
        <p class="text-neutral-400 text-sm uppercase">{{ content.electorCount }} electoral votes</p>
      </div>
      <div class="flex flex-col" v-for="(side, index) in sortSidesByPopularVotes(content.sides)">
        <p :class="`${index === 0 ? 'font-bold' : ''}`">
          {{ getElectionSideByParty(side.party)?.candidate }}
          <CheckIcon v-if="index === 0" class="inline-block w-4 mb-1 fill-black" />
        </p>

        <div class="flex items-center justify-between mb-1 gap-2">
          <p class="text-neutral-400 text-sm">{{ side.party }}</p>
          <div class="flex flex-center gap-2">
            <p class="text-neutral-400 text-sm">{{ side.popularVotes.toLocaleString('en-US') }}</p>
            <p class="text-sm">{{ getPercentOfVotes(content.sides, side.party) }}%</p>
          </div>
        </div>

        <div class="h-2 bg-neutral-300">
          <div
            :style="{ width: `${getPercentOfVotes(content.sides, side.party)}%` }"
            :class="`h-full bg-${side.color}`"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
