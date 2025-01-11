<template>
  <div class="flex relative flex-col grow text-2xl leading-10 text-white tracking-[2px] max-md:mt-10">
    <!-- <img
      src="/images/quote-mark.svg"
      alt=""
      loading="lazy"
      class="object-contain self-center aspect-square w-[90px]"
      aria-hidden="true"
    /> -->
    <p class="mt-3.5 max-md:max-w-full">
      <span>{{ preHighlight }}</span>
      <span class="font-bold text-amber-300">{{ quote.highlightedText }}</span>
      <span>{{ postHighlight }}</span>
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Quote } from './types'

interface Props {
  quote: Quote
}

const props = defineProps<Props>()

const preHighlight = computed(() => {
  return props.quote.text.split(props.quote.highlightedText)[0]
})

const postHighlight = computed(() => {
  return props.quote.text.split(props.quote.highlightedText)[1]
})
</script>