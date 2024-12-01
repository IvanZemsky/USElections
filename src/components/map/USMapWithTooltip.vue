<script setup lang="ts">
import type { Election } from '@/model/types/election'
import StateInfoTooltip from '../StateInfoTooltip.vue'
import { useTooltip } from '@/hooks/useTooltip'
import USMap from './USMap.vue'

const { election } = defineProps<{ election: Election }>()
const tooltipWidth = 340
const { tooltipContent, tooltipPosition, showTooltip, hideTooltip } = useTooltip(tooltipWidth)
</script>

<template>
  <USMap :election="election" @on-tooltip-open="showTooltip" @on-tooltip-close="hideTooltip" />
  <StateInfoTooltip :content="tooltipContent" :position="tooltipPosition" :width="tooltipWidth" />
</template>
