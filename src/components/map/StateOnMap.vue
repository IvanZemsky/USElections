<script setup lang="ts">
import { getColor } from '@/helpers/getColor'
import { statesSVG } from '@/model/states'
import type { State } from '@/model/types/state'
import { setPath } from "@/utils/setPath";
import { RouterLink } from "vue-router";

type Props = {
  state: State
}

const { state } = defineProps<Props>()
const emit = defineEmits(['onTooltipOpen', 'onTooltipClose'])

const id = state.name.toUpperCase()
</script>

<template>
  <RouterLink :to="setPath('', state.name)">
    <path
      :id="id"
      :d="statesSVG[id]"
      stroke-width="0.3"
      :class="`fill-${getColor(state.sides)} stroke-black transition cursor-pointer hover:brightness-90`"
      @mouseenter="(event) => emit('onTooltipOpen', event)"
      @mousemove="(event) => emit('onTooltipOpen', event)"
      @mouseleave="emit('onTooltipClose')"
    />
  </RouterLink>
</template>
