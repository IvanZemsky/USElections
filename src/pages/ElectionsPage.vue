<script setup lang="ts">
import StateByGroupDiagram from '@/components/diagrams/StateByGroupDiagram/StateByGroupDiagram.vue'
import VotedStateDiagram from '@/components/diagrams/VotedStateDiagram/VotedStateDiagram.vue'
import USMapWithTooltip from "@/components/map/USMapWithTooltip.vue";
import { elections } from '@/model/data/elections'
import { provide } from "vue";

const election2024 = elections[0]

provide('election', election2024)
</script>

<template>
  <div class="flex flex-col items-center gap-8 py-8">
    <h1 class="max-w-5xl text-center font-bold text-6xl">US 2024 Presidential Election Results</h1>

    <div class="flex items-center gap-4">
      <img
        class="bg-white w-auto h-20"
        src="/src/model/data/images/democraticLogo2024.png"
        alt="Democratic party logo"
      />
      <span class="text-2xl">VS</span>
      <img
        class="bg-white w-auto h-20"
        src="/src/model/data/images/republicanLogo2024.png"
        alt="Republican party logo"
      />
    </div>

    <p class="max-w-xl text-justify text-xl">
      Presidential elections were held in the United States on November 5, 2024. The Republican
      Party's ticket— Donald Trump, who was the 45th president of the United States from 2017 to
      2021, and JD Vance, the junior U.S. senator from Ohio — defeated the Democratic Party's ticket
      — Kamala Harris, the U.S. vice president, and Tim Walz, the governor of Minnesota.
    </p>

    <VotedStateDiagram :election="election2024" />

    <div class="max-w-5xl w-full my-auto">
      <USMapWithTooltip :election="election2024" />
    </div>

    <p class="text-sm text-neutral-400">
      Note: Maine gives two electoral votes to the candidate who wins statewide, and one to the
      winner of each of its two congressional districts. Nebraska gives two electoral votes to the
      candidate who wins statewide, and one to the winner of each of its three congressional
      districts.
    </p>

    <StateByGroupDiagram :election="election2024" />
  </div>
</template>
