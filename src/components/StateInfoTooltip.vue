<script setup lang="ts">
import { getColor } from '@/helpers/getColor'
import { STATE_NAMES } from '@/model/constants/constants'
import type { State } from '@/model/types/state'

type Props = {
  content: State | null
  position: { x: number; y: number }
}

const { content, position } = defineProps<Props>()
</script>

<template>
  <div
    v-if="content"
    :style="{
      top: `${position.y}px`,
      left: `${position.x}px`,
    }"
    :class="`absolute flex flex-col bg-white rounded overflow-hidden`"
  >
    <div :class="`w-full h-3 bg-${getColor(content.sides)}`"></div>
    <div class="flex flex-col gap-2 p-2">
      <strong :class="`text-${getColor(content.sides)}`">
        {{ STATE_NAMES[content.name.toUpperCase()] }}
      </strong>
      <strong :class="`text-${getColor(content.sides)}`">{{ position }}</strong>
    </div>
  </div>
</template>
