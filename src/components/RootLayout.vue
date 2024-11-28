<script setup lang="ts">
import MainHeader from './MainHeader.vue'
import BaseWrapper from "./ui/BaseWrapper.vue";
</script>

<template>
  <MainHeader />
  <BaseWrapper>
    <router-view></router-view>
  </BaseWrapper>
</template>
