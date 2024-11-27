<script setup lang="ts">
import type { State } from '@/model/types/state'
import StateOnMap from './StateOnMap.vue'

type Props = {
  states: State[]
}

defineProps<Props>()
</script>

<template>
  <svg class="w-full" viewBox="0 0 950 650" fill="none" xmlns="http://www.w3.org/2000/svg">
    <StateOnMap v-for="state in states" :key="state.name" :state="state" />
  </svg>
</template>
