<script setup>
import { STATE_NAMES } from "@/model/constants/constants";
import { useRoute } from "vue-router";


const route = useRoute()

const stateName = STATE_NAMES[route.params.state.toUpperCase()]
</script>

<template>
  <h1>US Election 2024 {{ stateName }} Election Results</h1>
</template>
