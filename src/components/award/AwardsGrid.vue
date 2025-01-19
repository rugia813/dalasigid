<template>
  <div class="flex flex-col mt-8 w-full max-md:mt-10 max-w-[566px]">
    <div class="grid grid-cols-2 gap-5 max-lg:grid-cols-1">
      <template v-for="(award, index) in awards" :key="index">
        <img
          loading="lazy"
          src="@/assets/award.png"
          :alt="award.title"
          width="283" height="108"
          class="object-contain aspect-[2.62]"
        />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Award {
  image: string
  title: string
}

const awards: Award[] = [
  { image: '@/assets/award.png', title: 'Award 1' },
  { image: '@/assets/award.png', title: 'Award 2' },
  { image: '@/assets/award.png', title: 'Award 3' },
  { image: '@/assets/award.png', title: 'Award 4' }
]
</script>