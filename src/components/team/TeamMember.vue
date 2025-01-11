<template>
  <div class="flex relative flex-col grow mt-16 text-center tracking-[2px] max-md:mt-10">
    <img
      :src="member.image"
      :alt="member.name"
      loading="lazy"
      class="object-contain mx-6 aspect-square w-[204px] max-md:mx-2.5"
    />
    <h3 class="self-center mt-10 text-xl font-bold text-white uppercase">
      {{ member.name }}
    </h3>
    <p class="mt-2 text-base text-white">
      {{ member.title }}
    </p>
  </div>
</template>

<script setup lang="ts">
import type { TeamMemberType } from './types'

interface Props {
  member: TeamMemberType
}

defineProps<Props>()
</script>