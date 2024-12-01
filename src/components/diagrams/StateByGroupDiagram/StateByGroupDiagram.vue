<script setup lang="ts">
import { STATE_GROUPS } from '@/model/constants/constants'
import { stateElection } from '@/model/data/stateElection'
import type { Election } from '@/model/types/election'
import type { State, StateGroup } from '@/model/types/state'
import StateByGroupItem from '@/components/diagrams/StateByGroupDiagram/StateByGroupItem.vue'
import { getColor } from '@/helpers/getColor'
import StateInfoTooltip from '@/components/StateInfoTooltip.vue'
import { useTooltip } from '@/hooks/useTooltip'

const { election } = defineProps<{ election: Election }>()

const states = stateElection.find((result) => result.electionId === election.id)?.stateResults || []
const tooltipWidth = 340
const { tooltipContent, tooltipPosition, showTooltip, hideTooltip } = useTooltip(tooltipWidth)

const filterStatesByGroup = (states: State[], group: StateGroup) => {
  return states.filter((state) => state.group === group)
}
</script>

<template>
  <div class="flex flex-wrap justify-center gap-10">
    <div class="text-center w-44" v-for="group in STATE_GROUPS" :key="group">
      <h3 class="mb-3 text-sm font-semibold">{{ group }}</h3>
      <div class="flex flex-wrap justify-center gap-1">
        <StateByGroupItem
          v-for="state in filterStatesByGroup(states, group)"
          :key="state.name"
          :label="state.name.toUpperCase()"
          :name="state.name"
          :color="getColor(state.sides)"
          @onTooltipOpen="(event) => showTooltip(event, state)"
          @onTooltipClose="hideTooltip"
        />
      </div>
    </div>
  </div>
  <StateInfoTooltip :position="tooltipPosition" :content="tooltipContent" :width="tooltipWidth"/>
</template>
