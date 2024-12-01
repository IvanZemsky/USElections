<script setup lang="ts">
import { setPath } from "@/utils/setPath";
import { RouterLink } from "vue-router";

type Props = {
  size?: number
  name: string
  fontSize?: number
  color: string
  label?: string
}

withDefaults(defineProps<Props>(), {
  size: 40,
  fontSize: 14,
})

const emit = defineEmits(['onTooltipOpen', 'onTooltipClose'])
</script>

<template>
  <RouterLink :to="setPath('', name)">
    <svg
      :width="size"
      :height="size"
      view-box="0 0 45 45"
      @mouseenter="(event) => emit('onTooltipOpen', event)"
      @mousemove="(event) => emit('onTooltipOpen', event)"
      @mouseleave="emit('onTooltipClose')"
    >
      <rect
        width="100%"
        height="100%"
        :class="`fill-${color} stroke-black transition cursor-pointer hover:brightness-90`"
        rx="1"
        ry="1"
      />
      <text
        x="50%"
        y="50%"
        text-anchor="middle"
        dominant-baseline="middle"
        class="text-black pointer-events-none"
        :font-size="fontSize"
        font-weight="500"
      >
        {{ label }}
      </text>
    </svg>
  </RouterLink>
</template>
