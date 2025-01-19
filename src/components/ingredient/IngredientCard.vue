<template>
  <div class="flex flex-col items-center font-bold text-white max-md:mt-10">
    <div class="flex shrink-0 bg-white rounded-full h-[108px] w-[108px]">
      <img
        :src="icon"
        :alt="title"
        class="p-4 object-contain"
        width="108" height="108"
      />
    </div>

    <h4 class="mt-8 text-center uppercase whitespace-break-spaces">
      {{ title }}
    </h4>

    <p class="self-stretch mt-7 text-base tracking-wider leading-7 text-center font-normal">
      {{ description }}
    </p>

    <button
      class="
        view-more px-9 py-6 mt-11
        border-2 border-white rounded-[30px]
        w-[167px] text-nowrap
        hover:bg-white hover:text-teal-400
        focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2
        transition-colors
        max-md:px-5 max-md:mt-10
      "
      @click="$emit('view-more')"
    >
      VIEW MORE
    </button>
  </div>
</template>

<script setup lang="ts">
interface Props {
  icon: string
  title: string
  description: string
}

defineProps<Props>()
defineEmits<{
  (e: 'view-more'): void
}>()
</script>

<style scoped>
.view-more {
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.13888rem;
}
</style>