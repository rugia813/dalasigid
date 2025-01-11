<template>
  <div class="flex flex-col items-center font-bold text-white max-md:mt-10">
    <div class="flex shrink-0 bg-white rounded-full h-[108px] w-[108px]">
      <img
        :src="icon"
        :alt="title"
        class="p-4"
      />
    </div>

    <h3 class="mt-8 text-xl text-center uppercase tracking-[2px]">
      {{ title }}
    </h3>

    <p class="self-stretch mt-7 text-base tracking-wider leading-7 text-center font-normal">
      {{ description }}
    </p>

    <button
      class="px-9 py-6 mt-11 text-sm border-2 border-white rounded-[30px] tracking-[2.22px] w-[167px] hover:bg-white hover:text-teal-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 transition-colors max-md:px-5 max-md:mt-10"
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