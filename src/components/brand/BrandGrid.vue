<template>
  <div class="grid grid-cols-3 gap-8 mt-16 w-full max-md:grid-cols-2">
    <div
      v-for="brand in brands"
      :key="brand.id"
      class="flex items-center justify-center p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
    >
      <img
        :src="brand.logo"
        :alt="brand.name"
        loading="lazy"
        class="object-contain max-h-16 w-auto filter grayscale hover:grayscale-0 transition-all"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Brand } from './types'

interface Props {
  brands: Brand[]
}

defineProps<Props>()
</script>