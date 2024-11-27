<script setup>
import CheckIcon from './icons/CheckIcon.vue'
import BaseWrapper from './ui/BaseWrapper.vue'
import BaseButton from './ui/BaseButton.vue'
import ArrowBottomIcon from './icons/ArrowBottomIcon.vue'
</script>

<template>
  <header class="flex min-h-24 py-3 border-b">
    <BaseWrapper>
      <div class="h-full flex justify-between gap-2">
        <div class="flex items-center pr-3 border-r border-r-black">
          <span class="text-4xl text-blue-400 font-bold">2</span>
          <span class="text-4xl text-red-500 font-bold">0</span>
          <span class="text-4xl text-blue-400 font-bold">2</span>
          <span class="text-4xl text-red-500 font-bold">4</span>
        </div>
        <div class="flex items-center">
          <div class="flex items-end gap-2 font-semibold">
            <span class="text-2xl text-blue-400">Dem</span>
            <span class="text-3xl text-blue-400">226</span>
            <span class="text-black text-3xl">|</span>
            <span class="text-3xl text-red-500">312</span>
            <span class="text-2xl text-red-500">Rep</span>
            <CheckIcon class="w-6 mb-1 fill-red-500" />
          </div>
        </div>
        <div class="flex items-center gap-3 pl-3 border-l border-black">
          <p class="uppercase text-xl">Results</p>
          <p class="uppercase text-xl">Custom</p>
          <BaseButton class="px-5 uppercase" :icon="ArrowBottomIcon" iconClass="w-3 mt-1">
            Select state
          </BaseButton>
        </div>
      </div>
    </BaseWrapper>
  </header>
</template>
