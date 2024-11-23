<script setup lang="ts">
import States from "./components/States.vue";
import BaseButton from './components/ui/BaseButton.vue'
import { states } from "./model/states";


</script>

<template>
  <div class="p-6">
    <h1 className="text-3xl font-bold underline mb-5">Hello world!</h1>
    <BaseButton>Click me</BaseButton>
    <States :states="states"/>
  </div>
</template>

<style>
  
</style>
